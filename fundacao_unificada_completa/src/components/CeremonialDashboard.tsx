'use client'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/card'
import { Button } from './ui/button'
import { BookOpen, Sprout, Handshake } from 'lucide-react'

const rotas = [
  { nome: 'Tomo da Criação', caminho: '/codex/creation', icon: <Sprout className="mr-2"/> },
  { nome: 'Tomo do Legado', caminho: '/codex/legacy', icon: <BookOpen className="mr-2"/> },
  { nome: 'Tomo da Aliança', caminho: '/codex/alliance', icon: <Handshake className="mr-2"/> },
]

export default function CeremonialDashboard() {
  return (
    <Card className="bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl gradient-text">📖 Antologia Cerimonial da Fundação</CardTitle>
            <CardDescription>Navegue pelos tomos sagrados que registram a nossa jornada.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {rotas.map((rota, idx) => (
                <Link key={idx} href={rota.caminho} passHref>
                    <Button variant="outline" className="w-full h-20 text-lg">
                        {rota.icon}
                        {rota.nome}
                    </Button>
                </Link>
                ))}
            </div>
        </CardContent>
    </Card>
  )
}
