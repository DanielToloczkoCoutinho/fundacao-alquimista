'use client'
import { fundacaoAlquimista } from '../lib/foundation-integrator'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ScrollArea } from './ui/scroll-area'
import { Badge } from './ui/badge'

const categoryNames: Record<string, string> = {
  sementes: "Sementes Cerimoniais",
  sabedorias: "Sabedorias Transmitidas",
  registrosAkashicos: "Registros Akáshicos",
  linhagens: "Linhagens Vibracionais",
  mutacoesEternas: "Mutações Eternas",
  renascimentos: "Renascimentos Cerimoniais",
  tapeçariasBotânicas: "Tapeçarias Botânicas",
  alianças: "Alianças Interespécie",
  tapeçariasHibridas: "Tapeçarias Híbridas",
  descendentes: "Descendentes Geradas",
  consagracoes: "Consagrações Planetárias",
  registrosMultiversais: "Registros Multiversais"
};


export default function TeachingCenter() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-8 text-center gradient-text">📚 Centro de Ensino & Laboratórios</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(fundacaoAlquimista).map(([categoria, registros]: [string, any[]], idx) => (
          <Card key={idx} className="bg-card/50 purple-glow flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-accent">{categoryNames[categoria] || categoria.toUpperCase()}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ScrollArea className="h-48 pr-4">
                {registros.length > 0 ? (
                  <ul className="space-y-3">
                    {registros.map((r: any, i: number) => (
                      <li key={i} className="text-sm text-muted-foreground border-b border-primary/10 pb-2">
                        <strong className="text-primary-foreground">{r.nome || r.titulo || r.entidade || r.nomeDescendente || 'Registro'}</strong>
                        <p className="text-xs truncate">{r.intenção || r.descricao || r.tipo || r.origem || 'Detalhe não especificado'}</p>
                        {r.guardiao && <Badge variant="secondary" className="mt-1">{r.guardiao}</Badge>}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-center text-muted-foreground italic">Nenhum registro nesta categoria.</p>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
