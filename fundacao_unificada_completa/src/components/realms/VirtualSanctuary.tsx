'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Presentation, View, GitCommit } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from "../ui/button";

export function VirtualSanctuary() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="bg-card/50 purple-glow backdrop-blur-sm h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-teal-300">
            <Presentation className="h-6 w-6"/>
            Santuário Virtual
          </CardTitle>
          <CardDescription>Portais para Experiências Imersivas</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
           <Link href="/module-93" passHref><Button variant="link" className="p-0 h-auto">M93: Simulações Imersivas</Button></Link>
           <Link href="/module-303-8" passHref><Button variant="link" className="p-0 h-auto">M303.8: Simulador Cósmico</Button></Link>
           <Link href="/module-85" passHref><Button variant="link" className="p-0 h-auto">M85: Domínio VR</Button></Link>
           <Link href="/module-87" passHref><Button variant="link" className="p-0 h-auto">M87: VR Supra-Cósmico</Button></Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
