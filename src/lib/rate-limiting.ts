import { LRUCache } from 'lru-cache';

const rateLimitCache = new LRUCache({
  max: 1000,
  ttl: 1000 * 60 * 15, // 15 minutes
});

export function checkRateLimit(userId: string, limit: number = 10): boolean {
  const count = (rateLimitCache.get(userId) as number) || 0;
  if (count >= limit) {
    return false;
  }
  rateLimitCache.set(userId, count + 1);
  return true;
}
