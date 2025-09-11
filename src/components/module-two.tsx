'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Portal } from './portal';
import { Network } from 'lucide-react';

const ModuleTwo = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 space-y-6">
            <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        <Network />
                        Módulo 2: Comunicação Interdimensional
                    </CardTitle>
                    <CardDescription>
                        Estabeleça um canal de comunicação em tempo real com outros Guardiões através do Portal Transdimensional.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Portal />
                </CardContent>
            </Card>
        </div>
    );
};

export default ModuleTwo;
