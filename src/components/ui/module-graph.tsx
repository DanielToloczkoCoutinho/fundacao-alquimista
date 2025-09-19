'use client';
import React, { useMemo } from 'react';
import ReactFlow, { Background, Controls, MiniMap, type Node, type Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import { generateGraphLayout } from '@/lib/tree-of-life';

export default function ModuleGraph() {
  const { nodes, edges, nodeTypes } = useMemo(() => generateGraphLayout(), []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      fitView
      className="bg-background"
    >
      <Controls />
      <MiniMap nodeStrokeWidth={3} zoomable pannable />
      <Background color="#4c2a85" gap={16} />
    </ReactFlow>
  );
}
