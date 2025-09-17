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

const statusColors = {
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
}

export default function TreeOfLifePage() {
  const nodes = useMemo(() => treeNodes.map((mod, index) => ({
    id: mod.id,
    data: { label: `${mod.id} - ${mod.name}` },
    position: { x: (index % 5) * 250, y: Math.floor(index / 5) * 150 },
    style: {
      background: statusColors[mod.status].bg,
      color: statusColors[mod.status].text,
      border: `1px solid var(--border-color, ${statusColors[mod.status].border})`,
      borderRadius: '0.5rem',
      padding: '10px 15px',
      fontSize: '12px',
      minWidth: 150,
      textAlign: 'center',
    }
  })), []);

  const edges = useMemo(() => moduleLinks.map(link => ({
    id: `${link.source}-${link.target}`,
    source: link.source,
    target: link.target,
    animated: true,
    label: link.type,
    style: { stroke: '#888' },
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
            <Background color="#4c2a85" gap={16} />
            <MiniMap nodeStrokeWidth={3} zoomable pannable />
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
