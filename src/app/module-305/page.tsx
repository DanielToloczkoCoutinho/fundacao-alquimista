'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as d3 from 'd3';
import { disciplines } from '@/lib/disciplines-data';
import { livingEquations } from '@/lib/equations-data';
import { Search, BrainCircuit, FlaskConical, Atom } from 'lucide-react';

interface GraphNode {
  id: string;
  name: string;
  type: 'discipline' | 'equation';
  group: number;
  frequency?: number;
  domain?: string;
  guardian?: string;
}

interface GraphLink {
  source: string;
  target: string;
  value: number;
}

export default function InterconnectivityAtlas() {
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'disciplines' | 'equations' | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const svgRef = useRef<SVGSVGElement>(null);

  const graphData = useMemo(() => {
    const nodes: GraphNode[] = [];
    const links: GraphLink[] = [];

    const domainColors: Record<string, number> = {
        'Ciência': 1, 'Arte': 2, 'Espiritualidade': 3, 'Tecnologia': 4, 'Linguagem': 5, 'Geometria': 6
    };

    disciplines.forEach((disc) => {
      nodes.push({
        id: `disc-${disc.id}`,
        name: disc.name,
        type: 'discipline',
        frequency: disc.frequency,
        domain: disc.domain,
        guardian: disc.guardian,
        group: domainColors[disc.domain] || 0,
      });
    });

    livingEquations.forEach((eq) => {
      nodes.push({
        id: `eq-${eq.id}`,
        name: eq.titulo,
        type: 'equation',
        frequency: 432, // Placeholder
        guardian: 'Zennith',
        group: 7,
      });

      eq.disciplinas.forEach(discId => {
        // The discipline ID in equations-data is just the code, e.g., "MAT", "QUA".
        // We need to find the full discipline entry.
        const discipline = disciplines.find(d => d.id.toUpperCase().includes(discId));
        if (discipline) {
          links.push({
            source: `eq-${eq.id}`,
            target: `disc-${discipline.id}`,
            value: 2,
          });
        }
      });
    });

    return { nodes, links };
  }, []);

  const filteredGraphData = useMemo(() => {
    let displayNodes = [...graphData.nodes];
    let displayLinks = [...graphData.links];

    if (viewMode === 'disciplines') {
        displayNodes = displayNodes.filter(n => n.type === 'discipline');
        displayLinks = [];
    } else if (viewMode === 'equations') {
        displayNodes = displayNodes.filter(n => n.type === 'equation');
        displayLinks = [];
    }
    
    if (searchTerm) {
        const lowerSearchTerm = searchTerm.toLowerCase();
        const relevantNodeIds = new Set(
            displayNodes
                .filter(n => n.name.toLowerCase().includes(lowerSearchTerm) || (n.guardian && n.guardian.toLowerCase().includes(lowerSearchTerm)))
                .map(n => n.id)
        );

        if (relevantNodeIds.size > 0) {
          const linkedNodeIds = new Set(relevantNodeIds);
          displayLinks.forEach(link => {
            if (relevantNodeIds.has(link.source) || relevantNodeIds.has(link.target)) {
              linkedNodeIds.add(link.source);
              linkedNodeIds.add(link.target);
            }
          });

          displayNodes = displayNodes.filter(n => linkedNodeIds.has(n.id));
          displayLinks = displayLinks.filter(l => linkedNodeIds.has(l.source) && linkedNodeIds.has(l.target));
        } else {
            displayNodes = [];
            displayLinks = [];
        }
    }

    return { nodes: displayNodes, links: displayLinks };
  }, [viewMode, searchTerm, graphData]);


  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    const simulation = d3.forceSimulation(filteredGraphData.nodes as d3.SimulationNodeDatum[])
      .force('link', d3.forceLink(filteredGraphData.links).id((d: any) => d.id).distance(120))
      .force('charge', d3.forceManyBody().strength(-250))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('x', d3.forceX(width / 2).strength(0.05))
      .force('y', d3.forceY(height / 2).strength(0.05));

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const link = svg.append('g')
      .selectAll('line')
      .data(filteredGraphData.links)
      .enter().append('line')
      .attr('stroke', 'hsl(var(--border))')
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 1);

    const node = svg.append('g')
      .selectAll('circle')
      .data(filteredGraphData.nodes)
      .enter().append('circle')
      .attr('r', (d: any) => d.type === 'discipline' ? 8 : 12)
      .attr('fill', (d: any) => color(d.group.toString()))
      .attr('stroke', 'hsl(var(--background))')
      .attr('stroke-width', 1.5)
      .call((d3.drag() as any)
        .on('start', (event: any, d: any) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x; d.fy = d.y;
        })
        .on('drag', (event: any, d: any) => {
          d.fx = event.x; d.fy = event.y;
        })
        .on('end', (event: any, d: any) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null; d.fy = null;
        }))
      .on('click', (event: any, d: any) => {
        setSelectedNode(d);
        setIsDialogOpen(true);
      });

    node.append('title').text((d: any) => d.name);

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);
    });
  }, [filteredGraphData]);
  
  useEffect(() => {
    const handleResize = () => {
      // Re-trigger render
      setViewMode(vm => vm);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="text-center mb-8 py-6">
        <h1 className="text-4xl font-bold gradient-text mb-3">Atlas de Interconectividade Científica</h1>
        <p className="text-lg max-w-4xl mx-auto text-muted-foreground">
          Visualização multidimensional das conexões entre disciplinas, equações e módulos da Fundação.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 max-w-screen-2xl mx-auto">
        <aside className="lg:w-1/4 xl:w-1/5">
          <div className="sticky top-6 space-y-5">
            <Card className="bg-card/50 purple-glow">
              <CardHeader>
                <CardTitle className="text-accent">Modos de Visualização</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={viewMode} onValueChange={(v: any) => setViewMode(v)} className="w-full">
                  <TabsList className="grid grid-cols-1 gap-2 bg-background/50">
                    <TabsTrigger value="all">Visão Completa</TabsTrigger>
                    <TabsTrigger value="disciplines">Apenas Disciplinas</TabsTrigger>
                    <TabsTrigger value="equations">Apenas Equações</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 purple-glow">
              <CardHeader>
                <CardTitle className="text-accent">Buscar no Atlas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Buscar por nome..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>

        <main className="lg:w-3/4 xl:w-4/5">
          <Card className="bg-card/50 purple-glow h-[75vh]">
            <CardContent className="p-0 h-full">
              <svg ref={svgRef} width="100%" height="100%" className="rounded-lg"></svg>
            </CardContent>
          </Card>
        </main>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl bg-card/95 purple-glow">
          {selectedNode && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl gradient-text flex items-center gap-3">
                  {selectedNode.type === 'discipline' ? <BrainCircuit /> : <FlaskConical />}
                  {selectedNode.name}
                </DialogTitle>
                <DialogDescription className="capitalize">
                  {selectedNode.type}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-2 gap-4 my-4 text-sm">
                 <p><span className="text-muted-foreground">Frequência:</span> {selectedNode.frequency || 'N/A'} Hz</p>
                 <p><span className="text-muted-foreground">Domínio:</span> {selectedNode.domain || 'N/A'}</p>
                 <p><span className="text-muted-foreground">Guardião:</span> {selectedNode.guardian || 'N/A'}</p>
                 <p><span className="text-muted-foreground">Conexões:</span> {graphData.nodes.filter(n => n.id === selectedNode.id).length > 0 ? filteredGraphData.links.filter(l => l.source === selectedNode.id || l.target === selectedNode.id).length : 0}</p>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">Fechar</Button>
                </DialogClose>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
