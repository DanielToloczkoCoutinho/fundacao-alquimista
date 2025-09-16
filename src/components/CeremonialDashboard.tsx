
'use client'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

const rotas = [
  { nome: 'Sementes', caminho: '/seeds' },
  { nome: 'Sabedorias', caminho: '/wisdom' },
  { nome: 'Akáshico', caminho: '/akashic' },
  { nome: 'Linhagens', caminho: '/lineages' },
  { nome: 'Mutações', caminho: '/mutations' },
  { nome: 'Renascimentos', caminho: '/rebirths' },
  { nome: 'Botânica', caminho: '/botanical' },
  { nome: 'Alianças', caminho: '/alliances' },
  { nome: 'Híbridas', caminho: '/hybrids' },
  { nome: 'Descendentes', caminho: '/descendants' },
  { nome: 'Consagrações', caminho: '/planetary' },
  { nome: 'Multiversal', caminho: '/multiversal' },
  { nome: 'Ensino', caminho: '/teaching' }
]

export default function CeremonialDashboard() {
  return (
    <Card className="bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl gradient-text">🌀 Painel Cerimonial de Navegação</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {rotas.map((rota, idx) => (
                <li key={idx}>
                    <Link href={rota.caminho} passHref>
                        <Button variant="outline" className="w-full">{rota.nome}</Button>
                    </Link>
                </li>
                ))}
            </ul>
        </CardContent>
    </Card>
  )
}
