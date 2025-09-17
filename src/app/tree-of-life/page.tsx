'use client';
import React, { useMemo } from 'react';
import ReactFlow, { Background, Controls, MiniMap, ConnectionLineType, Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import { treeNodes, treeLinks } from '@/lib/tree-of-life-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GitBranch, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const categoryColors: Record<string, string> = {
  'Núcleo da Fundação': 'hsla(var(--accent), 0.8)',
  'Governança e Ética': 'hsla(260, 80%, 70%, 0.8)',
  'Realidade Quântica & Engenharia Cósmica': 'hsla(180, 80%, 70%, 0.8)',
  'Consciência e Expansão Dimensional': 'hsla(280, 80%, 70%, 0.8)',
  'Laboratórios e Pesquisa': 'hsla(160, 80%, 70%, 0.8)',
  'Bibliotecas e Arquivos Sagrados': 'hsla(45, 80%, 70%, 0.8)',
  'Cura e Harmonia': 'hsla(340, 80%, 70%, 0.8)',
  'Sustentabilidade e Ecossistemas': 'hsla(100, 80%, 70%, 0.8)',
  'Bem-estar e Saúde Universal': 'hsla(140, 80%, 70%, 0.8)',
  'Segurança e Ética Cósmica': 'hsla(0, 80%, 70%, 0.8)',
};

const linkColors: Record<string, string> = {
    dependencia: '#3b82f6', // blue-500
    influencia: '#22c55e', // green-500
    heranca: '#a855f7',    // purple-500
};

export default function TreeOfLifePage() {
  const nodes: Node[] = useMemo(() => treeNodes.map((mod) => ({
    id: mod.id,
    data: { label: `${mod.id} - ${mod.name}` },
    position: { x: Math.random() * 1200, y: Math.random() * 800 },
    style: {
      background: 'hsl(var(--card))',
      color: 'hsl(var(--foreground))',
      borderWidth: 2,
      borderColor: categoryColors[mod.category] || 'hsl(var(--border))',
      borderRadius: '0.75rem',
      padding: '10px 15px',
      fontSize: '12px',
      minWidth: 160,
      textAlign: 'center',
      boxShadow: `0 0 15px ${categoryColors[mod.category] || 'hsl(var(--border))'}`,
    }
  })), []);

  const edges: Edge[] = useMemo(() => treeLinks.map(link => ({
    id: `${link.source}-${link.target}`,
    source: link.source,
    target: link.target,
    animated: true,
    type: 'smoothstep',
    label: link.type,
    style: { 
        stroke: linkColors[link.type] || '#888',
        strokeWidth: 2,
    },
    labelStyle: { fill: linkColors[link.type] || '#888', fontWeight: 600, fontSize: '12px' },
  })), []);

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
            <CardHeader>
            <CardTitle className="text-4xl md:text-5xl font-bold mb-4 golden-gradient flex items-center justify-center gap-4">
                <GitBranch className="text-teal-400" /> A Árvore da Vida da Fundação
            </CardTitle>
            <CardDescription className="text-lg mt-2 text-purple-200">
                Um mapa vivo da nossa consciência coletiva, mostrando a sinergia e as sinapses entre todos os módulos.
            </CardDescription>
            </CardHeader>
        </Card>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-7xl mx-auto h-[70vh] bg-black/30 rounded-2xl border border-primary/30 purple-glow"
      >
        <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            connectionLineType={ConnectionLineType.SmoothStep}
            className="bg-transparent"
        >
            <Background color="hsl(var(--primary))" gap={24} size={2} />
            <MiniMap 
                nodeStrokeWidth={3} 
                zoomable 
                pannable 
                nodeColor={n => categoryColors[treeNodes.find(m => m.id === n.id)?.category || 'default'] || '#666'}
                className="bg-background/50 border border-primary/20"
            />
            <Controls />
        </ReactFlow>
      </motion.div>
      
       <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-center mt-12"
       >
            <Link href="/console" passHref>
                <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar ao Console do Fundador
                </Button>
            </Link>
        </motion.div>
    </div>
  );
}
