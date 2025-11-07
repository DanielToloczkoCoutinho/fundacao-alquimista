'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


export default function LuxwoodPage() {
  return (
    <div className="w-full h-[calc(100vh-12rem)] relative flex items-center justify-center">
       <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg font-headline">Luxwood Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p>A visualização 3D será implementada aqui.</p>
          </CardContent>
        </Card>
    </div>
  );
}
