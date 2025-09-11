import { describe, expect, it } from 'vitest';
import { formatModuleName } from './utils';

describe('formatModuleName', () => {
  it('formats module name correctly', () => {
    expect(formatModuleName(1)).toBe('Módulo 001');
    expect(formatModuleName(123)).toBe('Módulo 123');
  });
});
