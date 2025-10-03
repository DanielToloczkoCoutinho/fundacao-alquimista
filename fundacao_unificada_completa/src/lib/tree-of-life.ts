'use server';

import { modulesMetadata } from './modules-metadata';
import { type Node, type Edge } from 'reactflow';
import Dagre from '@dagrejs/dagre';
import CustomNode from '@/components/ui/custom-node';

const nodeWidth = 200;
const nodeHeight = 80;

const nodeTypes = {
  custom: CustomNode,
};

export function generateGraphLayout() {
  const g = new Dagre.graphlib.Graph();
  g.setGraph({ rankdir: 'TB', ranksep: 100, nodesep: 50 });
  g.setDefaultEdgeLabel(() => ({}));

  const initialNodes: Node[] = modulesMetadata
    .filter(m => !m.isInfrastructure)
    .map(mod => {
      g.setNode(mod.code, { width: nodeWidth, height: nodeHeight });
      return {
        id: mod.code,
        type: 'custom',
        position: { x: 0, y: 0 },
        data: { label: mod.title, id: mod.code, status: mod.status, emoji: mod.emoji },
      };
    });

  const initialEdges: Edge[] = [];
  modulesMetadata.forEach(mod => {
    if (mod.connections) {
      mod.connections.forEach(conn => {
        if (g.hasNode(conn.source) && g.hasNode(conn.target)) {
          g.setEdge(conn.source, conn.target);
          initialEdges.push({
            id: `e-${conn.source}-${conn.target}`,
            source: conn.source,
            target: conn.target,
            animated: true,
            style: { stroke: 'hsl(var(--accent))', strokeWidth: 2 },
          });
        }
      });
    }
  });

  Dagre.layout(g);

  const nodes: Node[] = initialNodes.map(node => {
    const nodeWithPosition = g.node(node.id);
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });

  return { nodes, edges: initialEdges, nodeTypes };
}
