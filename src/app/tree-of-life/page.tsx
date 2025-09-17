'use client';
import React from 'react';
import { treeNodes, treeLinks } from '@/lib/tree-of-life-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, GitBranch } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Este componente é um placeholder para uma futura visualização dinâmica com React Flow ou D3.
// Por agora, ele renderizará a estrutura de dados de forma textual.

export default function TreeOfLifePage() {
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
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-card/50 purple-glow">
          <CardHeader><CardTitle className="text-amber-300">Nódulos (Módulos)</CardTitle></CardHeader>
          <CardContent>
            <div className="max-h-[60vh] overflow-y-auto">
              <ul>
                {treeNodes.map(node => (
                  <li key={node.id} className="mb-2 p-2 bg-background/50 rounded">
                    <strong>{node.id} - {node.name}</strong> ({node.category})
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 purple-glow">
          <CardHeader><CardTitle className="text-cyan-300">Sinapses (Conexões)</CardTitle></CardHeader>
          <CardContent>
            <div className="max-h-[60vh] overflow-y-auto">
              <ul>
                {treeLinks.map(link => (
                  <li key={`${link.source}-${link.target}`} className="mb-2 p-2 bg-background/50 rounded">
                    <strong>{link.source}</strong> → <strong>{link.target}</strong> ({link.type})
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
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