'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GitCommit, Layers, Map } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from "../ui/button";

export function RealityMesh() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bg-card/50 purple-glow backdrop-blur-sm h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-cyan-300">
            <Layers className="h-6 w-6"/>
            Malha de Realidade
          </CardTitle>
          <CardDescription>Fluxos de Engenharia Cósmica</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Link href="/module-88" passHref><Button variant="link" className="p-0 h-auto">M88: Gerador de Realidades</Button></Link>
          <Link href="/module-104" passHref><Button variant="link" className="p-0 h-auto">M104: Engenharia do Espaço-Tempo</Button></Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
