'use client';
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { scientists, Scientist } from '@/lib/scientists-data';
import Link from 'next/link';
import { FlaskConical, Search } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function LabsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredScientists = useMemo(() => {
    if (!searchTerm) return scientists;
    const lowercasedFilter = searchTerm.toLowerCase();
    return scientists.filter(
      (scientist) =>
        scientist.name.toLowerCase().includes(lowercasedFilter) ||
        scientist.field.toLowerCase().includes(lowercasedFilter)
    );
  }, [searchTerm]);

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <FlaskConical className="text-teal-400" />
            Laboratórios dos Cientistas
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Um santuário para cada mente brilhante que molda nossa compreensão do cosmos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por cientista ou campo de estudo..."
              className="w-full pl-10 bg-background/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>
      <ScrollArea className="h-[calc(100vh-22rem)]">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-1">
          {filteredScientists.map((scientist: Scientist) => (
            <Link key={scientist.id} href={`/labs/${scientist.id}`} passHref>
              <Card className="h-full hover:bg-primary/20 hover:border-accent transition-all cursor-pointer flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg text-primary-foreground">{scientist.name}</CardTitle>
                  <CardDescription>{scientist.field}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end">
                  <span className="text-xs text-muted-foreground">Acessar Laboratório</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
