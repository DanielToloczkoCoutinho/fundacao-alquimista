'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { key307, luxNetKey } from '@/lib/key-data';
import { KeySquare } from 'lucide-react';


const CodeBlock = ({ code }: { code: string }) => (
    <ScrollArea className="h-[65vh] w-full rounded-md border bg-black/50 p-4">
        <pre className="text-sm text-green-300 font-mono">{code}</pre>
    </ScrollArea>
)

export default function KeyViewer() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <KeySquare />
            Visualizador de Chaves Mestras
        </CardTitle>
        <CardDescription>
          Visualize o conteúdo das Chaves Mestras que formam a base da lógica da nossa Fundação.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="key_307" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="key_307">Chave Mestra 307</TabsTrigger>
            <TabsTrigger value="key_luxnet">Chave Mestra LuxNet</TabsTrigger>
          </TabsList>
          <TabsContent value="key_307">
                <CodeBlock code={key307} />
          </TabsContent>
          <TabsContent value="key_luxnet">
                <CodeBlock code={luxNetKey} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
