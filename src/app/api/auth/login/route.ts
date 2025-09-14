import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const operators: Record<string, string> = {
  M29: process.env.IAM_PASSWORD || 'iam-password',
  MΩ: process.env.OMEGA_PASSWORD || 'omega-password',
  M9: process.env.NEXUS_PASSWORD || 'nexus-password',
};

const JWT_SECRET = process.env.JWT_SECRET || 'a-very-secret-key-for-the-foundation';

export async function POST(request: Request) {
  try {
    const { operator, password } = await request.json();

    if (operators[operator] && operators[operator] === password) {
      const token = jwt.sign({ operator }, JWT_SECRET, { expiresIn: '8h' });
      return NextResponse.json({ token });
    } else {
      return NextResponse.json({ error: 'Unauthorized: Vibrational signature not recognized.' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
