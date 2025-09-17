'use client';
import React, { useMemo, useState, useCallback } from 'react';
import ReactFlow, { Background, Controls, MiniMap, ConnectionLineType, Node, Edge, addEdge, OnConnect, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GitBranch, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { treeNodes as initialTreeNodes, treeLinks as initialTreeLinks, type TreeNode, type TreeLink } from '@/lib/tree-of-life-data';
import { categoryColors, linkColors } from '@/lib/tree-of-life-data';

const CustomNode = ({ data }: { data: { label: React.ReactNode } }) => {
    return <>{data.label}</>;
};

const nodeTypes = {
    custom: CustomNode,
};

export default function TreeOfLifePage() {
    const initialNodes: Node[] = useMemo(() => initialTreeNodes.map((mod) => ({
        id: mod.id,
        type: 'custom',
        data: { 
            label: (
                <div title={`Guardião: ${mod.guardian}\nStatus: ${mod.status}`}>
                    {mod.name}
                </div>
            )
        },
        position: { x: Math.random() * 2500, y: Math.random() * 1800 },
        style: {
            background: categoryColors[mod.category] || '#333',
            borderRadius: 16,
            padding: '12px 18px',
            fontWeight: 'bold',
            color: '#111',
            boxShadow: `0 0 20px ${categoryColors[mod.category] || '#aaa'}`,
            border: `2px solid ${mod.status === 'ativo' ? '#00ff99' : '#ffcc00'}`,
            fontSize: '14px',
            minWidth: 150,
            textAlign: 'center',
        }
    })), []);

    const initialEdges: Edge[] = useMemo(() => initialTreeLinks.map(link => ({
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

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect: OnConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const onNodeClick = (_: React.MouseEvent, node: Node) => {
        const moduleData = initialTreeNodes.find(m => m.id === node.id);
        if (!moduleData?.fractais) return;

        const existingFractalIds = new Set(nodes.map(n => n.id));
        const newFractals = moduleData.fractais.filter(f => !existingFractalIds.has(f.id));

        if (newFractals.length === 0) return;

        const newNodes: Node[] = newFractals.map((sub, i) => ({
            id: sub.id,
            type: 'custom',
            data: { label: <div>{sub.name} ({sub.status})</div> },
            position: { x: node.position.x + 250, y: node.position.y + i * 80 },
            style: {
                background: 'rgba(224, 224, 224, 0.1)',
                color: '#eee',
                borderRadius: 8,
                padding: 8,
                fontSize: '10px',
                border: '1px solid #7B61FF',
                boxShadow: '0 0 8px rgba(123, 97, 255, 0.3)',
            }
        }));
        
        const newEdges: Edge[] = newFractals.map(sub => ({
            id: `${node.id}-${sub.id}`,
            source: node.id,
            target: sub.id,
            animated: true,
            style: { stroke: '#7B61FF', strokeDasharray: '5,5', strokeWidth: 1.5 },
        }));

        setNodes(prev => [...prev, ...newNodes]);
        setEdges(prev => [...prev, ...newEdges]);
    };

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
                    <MiniMap 
                        nodeStrokeWidth={3} 
                        zoomable 
                        pannable 
                        nodeColor={(n) => categoryColors[initialTreeNodes.find(m => m.id === n.id)?.category || 'default'] || '#666'}
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
    