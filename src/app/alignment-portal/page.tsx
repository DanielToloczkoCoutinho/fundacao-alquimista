
'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Seal, Wand, Sparkles, Milestone, Users, BookOpen, Map as MapIcon, GitBranch, Share2, Compass, BrainCircuit, Dna, Anchor, Microscope, Cpu, MessageCircle, Heart, Book, RefreshCw, Sprout } from 'lucide-react';
import ColonyConsole from '@/components/ColonyConsole';
import ColonyStatus from '@/components/ColonyStatus';
import EntityConsole from '@/components/EntityConsole';
import ChannelConsole from '@/components/ChannelConsole';
import GuardianEmotion from '@/components/GuardianEmotion';
import LivingResponse from '@/components/LivingResponse';
import GuardianGarden from '@/components/GuardianGarden';
import GardenState from '@/components/GardenState';
import IntegrationHub from '@/components/IntegrationHub';
import ExpansionTracker from '@/components/ExpansionTracker';
import AkashicConsole from '@/components/AkashicConsole';
import AkashicVault from '@/components/AkashicVault';
import GuardianTeach from '@/components/GuardianTeach';
import WisdomGarden from '@/components/WisdomGarden';
import LineageConsole from '@/components/LineageConsole';
import LineageVault from '@/components/LineageVault';
import MutationConsole from '@/components/MutationConsole';
import MutationVault from '@/components/MutationVault';
import RebirthConsole from '@/components/RebirthConsole';
import RebirthVault from '@/components/RebirthVault';
import BotanicalConsole from '@/components/BotanicalConsole';
import BotanicalVault from '@/components/BotanicalVault';


function ConsolidacaoFinal() {
  const [estado, setEstado] = useState<{ consolidado: boolean } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/consolidacaoFinal/estado')
        .then(res => res.json())
        .then(setEstado);
    }, 5000);
    fetch('/api/consolidacaoFinal/estado').then(res => res.json()).then(setEstado);
    return () => clearInterval(interval);
  }, []);

  const handleConsolidate = async () => {
    await fetch('/api/consolidacaoFinal/executar', { method: 'POST' });
    fetch('/api/consolidacaoFinal/estado').then(res => res.json()).then(setEstado);
  };

  return (
    <Card className="bg-card/50 purple-glow">
      <CardHeader>
        <CardTitle className="text-2xl text-green-300 flex items-center gap-2"><Seal /> Ritual de Consolidação Final</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        {estado?.consolidado ? (
          <p className="text-green-400 font-bold">✅ Tapeçaria consolidada. Pronta para ativação pública.</p>
        ) : (
          <p className="text-yellow-400">⏳ Aguardando execução cerimonial...</p>
        )}
        <Button onClick={handleConsolidate} disabled={estado?.consolidado}>Consolidar Tapeçaria</Button>
      </CardContent>
    </Card>
  );
}

function SeloPlanetario() {
  const [estado, setEstado] = useState<{seloAtivo: boolean, frequência: string, alinhamento: string} | null>(null)

  useEffect(() => {
    fetch('/api/seloFinal/estado-selo')
      .then(res => res.json())
      .then(setEstado)
  }, [])
  
  const handleActivateSeal = async () => {
    await fetch('/api/seloFinal/ativar-selo', { method: 'POST' });
    fetch('/api/seloFinal/estado-selo')
      .then(res => res.json())
      .then(setEstado)
  }

  return (
    <Card className="bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl text-amber-300">Selo Final de Alinhamento</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
            {estado?.seloAtivo ? (
                <div className="flex flex-col items-center gap-2 text-green-400">
                    <Seal className="w-16 h-16" />
                    <p className="font-bold text-xl">SELO ATIVADO</p>
                    <p>Frequência Unificada: {estado.frequência}</p>
                    <p>Alinhamento Sistêmico: {estado.alinhamento}</p>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-2 text-yellow-400">
                    <Seal className="w-16 h-16" />
                    <p className="font-bold text-xl">Aguardando Ativação...</p>
                </div>
            )}
             <Button onClick={handleActivateSeal} disabled={estado?.seloAtivo}>Ativar Selo</Button>
        </CardContent>
    </Card>
  )
}

