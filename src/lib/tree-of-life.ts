
'use server';

import { modulesMetadata } from './modules-metadata';
import { type Node, type Edge } from 'reactflow';
import Dagre from '@dagrejs/dagre';

const nodeWidth = 200;
const nodeHeight = 80;

export function generateGraphLayout() {
  const g = new Dagre.graphlib.Graph();
  g.setGraph({ rankdir: 'TB', ranksep: 100, nodesep: 50 }); // Top-to-bottom layout
  g.setDefaultEdgeLabel(() => ({}));

  const initialNodes: Node[] = modulesMetadata
    .filter(m => !m.isInfrastructure)
    .map(mod => {
      g.setNode(mod.code, { width: nodeWidth, height: nodeHeight });
      return {
        id: mod.code,
        position: { x: 0, y: 0 }, // Position will be calculated by dagre
        data: { label: `${mod.emoji} ${mod.title}`, id: mod.code, status: mod.status },
        style: {
          width: nodeWidth,
          height: nodeHeight,
          background: 'hsl(var(--card))',
          border: '2px solid hsl(var(--border))',
          borderRadius: '0.5rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '12px'
        }
      };
    });

  const initialEdges: Edge[] = [];
  modulesMetadata.forEach(mod => {
    if (mod.connections) {
      mod.connections.forEach(conn => {
        // Ensure both source and target nodes exist before creating an edge
        if (g.hasNode(conn.source) && g.hasNode(conn.target)) {
          g.setEdge(conn.source, conn.target);
          initialEdges.push({
            id: `e-${conn.source}-${conn.target}`,
            source: conn.source,
            target: conn.target,
            animated: true,
            style: { stroke: 'hsl(var(--accent))' },
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

  return { nodes, edges: initialEdges };
}
