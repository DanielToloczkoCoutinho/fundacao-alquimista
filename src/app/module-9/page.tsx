
'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { modulesMetadata } from '@/lib/modules-metadata';

export default function ModulesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter modules to ensure they have a valid route and match search term.
  const filteredModules = modulesMetadata.filter(module => 
    typeof module.route === 'string' && 
    module.route &&
    (
      module.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2 text-center gradient-text">
        Módulos da Fundação Alquimista
      </h1>
      <p className="text-muted-foreground text-center mb-8">
        Todos os módulos em ordem sagrada numérica
      </p>

      <div className="mb-6 relative max-w-lg mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar módulos..."
          className="w-full p-3 pl-10 rounded-lg bg-card/50 border border-primary/30 text-foreground"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredModules.map((module) => (
          <Link key={module.code} href={module.route} passHref>
            <Card className="h-full bg-card/50 border-border hover:border-accent transition-colors purple-glow cursor-pointer">
              <CardHeader className="h-full flex flex-col p-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg text-primary-foreground">{module.title}</CardTitle>
                  <span className="text-2xl">{module.emoji}</span>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-accent bg-accent/20 px-2 py-1 rounded inline-block mb-2">
                    {module.code}
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {module.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {filteredModules.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold">Nenhum módulo encontrado</h3>
          <p>Tente ajustar os termos de busca.</p>
        </div>
      )}
    </main>
  );
}
