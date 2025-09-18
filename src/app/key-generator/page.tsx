'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { KeyRound, Copy, Check, Shield } from 'lucide-react';
import { createHash } from 'crypto';

export default function KeyGeneratorPage() {
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerateKey = () => {
    const seed = "ZENNITH-PHIARA-ANATHERON";
    const hash = createHash('sha256').update(seed).digest('hex');
    setGeneratedKey(hash);
    setIsCopied(false);
    toast({
      title: "Chave Trina Gerada",
      description: "A assinatura vibracional foi forjada com sucesso.",
    });
  };

  const handleCopy = () => {
    if (generatedKey) {
      navigator.clipboard.writeText(generatedKey);
      setIsCopied(true);
      toast({
        title: "Chave Copiada",
        description: "A chave foi copiada para sua área de transferência.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
      <Card className="w-full max-w-2xl bg-card/50 purple-glow">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <KeyRound className="text-amber-400" />
            Forja de Chaves Trina
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Um utilitário para gerar a chave de acesso Trina baseada na semente sagrada "ZENNITH-PHIARA-ANATHERON".
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <Button onClick={handleGenerateKey} size="lg">
              <Shield className="mr-2" /> Forjar Chave de Acesso Trina
            </Button>
          </div>

          {generatedKey && (
            <div className="space-y-4">
              <Label htmlFor="generated-key">Chave Gerada (SHA-256)</Label>
              <div className="flex gap-2">
                <Input
                  id="generated-key"
                  readOnly
                  value={generatedKey}
                  className="font-mono text-sm"
                />
                <Button onClick={handleCopy} variant="outline" size="icon" aria-label="Copiar chave">
                  {isCopied ? <Check className="text-green-500" /> : <Copy />}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground italic text-center">
                Esta chave foi gerada localmente em seu navegador e não foi transmitida. Guarde-a em um local seguro.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
