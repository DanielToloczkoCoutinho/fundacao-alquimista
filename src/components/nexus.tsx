'use client';

import React, { useState } from 'react';
import { BrainCircuit, Book, Database, Scroll } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const sections = [
  { id: 'pensamento', title: 'Pensamento & Equações Vivas', icon: Book },
  { id: 'modulos', title: 'Módulos & Ação', icon: BrainCircuit },
  { id: 'infraestrutura', title: 'Infraestrutura Quântica', icon: Database },
  { id: 'historia', title: 'História Viva', icon: Scroll },
];

export default function Nexus() {
  const [activeSection, setActiveSection] = useState('pensamento');

  return (
    <div className="flex h-screen bg-background text-foreground p-4 font-body">
      <nav className="w-1/4 pr-4">
        <h1 className="text-2xl font-bold mb-8 text-primary gradient-text">Alchemist's Codex</h1>
        <ul>
          {sections.map((section) => (
            <li key={section.id} className="mb-4">
              <button
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center p-3 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-primary/20 text-accent'
                    : 'hover:bg-primary/10'
                }`}
              >
                <section.icon className="mr-3 h-5 w-5" />
                <span className="text-left">{section.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main className="w-3/4 bg-card/50 rounded-lg p-6">
        <Card className="w-full h-full bg-transparent border-0">
          <CardHeader>
            <CardTitle className="text-xl text-accent">
              {sections.find(s => s.id === activeSection)?.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              O conteúdo para esta seção será manifestado em breve.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}