
'use client'

import React, { useState, useMemo, useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GitBranch, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { modulesMetadata, linkColors } from '@/lib/modules-metadata';
import dagre from '@dagrejs/dagre';
import CustomNode from '@/components/ui/custom-node';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 220;
const nodeHeight = 100;

const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
  dagreGraph.setGraph({ rankdir: direction, nodesep: 25, ranksep: 60 });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = 'top' as any;
    node.sourcePosition = 'bottom' as any;
    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const nodeTypes = {
  custom: CustomNode,
};

export default function TreeOfLifePage() {
  const { initialNodes, initialEdges } = useMemo(() => {
    const nodes: Node[] = modulesMetadata
    .filter(m => !m.isInfrastructure) // Filtra os módulos que não devem aparecer
    .map((mod) => ({
        id: mod.code,
        type: 'custom',
        data: { 
            label: mod.title,
            status: mod.status,
        },
        position: { x: 0, y: 0 }, 
    }));

    const edges: Edge[] = modulesMetadata.flatMap(mod => 
        (mod.connections || []).map(conn => ({
            id: `${conn.source}-${conn.target}`,
            source: conn.source,
            target: conn.target,
            animated: true,
            type: 'smoothstep',
            label: conn.label,
            style: { 
                stroke: linkColors[conn.type] || '#888',
                strokeWidth: 2,
            },
            labelStyle: { fill: '#e6e6ff', fontWeight: 600, fontSize: '10px' },
        }))
    );

    return getLayoutedElements(nodes, edges);
  }, []);
    
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
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
      
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="w-full h-[75vh] bg-black/30 rounded-2xl border border-primary/30 purple-glow">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          nodeTypes={nodeTypes}
          connectionLineType={ConnectionLineType.SmoothStep}
          className="bg-transparent"
        >
          <Background color="hsl(var(--primary))" gap={24} size={1} />
          <MiniMap nodeStrokeWidth={3} zoomable pannable nodeColor={(n: Node) => {
              const status = n.data?.status;
              if (status === 'ativo') return 'rgb(34 197 94)';
              if (status === 'em construção') return 'rgb(234 179 8)';
              return 'rgb(107 114 128)';
            }} className="bg-background/50 border border-primary/20" />
          <Controls />
        </ReactFlow>
      </motion.div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }} className="text-center mt-12">
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
