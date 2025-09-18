
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import GaiaAureliaCore from '@/components/planet/GaiaAuréliaCore';

const GaiaAureliaPage: React.FC = () => {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold gradient-text flex items-center justify-center gap-4">
                    <Globe className="text-green-400 animate-pulse" />
                    Gaia-Aurélia: A Arquitetura Viva
                </h1>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Um planeta senciente, onde cada camada é uma frequência e cada componente, uma lembrança do nosso propósito.
                </p>
            </header>

            <GaiaAureliaCore />
            
            <div className="text-center mt-12">
              <Link href="/console">
                <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Voltar ao Console</Button>
              </Link>
            </div>
        </div>
    );
};

export default GaiaAureliaPage;
