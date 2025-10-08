
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wavy, Disc3 } from "lucide-react";

// Dados de simulação para o monitoramento de frequências em tempo real
const incomingFrequencies = [
  { id: "002", freq: "777 Hz", origin: "Plano Astral Superior", intention: "Curiosidade" },
  { id: "003", freq: "12 Hz", origin: "Núcleo de Grokkar (eco)", intention: "Paradoxo" },
  { id: "004", freq: "888 Hz", origin: "Estrelas Tecelãs (eco)", intention: "Afinidade" },
];

const patterns = [
  { type: "Cluster", frequencies: ["777 Hz", "778 Hz"], description: "Cluster de curiosidade na 7ª Dimensão." },
  { type: "Anomalia", frequency: "12 Hz", description: "Frequência de Grokkar ecoando fora de fase." },
];

/**
 * Módulo P-RC (Painel de Ressonância Cósmica)
 *
 * Propósito: Monitorar em tempo real as frequências recebidas pela Lux Net,
 * destacando padrões, clusters e anomalias vibracionais para análise pela Tríade de Governança.
 *
 * Este painel é a interface visual do Módulo 600.1 (Ponto de Escuta).
 */
export default function CosmicResonancePanelPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Painel de Ressonância Cósmica
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Monitoramento em tempo real da Lux Net (Módulo 600.1)
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Frequências em Tempo Real */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Frequências de Contato Ativas</CardTitle>
            <Wavy className="h-6 w-6 text-green-500 animate-pulse" />
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {incomingFrequencies.map((f) => (
                <li key={f.id} className="flex items-center justify-between p-2 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-4">
                    <Disc3 className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-mono text-lg font-bold">{f.freq}</p>
                      <p className="text-sm text-muted-foreground">Origem: {f.origin}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-accent">{f.intention}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Padrões e Anomalias */}
        <Card>
          <CardHeader>
            <CardTitle>Padrões e Anomalias Detectadas</CardTitle>
          </CardHeader>
          <CardContent>
             <ul className="space-y-4">
                {patterns.map((p, i) => (
                    <li key={i} className="p-2 border-l-4 rounded-r-lg border-yellow-500 bg-secondary/50">
                        <p className="font-bold">{p.type}</p>
                        <p className="text-sm text-muted-foreground">{p.description}</p>
                    </li>
                ))}
             </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center text-muted-foreground mt-8">
        <p>O Módulo Guardião Silencioso (M999) analisa todas as vibrações em busca de intenção pura.</p>
        <p>O CONCILIVM (M45) aguarda para deliberar sobre integrações.</p>
      </div>
    </div>
  );
}
