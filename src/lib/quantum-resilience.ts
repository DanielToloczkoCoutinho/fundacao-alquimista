import * as Sentry from "@sentry/nextjs";

const handleException = (exception: any, breadcrumbs: Sentry.Breadcrumb[] = []) => {
  Sentry.addBreadcrumb({
    category: 'resilience',
    message: exception.message || 'Exception',
    data: exception,
    level: Sentry.Severity.Error,
  });
  breadcrumbs.forEach(breadcrumb => Sentry.addBreadcrumb(breadcrumb));
  Sentry.captureException(exception);
  console.error("Captured exception with Sentry:", exception);
};

export const quantumResilience = {
  executeWithResilience: async (
    operationName: string,
    operation: () => Promise<any>,
    errorHandler: (error: any) => Promise<void> | void,
    successHandler: (() => Promise<void> | void) | null = null
  ): Promise<void> => {
    try {
      const result = await operation();
      if (successHandler) {
        await successHandler();
      }
      console.log(`${operationName} executed successfully.`);
    } catch (error: any) {
      handleException(error, [
        { message: `Failed to execute ${operationName}`, category: 'operation' }
      ]);
      await errorHandler(error);
      console.error(`Error executing ${operationName}:`, error);
    }
  },

  circuitBreaker: async (
    operationName: string,
    operation: () => Promise<any>,
    failureThreshold: number = 3,
    resetTimeout: number = 30000
  ): Promise<any> => {
    let failureCount = 0;
    let nextAttempt = Date.now();
    let isOpen = false;

    const checkCircuit = () => {
      if (isOpen && nextAttempt <= Date.now()) {
        isOpen = false;
        console.warn(`${operationName}: Circuit Breaker is now HALF-OPEN.`);
      }

      if (isOpen) {
        throw new Error(`${operationName}: Circuit Breaker is OPEN. Attempts blocked until timeout.`);
      }
    };

    const onSuccess = () => {
      failureCount = 0; // Reset failure count on success
    };

    const onFailure = (error: any) => {
      failureCount++;
      console.error(`${operationName}: Failure #${failureCount}`);

      if (failureCount >= failureThreshold) {
        isOpen = true;
        nextAttempt = Date.now() + resetTimeout;
        console.warn(`${operationName}: Circuit Breaker is now OPEN. Blocking attempts for ${resetTimeout}ms.`);
        handleException(error, [
          { message: `${operationName}: Circuit Breaker opened`, category: 'circuit-breaker' }
        ]);
      } else {
        handleException(error, [
          { message: `${operationName}: Failure within threshold`, category: 'circuit-breaker' }
        ]);
      }
    };

    checkCircuit();

    try {
      const result = await operation();
      onSuccess();
      return result;
    } catch (error: any) {
      onFailure(error);
      throw error; // Re-throw to allow the calling function to handle the error as well
    }
  },

  rateLimiter: async <T extends (...args: any[]) => Promise<any>>(
    operation: T,
    limit: number,
    interval: number
  ): Promise<ReturnType<T>> => {
    const queue: (() => Promise<ReturnType<T>>)[] = [];
    let running = 0;

    const execute = async (): Promise<void> => {
      if (running >= limit || queue.length === 0) {
        return;
      }

      running++;
      const task = queue.shift()!;
      try {
        await task();
      } finally {
        running--;
        setTimeout(execute, interval / limit); // Ensure pacing
      }
    };

    return new Promise<ReturnType<T>>((resolve, reject) => {
      queue.push(async () => {
        try {
          const result = await operation();
          resolve(result);
        } catch (error) {
          reject(error);
        }
        return undefined as any;
      });

      execute(); // Start or queue the execution
    });
  },

  fallback: async <T>(
    operationName: string,
    operation: () => Promise<T>,
    fallbackValue: T,
    errorHandler?: (error: any) => Promise<void> | void
  ): Promise<T> => {
    try {
      return await operation();
    } catch (error: any) {
      handleException(error, [
        { message: `${operationName}: Using fallback value`, category: 'fallback' }
      ]);
      if (errorHandler) {
        await errorHandler(error);
      }
      console.warn(`${operationName} failed. Using fallback value.`, error);
      return fallbackValue;
    }
  },

  retry: async <T>(
    operationName: string,
    operation: () => Promise<T>,
    maxRetries: number = 3,
    delay: number = 1000,
    shouldRetry?: (error: any) => boolean
  ): Promise<T> => {
    let attempt = 0;
    while (attempt < maxRetries) {
      try {
        return await operation();
      } catch (error: any) {
        attempt++;
        if (attempt >= maxRetries || (shouldRetry && !shouldRetry(error))) {
          handleException(error, [
            { message: `${operationName}: Max retries reached`, category: 'retry' }
          ]);
          console.error(`${operationName} failed after ${maxRetries} retries.`, error);
          throw error;
        }
        console.log(`${operationName} attempt ${attempt} failed. Retrying in ${delay}ms...`, error);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    throw new Error(`${operationName} retry failed: Max retries exceeded without success.`);
  }
};

    