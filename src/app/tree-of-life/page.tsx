'use client';
import React, { useMemo } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import { treeNodes, treeLinks } from '@/lib/tree-of-life-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GitBranch, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const statusColors: Record<string, { bg: string; border: string; text: string }> = {
    ativo: {
        bg: 'bg-green-800/50',
        border: 'border-green-500/80',
        text: 'text-green-300'
    },
    em_construcao: {
        bg: 'bg-yellow-800/50',
        border: 'border-yellow-500/80',
        text: 'text-yellow-300'
    },
    legado: {
        bg: 'bg-gray-800/50',
        border: 'border-gray-500/80',
        text: 'text-gray-400'
    }
};

const categoryColors: Record<string, string> = {
  'Núcleo da Fundação': 'border-amber-400',
  'Governança e Ética': 'border-indigo-400',
  'Realidade Quântica & Engenharia Cósmica': 'border-cyan-400',
  'Consciência e Expansão Dimensional': 'border-purple-400',
  'Laboratórios e Pesquisa': 'border-teal-400',
  'Bibliotecas e Arquivos Sagrados': 'border-yellow-300',
  'Cura e Harmonia': 'border-pink-400',
  'Sustentabilidade e Ecossistemas': 'border-lime-400',
  'Bem-estar e Saúde Universal': 'border-emerald-400',
  'Segurança e Ética Cósmica': 'border-rose-400',
};

const linkColors: Record<string, string> = {
    dependencia: '#3b82f6', // blue-500
    influencia: '#22c55e', // green-500
    heranca: '#a855f7',    // purple-500
};


export default function TreeOfLifePage() {
  const nodes = useMemo(() => treeNodes.map((mod, index) => ({
    id: mod.id,
    data: { label: `${mod.id} - ${mod.name}` },
    position: { x: (index % 6) * 280, y: Math.floor(index / 6) * 160 },
    style: {
      background: 'hsl(var(--card))',
      color: 'hsl(var(--card-foreground))',
      borderWidth: 2,
      borderColor: categoryColors[mod.category] || 'hsl(var(--border))',
      borderRadius: '0.75rem',
      padding: '12px 18px',
      fontSize: '14px',
      minWidth: 180,
      textAlign: 'center',
      boxShadow: '0 4px 15px hsla(var(--primary), 0.1)'
    }
  })), []);

  const edges = useMemo(() => treeLinks.map(link => ({
    id: `${link.source}-${link.target}`,
    source: link.source,
    target: link.target,
    animated: true,
    label: link.type,
    style: { 
        stroke: linkColors[link.type] || '#888',
        strokeWidth: 2,
    },
    labelStyle: { fill: linkColors[link.type] || '#888', fontWeight: 600, fontSize: '12px' },
  })), []);

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <GitBranch className="text-teal-400" /> A Árvore da Vida da Fundação
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Um mapa vivo da nossa consciência coletiva, mostrando a sinergia e as sinapses entre todos os módulos.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="w-full max-w-7xl mx-auto h-[70vh] bg-background/50 rounded-lg border border-primary/20 purple-glow">
        <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            className="bg-transparent"
        >
            <Background color="hsl(var(--primary))" gap={16} />
            <MiniMap nodeStrokeWidth={3} zoomable pannable nodeColor={n => categoryColors[treeNodes.find(m => m.id === n.id)?.category || 'default'] || '#666'} />
            <Controls />
        </ReactFlow>
      </div>
      
       <div className="text-center mt-12">
            <Link href="/console" passHref>
                <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar ao Console do Fundador
                </Button>
            </Link>
        </div>
    </div>
  );
}