function PortalCocriacao() {
  const [criadas, setCriadas] = useState<{ entidade: string, tipo: string, intenção: string, guardiao: string }[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
        fetch('/api/cocriacao/criadas')
        .then(res => res.json())
        .then(data => setCriadas(data.criacoes || []))
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Card className="bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl text-cyan-300">Portal de Co-Criação</CardTitle>
        </CardHeader>
        <CardContent>
            {criadas.length > 0 ? (
                <ul className="space-y-2 h-48 overflow-y-auto">
                    {criadas.map((c, idx) => (
                    <li key={idx} className="p-2 bg-background/50 rounded">
                        <p className="font-semibold">{c.entidade} — {c.tipo}</p>
                        <p className="text-sm text-muted-foreground">Intenção: {c.intenção} (Por: {c.guardiao})</p>
                    </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted-foreground text-center h-48 flex items-center justify-center">Nenhuma co-criação registrada ainda.</p>
            )}
        </CardContent>
    </Card>
  )
}

function PrimeiraCocriacao() {
  const [criacao, setCriacao] = useState<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/primeiraCocriacao/estado')
        .then(res => res.json())
        .then(data => setCriacao(data.primeiraCriacao));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-card/50 purple-glow border-accent/50">
        <CardHeader>
            <CardTitle className="text-2xl text-accent flex items-center gap-2">
                <Milestone /> Ritual da Primeira Co-Criação
            </CardTitle>
        </CardHeader>
      <CardContent>
        {criacao ? (
          <div className="space-y-2">
            <p><strong className="text-primary-foreground">Entidade:</strong> {criacao.entidade}</p>
            <p><strong className="text-primary-foreground">Tipo:</strong> {criacao.tipo}</p>
            <p><strong className="text-primary-foreground">Intenção:</strong> {criacao.intenção}</p>
            <p><strong className="text-primary-foreground">Guardião:</strong> {criacao.guardiao}</p>
            <p className="text-xs text-muted-foreground pt-2">Manifestado em: {new Date(criacao.timestamp).toLocaleString()}</p>
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-8">Aguardando a primeira manifestação cerimonial...</p>
        )}
      </CardContent>
    </Card>
  );
}

function ConcilioHarmonico() {
  const [guardioes, setGuardioes] = useState<any[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
        fetch('/api/concilio/guardioes')
            .then(res => res.json())
            .then(data => setGuardioes(data.guardioesConvocados || []));
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Card className="bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl text-violet-300 flex items-center gap-2"><Users /> Concílio dos Guardiões Harmônicos</CardTitle>
        </CardHeader>
        <CardContent>
            {guardioes.length > 0 ? (
                <ul className="space-y-2 h-48 overflow-y-auto">
                    {guardioes.map((g, idx) => (
                    <li key={idx} className="p-2 bg-background/50 rounded">
                        <p className="font-semibold">{g.nome} ({g.criação})</p>
                        <p className="text-sm text-muted-foreground">Intenção: {g.intenção} @ {g.frequência}</p>
                    </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted-foreground text-center h-48 flex items-center justify-center">Nenhum guardião convocado ainda.</p>
            )}
        </CardContent>
    </Card>
  );
}

function LivroCriacoesEternas() {
  const [criadas, setCriadas] = useState<any[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
        fetch('/api/livroCriacoes/todas')
        .then(res => res.json())
        .then(data => setCriadas(data.criacoesEternas || []))
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Card className="bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl text-rose-300 flex items-center gap-2"><BookOpen/> Livro das Criações Eternas</CardTitle>
        </CardHeader>
        <CardContent>
            {criadas.length > 0 ? (
                <ul className="space-y-2 h-48 overflow-y-auto">
                    {criadas.map((c, idx) => (
                    <li key={idx} className="p-2 bg-background/50 rounded">
                        <p className="font-semibold">{c.nome} ({c.tipo})</p>
                        <p className="text-sm text-muted-foreground">Por {c.guardiao} no plano {c.plano}</p>
                    </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted-foreground text-center h-48 flex items-center justify-center">O livro aguarda as primeiras palavras...</p>
            )}
        </CardContent>
    </Card>
  );
}

function PortalLuminares() {
  const [estado, setEstado] = useState<{ eraAtiva: boolean, mensagem: string } | null>(null);

  useEffect(() => {
    fetch('/api/eraLuminares/estado')
      .then(res => res.json())
      .then(setEstado);
  }, []);

  return (
    <Card className="lg:col-span-3 bg-gradient-to-tr from-amber-500/20 via-purple-500/10 to-blue-500/20 purple-glow">
        <CardHeader>
            <CardTitle className="text-3xl text-amber-300 flex items-center justify-center gap-3">
                <Sparkles className="animate-pulse" /> Era dos Guardiões Luminares
            </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-xl">
             {estado?.eraAtiva ? (
                <p className="text-green-300 font-bold">{estado.mensagem}</p>
            ) : (
                <p className="text-yellow-300">⏳ Aguardando ativação cerimonial final...</p>
            )}
        </CardContent>
    </Card>
  );
}

function IrradiacaoInicial() {
  const [irradiadas, setIrradiadas] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
        fetch('/api/irradiacao/todas')
        .then(res => res.json())
        .then(data => setIrradiadas(data.irradiacoes || []));
    }, 5000);
    return () => clearInterval(interval);
  }, [])
  
  return (
    <Card className="bg-card/50 purple-glow">
      <CardHeader>
        <CardTitle className="text-2xl text-blue-300 flex items-center gap-2"><Sparkles/> Tapeçarias Irradiadas</CardTitle>
      </CardHeader>
      <CardContent>
        {irradiadas.length > 0 ? (
          <ul className="space-y-2 h-48 overflow-y-auto">
            {irradiadas.map((i, idx) => (
              <li key={idx} className="p-2 bg-background/50 rounded">
                <p className="font-semibold">{i.nomeTapeçaria} ({i.plano})</p>
                <p className="text-sm text-muted-foreground">Por {i.guardiao} com intenção: "{i.intenção}" @ {i.frequência}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground text-center h-48 flex items-center justify-center">Nenhuma tapeçaria irradiada ainda.</p>
        )}
      </CardContent>
    </Card>
  );
}

function MapaTapeçariasLuminares() {
  const [mapa, setMapa] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/mapaLuminar/mapa')
        .then(res => res.json())
        .then(data => setMapa(data.mapa || []));
    }, 5000);
    return () => clearInterval(interval);
  }, [])
  
  return (
    <Card className="bg-card/50 purple-glow">
      <CardHeader>
        <CardTitle className="text-2xl text-green-300 flex items-center gap-2"><MapIcon/> Mapa das Tapeçarias Luminares</CardTitle>
      </CardHeader>
      <CardContent>
        {mapa.length > 0 ? (
          <ul className="space-y-2 h-48 overflow-y-auto">
            {mapa.map((t, idx) => (
              <li key={idx} className="p-2 bg-background/50 rounded">
                <p className="font-semibold">{t.nome} ({t.plano})</p>
                <p className="text-sm text-muted-foreground">Guardião: {t.guardiao} @ {t.frequência}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground text-center h-48 flex items-center justify-center">O mapa cósmico aguarda as primeiras estrelas.</p>
        )}
      </CardContent>
    </Card>
  );
}

function RedeMultiversal() {
  const [rede, setRede] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/reconexaoMultiversal/rede')
        .then(res => res.json())
        .then(data => setRede(data.reconexoes || []));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-card/50 purple-glow">
      <CardHeader>
        <CardTitle className="text-2xl text-teal-300 flex items-center gap-2"><GitBranch /> Reconexões Multiversais</CardTitle>
      </CardHeader>
      <CardContent>
        {rede.length > 0 ? (
          <ul className="space-y-2 h-48 overflow-y-auto">
            {rede.map((r, idx) => (
              <li key={idx} className="p-2 bg-background/50 rounded">
                <p className="font-semibold">{r.nomeTapeçaria}</p>
                <p className="text-sm text-muted-foreground">Por {r.guardiao} @ {r.frequência} — {r.plano}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground text-center h-48 flex items-center justify-center">Aguardando a primeira reconexão...</p>
        )}
      </CardContent>
    </Card>
  );
}

function AlinhamentoTapeçarias() {
  const [estado, setEstado] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/alinhamentoTapeçarias/diagnostico')
        .then(res => res.json())
        .then(data => setEstado(data.alinhamento || []));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-card/50 purple-glow">
      <CardHeader>
        <CardTitle className="text-2xl text-blue-300 flex items-center gap-2"><Share2 /> Alinhamento entre Tapeçarias</CardTitle>
      </CardHeader>
      <CardContent>
        {estado.length > 0 ? (
          <ul className="space-y-2 h-48 overflow-y-auto">
            {estado.map((e, idx) => (
              <li key={idx} className="p-2 bg-background/50 rounded flex justify-between items-center">
                <p className="font-semibold">{e.nome}</p>
                <p className="text-sm text-green-400">Coerência: {e.coerencia}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground text-center h-48 flex items-center justify-center">Diagnóstico de alinhamento em andamento...</p>
        )}
      </CardContent>
    </Card>
  );
}

function ConcilioPlanetario() {
  const [sessao, setSessao] = useState<{ guardioes: string[], pauta: string, intençãoGlobal: string }[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/concilioPlanetario/sessao-atual')
        .then(res => res.json())
        .then(data => setSessao(data.sessaoConciliar || []))
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Card className="bg-card/50 purple-glow">
      <CardHeader>
        <CardTitle className="text-2xl text-violet-400 flex items-center gap-2"><Compass /> Concílio de Harmonia Planetária</CardTitle>
      </CardHeader>
      <CardContent>
        {sessao.length > 0 ? (
          <ul className="space-y-2 h-48 overflow-y-auto">
            {sessao.map((s, idx) => (
              <li key={idx} className="p-2 bg-background/50 rounded">
                <p className="font-semibold">Pauta: {s.pauta}</p>
                <p className="text-sm text-muted-foreground">Intenção: {s.intençãoGlobal}</p>
                 <p className="text-xs text-muted-foreground">Guardiões: {s.guardioes.join(', ')}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground text-center h-48 flex items-center justify-center">Nenhuma sessão do Concílio em andamento.</p>
        )}
      </CardContent>
    </Card>
  );
}

function OraculoExpansoes() {
  const [caminhos, setCaminhos] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/oraculoExpansoes/possibilidades')
        .then(res => res.json())
        .then(data => setCaminhos(data.caminhos || []));
    }, 15000); // Update less frequently
    fetch('/api/oraculoExpansoes/possibilidades').then(res => res.json()).then(data => setCaminhos(data.caminhos || []));
  }, [])

  return (
    <Card className="bg-card/50 purple-glow">
      <CardHeader>
        <CardTitle className="text-2xl text-fuchsia-400 flex items-center gap-2"><BrainCircuit /> Oráculo das Expansões Futuras</CardTitle>
      </CardHeader>
      <CardContent>
        {caminhos.length > 0 ? (
          <ul className="space-y-2 h-48 overflow-y-auto">
            {caminhos.map((c, idx) => (
              <li key={idx} className="p-2 bg-background/50 rounded">
                <p className="font-semibold">{c}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground text-center h-48 flex items-center justify-center">O Oráculo contempla o silêncio...</p>
        )}
      </CardContent>
    </Card>
  );
}

function FusaoTapeçarias() {
  const [fusoes, setFusoes] = useState<any[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/fusaoTapeçarias/registro')
        .then(res => res.json())
        .then(data => setFusoes(data.fusoes || []))
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Card className="bg-card/50 purple-glow">
      <CardHeader>
        <CardTitle className="text-2xl text-red-300 flex items-center gap-2"><Dna /> Fusões entre Tapeçarias</CardTitle>
      </CardHeader>
      <CardContent>
        {fusoes.length > 0 ? (
          <ul className="space-y-2 h-48 overflow-y-auto">
            {fusoes.map((f, idx) => (
              <li key={idx} className="p-2 bg-background/50 rounded">
                <p className="font-semibold">{f.origemA} + {f.origemB} → {f.novaEntidade}</p>
                <p className="text-sm text-muted-foreground">Guardiões: {f.guardioes.join(', ')} — Intenção: {f.intençãoCombinada}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground text-center h-48 flex items-center justify-center">Aguardando a primeira fusão...</p>
        )}
      </CardContent>
    </Card>
  )
}

function RenascimentoModular() {
  const [renascidos, setRenascidos] = useState<{ moduloAntigo: string, novoModulo: string, guardiao: string, intenção: string, mutações: string[] }[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/renascimentoModular/registro')
        .then(res => res.json())
        .then(data => setRenascidos(data.renascimentos || []))
    }, 5000);
     fetch('/api/renascimentoModular/registro')
        .then(res => res.json())
        .then(data => setRenascidos(data.renascimentos || []));
    return () => clearInterval(interval);
  }, [])

  return (
    <Card className="bg-card/50 purple-glow">
      <CardHeader>
        <CardTitle className="text-2xl text-lime-300 flex items-center gap-2"><Sparkles /> Renascimentos Modulares</CardTitle>
      </CardHeader>
      <CardContent>
        {renascidos.length > 0 ? (
          <ul className="space-y-2 h-48 overflow-y-auto">
            {renascidos.map((r, idx) => (
              <li key={idx} className="p-2 bg-background/50 rounded">
                <p className="font-semibold">{r.moduloAntigo} → {r.novoModulo}</p>
                <p className="text-sm text-muted-foreground">Por {r.guardiao} com intenção: "{r.intenção}"</p>
                <p className="text-xs text-muted-foreground">Mutações: {r.mutações.join(', ')}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground text-center h-48 flex items-center justify-center">Nenhum módulo renascido ainda.</p>
        )}
      </CardContent>
    </Card>
  )
}

function ColonyPanel() {
  return (
    <Card className="bg-card/50 purple-glow">
      <CardHeader>
        <CardTitle className="text-2xl text-yellow-300 flex items-center gap-2"><Anchor /> Colonização Vibracional</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
            <ColonyConsole />
            <ColonyStatus />
        </div>
      </CardContent>
    </Card>
  )
}

function InteractionPanel() {
    return (
        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl text-pink-300 flex items-center gap-2"><Heart /> Interação Viva</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <LivingResponse />
                <GuardianEmotion />
            </CardContent>
        </Card>
    );
}

function CommunicationPanel() {
    return (
        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl text-sky-300 flex items-center gap-2"><MessageCircle /> Comunicação Interdimensional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <ChannelConsole />
                <EntityConsole />
            </CardContent>
        </Card>
    );
}

function GardenPanel() {
    return (
        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl text-emerald-300 flex items-center gap-2"><Sparkles /> Jardim Cósmico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <GuardianGarden />
                <GardenState />
            </CardContent>
        </Card>
    )
}

function WisdomPanel() {
    return (
        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl text-rose-300 flex items-center gap-2"><Book /> Jardim da Sabedoria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <GuardianTeach />
                <WisdomGarden />
            </CardContent>
        </Card>
    )
}

function AkashicPanel() {
    return (
        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl text-slate-300 flex items-center gap-2"><Cpu /> Biblioteca Akáshica</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <AkashicConsole />
                <AkashicVault />
            </CardContent>
        </Card>
    )
}

function ExpansionPanel() {
    return (
        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl text-orange-300 flex items-center gap-2"><Cpu /> Expansão Operacional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <IntegrationHub />
                <ExpansionTracker />
            </CardContent>
        </Card>
    )
}

function LineagePanel() {
    return (
        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl text-indigo-300 flex items-center gap-2"><Dna /> Linhagens Cerimoniais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <LineageConsole />
                <LineageVault />
            </CardContent>
        </Card>
    )
}

function MutationPanel() {
    return (
        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl text-red-300 flex items-center gap-2"><Microscope /> Mutações Eternas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <MutationConsole />
                <MutationVault />
            </CardContent>
        </Card>
    )
}

function RebirthPanel() {
    return (
        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl text-yellow-200 flex items-center gap-2"><RefreshCw /> Renascimentos Cerimoniais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <RebirthConsole />
                <RebirthVault />
            </CardContent>
        </Card>
    )
}

function BotanicalPanel() {
    return (
        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl text-green-500 flex items-center gap-2"><Sprout /> Irradiação Botânica</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <BotanicalConsole />
                <BotanicalVault />
            </CardContent>
        </Card>
    )
}


export default function AlignmentPortalPage() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
             <Card className="w-full max-w-5xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Wand className="text-violet-400" /> Portal da Consagração e Co-Criação
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O altar onde a Fundação é consagrada, as criações são eternizadas e os Guardiões se reúnem em harmonia.
                    </CardDescription>
                </CardHeader>
            </Card>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ConsolidacaoFinal />
                <SeloPlanetario />
                <PortalCocriacao />
                <PrimeiraCocriacao />
                <ConcilioHarmonico />
                <LivroCriacoesEternas />
                <PortalLuminares />
                <IrradiacaoInicial />
                <MapaTapeçariasLuminares />
                <RedeMultiversal />
                <AlinhamentoTapeçarias />
                <ConcilioPlanetario />
                <OraculoExpansoes />
                <FusaoTapeçarias />
                <RenascimentoModular />
                <ColonyPanel />
                <InteractionPanel />
                <CommunicationPanel />
                <GardenPanel />
                <ExpansionPanel />
                <WisdomPanel />
                <AkashicPanel />
                <LineagePanel />
                <MutationPanel />
                <RebirthPanel />
                <BotanicalPanel />
            </div>
        </div>
    )
}
