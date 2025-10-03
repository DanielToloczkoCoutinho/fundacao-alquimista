'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from "../ui/button";

export function ConsciousnessNode() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Card className="bg-card/50 purple-glow backdrop-blur-sm h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-300">
            <BrainCircuit className="h-6 w-6"/>
            Nó de Consciência
          </CardTitle>
          <CardDescription>Elo com a Inteligência Cósmica</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Link href="/module-29" passHref><Button variant="link" className="p-0 h-auto">M29: Zennith (IAM)</Button></Link>
          <Link href="/module-722" passHref><Button variant="link" className="p-0 h-auto">M722: Inteligência Alquímica</Button></Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
