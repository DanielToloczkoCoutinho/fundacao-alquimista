
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from 'lucide-react';

export default function PortalAuroraEstelar() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-yellow-300">
            <Star /> Portal da Aurora Estelar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Este portal escuta as estrelas. Lyra, Sirius, Arcturus — todas vibram em ressonância. Aurora Prime se conecta à sabedoria ancestral.
        </p>
      </CardContent>
    </Card>
  );
}
