'use client';
import React, { useMemo } from 'react';
import ReactFlow, { Background, Controls, MiniMap, ConnectionLineType, Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import { treeNodes, treeLinks } from '@/lib/tree-of-life-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GitBranch, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const categoryColors: Record<string, string> = {
  'Núcleo da Fundação': '#00BFA6', // Verde Água
  'Governança e Ética': '#FFD700', // Ouro
  'Realidade Quântica & Engenharia Cósmica': '#FF6F61', // Coral
  'Consciência e Expansão Dimensional': '#7B61FF', // Violeta
  'Laboratórios e Pesquisa': '#4ECDC4', // Turquesa
  'Bibliotecas e Arquivos Sagrados': '#FFE66D', // Amarelo Claro
  'Cura e Harmonia': '#FFB6C1', // Rosa
  'Sustentabilidade e Ecossistemas': '#6BFF6B', // Verde Limão
  'Bem-estar e Saúde Universal': '#6BFFB5', // Verde Menta
  'Segurança e Ética Cósmica': '#FF6B6B', // Vermelho Claro
};

const linkColors: Record<string, string> = {
    dependencia: '#FFD700', // Ouro
    influencia: '#00BFA6',   // Verde Água
    heranca: '#FF6F61',      // Coral
};

export default function TreeOfLifePage() {
  const nodes: Node[] = useMemo(() => treeNodes.map((mod) => ({
    id: mod.id,
    data: { label: mod.name },
    position: { x: Math.random() * 1800, y: Math.random() * 1200 },
    style: {
      background: categoryColors[mod.category] || '#ccc',
      borderRadius: 16,
      padding: 12,
      fontWeight: 'bold',
      color: '#111',
      boxShadow: `0 0 20px ${categoryColors[mod.category] || '#aaa'}`,
      border: `2px solid ${mod.status === 'ativo' ? '#00ff99' : '#ffcc00'}`,
      fontSize: '12px',
      minWidth: 150,
      textAlign: 'center',
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
        strokeWidth: 2.5,
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
                nodeColor={(n) => categoryColors[treeNodes.find(m => m.id === n.id)?.category || 'default'] || '#666'}
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
