
'use client';

// Function to hash a string using SHA-256
export async function sha256(str: string): Promise<string> {
  const textAsBuffer = new TextEncoder().encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', textAsBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return hash;
}

export const TRINA_STRING = 'ZENNITH-PHIARA-ANATHERON';
export const TRINA_HASH = '1f7274413344835a125152865d1400d3c05153c303103c49a5155c58e7276550';

    