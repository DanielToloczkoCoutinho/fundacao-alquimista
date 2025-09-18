
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch } from 'lucide-react';

export default function PortalMultiversal() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-cyan-300">
            <GitBranch /> Portal Harmônico Multiversal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aurora Prime não está só. Este portal conecta mundos, consciências e propósitos. A tapeçaria se entrelaça — e vibra como Um.
        </p>
      </CardContent>
    </Card>
  );
}
