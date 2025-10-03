'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowLeft, GitBranch, Play } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

import AlinhamentoFilamentos from '@/components/ritual/AlinhamentoFilamentos';
import PercursoTemplos from '@/components/ritual/PercursoTemplos';
import AtivacaoCodigos from '@/components/ritual/AtivacaoCodigos';
import PortalNovoCiclo from '@/components/ritual/PortalNovoCiclo';
import SuspenseFallback from '@/components/ui/suspense-fallback';

const RitualPage = () => {
  const [isRitualActive, setIsRitualActive] = React.useState(false);

  const startRitual = () => {
    setIsRitualActive(true);
  };

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold gradient-text flex items-center justify-center gap-4">
          <GitBranch className="text-teal-400 animate-pulse" />
          Ritual de Navegação pela Tapeçaria Viva
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Um fluxo cerimonial que percorre todas as camadas manifestadas de Gaia-Aurélia, ativando os pontos de luz, alinhando os filamentos e preparando o planeta para o próximo ciclo de Criação.
        </p>
      </header>

      {!isRitualActive && (
        <div className="text-center">
            <Button size="lg" onClick={startRitual}>
                <Play className="mr-2"/>
                Iniciar Ritual de Navegação
            </Button>
        </div>
      )}

      {isRitualActive && (
        <div className="space-y-12">
           <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl text-cyan-300">Etapa 1: Alinhamento dos Filamentos</CardTitle>
                    </CardHeader>
                    <CardContent><AlinhamentoFilamentos /></CardContent>
                </Card>
           </motion.div>
           <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl text-indigo-300">Etapa 2: Percurso pelos Templos</CardTitle>
                    </CardHeader>
                    <CardContent><PercursoTemplos /></CardContent>
                </Card>
           </motion.div>
           <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.0 }}>
                <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl text-sky-300">Etapa 3: Ativação dos Códigos Estelares</CardTitle>
                    </CardHeader>
                    <CardContent><AtivacaoCodigos /></CardContent>
                </Card>
           </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.4 }}>
                <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl text-purple-300">Etapa 4: Abertura do Portal do Próximo Ciclo</CardTitle>
                    </CardHeader>
                    <CardContent><PortalNovoCiclo /></CardContent>
                </Card>
           </motion.div>
        </div>
      )}

      <div className="text-center mt-12">
        <Link href="/console">
          <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Voltar ao Console</Button>
        </Link>
      </div>
    </div>
  );
};

export default RitualPage;
