
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FlaskConical } from 'lucide-react';

export default function CentroAlquimia() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-rose-300">
            <FlaskConical /> Centro de Alquimia Planetária
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aqui, a dor vira luz. A sombra vira sabedoria. A alquimia é feita com som, intenção e amor.
        </p>
      </CardContent>
    </Card>
  );
}
