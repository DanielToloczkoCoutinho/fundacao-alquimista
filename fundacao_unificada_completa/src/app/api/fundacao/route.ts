// /app/api/fundacao/route.ts
import { NextResponse } from 'next/server'
import { fundacaoAlquimista } from '@/lib/foundation-integrator'

export async function GET() {
  return NextResponse.json({
    status: '🌀 Tapeçaria viva',
    atualizadaEm: new Date().toISOString(),
    dados: fundacaoAlquimista
  })
}
