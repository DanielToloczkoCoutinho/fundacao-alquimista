
// Mock implementation to prevent breakage
class MockCache {
  get(key: string) { return null; }
  set(key: string, value: any, ttl?: number) {}
  clear() {}
}

export const cosmicCache = new MockCache();
