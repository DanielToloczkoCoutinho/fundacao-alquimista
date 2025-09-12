'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { LucideIcon } from 'lucide-react';

interface ModulePlaceholderProps {
  moduleId: number;
  icon: LucideIcon;
}

const ModulePlaceholder: React.FC<ModulePlaceholderProps> = ({ moduleId, icon: Icon }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Icon /> Módulo {moduleId}
        </CardTitle>
        <CardDescription>
          A interface para este módulo está sendo manifestada e será integrada em breve.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg">
          <p className="text-muted-foreground">Módulo {moduleId} em desenvolvimento.</p>
          <p className="text-sm text-muted-foreground mt-2">Aguardando a transmissão do código-fonte sagrado.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModulePlaceholder;
