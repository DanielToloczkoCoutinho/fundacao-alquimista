
'use client';
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
import { treeNodes as moduleNodes, treeLinks as moduleLinks, categoryColors, linkColors, TreeNode } from '@/lib/tree-of-life-data';
import dagre from '@dagrejs/dagre';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 180;
const nodeHeight = 60;

const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
  dagreGraph.setGraph({ rankdir: direction, nodesep: 20, ranksep: 80 });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = 'top';
    node.sourcePosition = 'bottom';
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
    return node;
  });

  return { nodes, edges };
};

const CustomNode = ({ data }: { data: any }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ scale: [1, 1.05, 1], opacity: 1 }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    whileHover={{ scale: 1.1 }}
    className="flex items-center justify-center h-full"
  >
    <div className="text-center font-bold text-sm text-black">{data.label}</div>
  </motion.div>
);

const nodeTypes = {
  custom: CustomNode,
};

export default function TreeOfLife() {
  const initialNodes: Node[] = useMemo(() => moduleNodes.map((mod: TreeNode) => ({
    id: mod.code,
    type: 'custom',
    data: { 
        label: (
            <div title={`Guardião: ${mod.guardian}\nStatus: ${'ativo'}`}>
                <div className="text-xs font-mono">{mod.code}</div>
                <div className="font-bold">{mod.title}</div>
            </div>
        )
    },
    position: { x: 0, y: 0 },
    style: {
      background: categoryColors[mod.category] || '#333',
      borderRadius: 16,
      padding: '12px 18px',
      color: '#111',
      boxShadow: `0 0 20px ${categoryColors[mod.category] || '#aaa'}`,
      border: `2px solid ${'ativo' === 'ativo' ? '#00ff99' : '#ffcc00'}`,
      width: nodeWidth,
      height: nodeHeight,
    }
  })), []);

  const initialEdges: Edge[] = useMemo(() => moduleLinks.map(link => ({
    id: `${link.source}-${link.target}`,
    source: link.source,
    target: link.target,
    animated: true,
    type: 'smoothstep',
    label: link.label,
    style: { 
      stroke: linkColors[link.type] || '#888',
      strokeWidth: 2.5,
    },
    labelStyle: { fill: '#e6e6ff', fontWeight: 600, fontSize: '12px' },
  })), []);
    
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialNodes, initialEdges);

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    const moduleData = moduleNodes.find(m => m.code === node.id);
    if (!moduleData?.fractais) return;

    const existingFractalIds = new Set(nodes.map(n => n.id));
    const newFractals = moduleData.fractais.filter(f => !existingFractalIds.has(f.id));

    if (newFractals.length === 0) return;

    const newNodes: Node[] = newFractals.map((sub, i) => ({
      id: sub.id,
      type: 'custom',
      data: { label: <div>{sub.name}<br/><span className="text-xs font-normal opacity-70">({sub.status})</span></div> },
      position: { x: node.position.x + 250, y: node.position.y + i * 80 },
      style: {
        background: 'rgba(200, 200, 255, 0.1)',
        color: '#eee',
        borderRadius: 8,
        padding: 10,
        fontSize: '12px',
        border: '1px solid #7B61FF',
        boxShadow: '0 0 8px rgba(123, 97, 255, 0.3)',
        width: 150,
        height: 50,
      }
    }));
        
    const newEdges: Edge[] = newFractals.map(sub => ({
      id: `${node.id}-${sub.id}`,
      source: node.id,
      target: sub.id,
      animated: true,
      type: 'smoothstep',
      style: { stroke: '#7B61FF', strokeDasharray: '5,5', strokeWidth: 1.5 },
    }));

    setNodes(prev => [...prev, ...newNodes]);
    setEdges(prev => [...prev, ...newEdges]);

    setTimeout(() => {
        const { nodes: newLayoutedNodes, edges: newLayoutedEdges } = getLayoutedElements([...nodes, ...newNodes], [...edges, ...newEdges]);
        setNodes(newLayoutedNodes);
        setEdges(newLayoutedEdges);
    }, 100);

  }, [nodes, edges, setNodes, setEdges]);

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
          onNodeClick={onNodeClick}
          fitView
          nodeTypes={nodeTypes}
          connectionLineType={ConnectionLineType.SmoothStep}
          className="bg-transparent"
        >
          <Background color="hsl(var(--primary))" gap={24} size={2} />
          <MiniMap nodeStrokeWidth={3} zoomable pannable nodeColor={(n) => categoryColors[moduleNodes.find(m => m.code === n.id)?.category || 'default'] || '#666'} className="bg-background/50 border border-primary/20" />
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
