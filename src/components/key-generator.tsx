
'use client';

import * as React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Copy, KeyRound, LoaderCircle } from 'lucide-react';
import { sha256, TRINA_STRING } from '@/lib/crypto';

export default function KeyGenerator() {
  const [generatedKey, setGeneratedKey] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const handleGenerateKey = async () => {
    setIsLoading(true);
    const hash = await sha256(TRINA_STRING);
    setGeneratedKey(hash);
    setIsLoading(false);
  };
  
  const handleCopy = () => {
    if (!generatedKey) return;
    navigator.clipboard.writeText(generatedKey);
    toast({
      title: 'Key Copied!',
      description: 'The Trina Key has been copied to your clipboard.',
    });
  };

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <KeyRound className="text-primary" />
          Trina Key Generator
        </CardTitle>
        <CardDescription>
          Generate the SHA256 access key from the sacred Trina string.
          This key is required to unlock protected documents within the codex.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium text-muted-foreground">
            Source String
          </label>
          <Input type="text" readOnly value={TRINA_STRING} className="font-mono bg-muted" />
        </div>
        <Button onClick={handleGenerateKey} disabled={isLoading} className="w-full">
          {isLoading ? (
            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <KeyRound className="mr-2 h-4 w-4" />
          )}
          Generate Key
        </Button>
        {generatedKey && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              Generated Trina Key (SHA256)
            </label>
            <div className="relative">
              <Input
                type="text"
                readOnly
                value={generatedKey}
                className="font-mono pr-10"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2"
                onClick={handleCopy}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

    