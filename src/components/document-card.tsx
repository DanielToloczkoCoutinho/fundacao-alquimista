
'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';
import { sha256, TRINA_HASH } from '@/lib/crypto';
import type { Document } from '@/lib/codex-data';
import { ExternalLink, KeyRound, Lock, MapPin, Unlock } from 'lucide-react';
import LinkPreviewer from './link-previewer';
import { Badge } from './ui/badge';

interface DocumentCardProps {
  document: Document;
}

export default function DocumentCard({ document }: DocumentCardProps) {
  const [isUnlocked, setIsUnlocked] = React.useState(false);
  const [keyInput, setKeyInput] = React.useState('');
  const [isChecking, setIsChecking] = React.useState(false);
  const { toast } = useToast();

  const isProtected = document.isProtected ?? false;
  const showContent = !isProtected || isUnlocked;

  const handleUnlock = async () => {
    setIsChecking(true);
    const inputHash = await sha256(keyInput);
    if (inputHash === TRINA_HASH) {
      setIsUnlocked(true);
      toast({
        title: 'Access Granted',
        description: 'Trina Key accepted. The document is revealed.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Access Denied',
        description: 'The provided key is incorrect.',
      });
    }
    setIsChecking(false);
    setKeyInput('');
  };
  
  const renderDetails = () => {
    if (!document.details) return null;

    const detailsArray = Object.entries(document.details);
    
    return (
      <div className="mt-4 space-y-2 text-xs">
        {detailsArray.map(([key, value]) => {
          if (key.toLowerCase() === 'localização' || key.toLowerCase() === 'coordenadas') {
             return (
                <div key={key} className="flex items-start">
                  <span className="w-24 shrink-0 font-semibold text-muted-foreground">{key}:</span>
                  <div className="flex flex-col">
                    <span>{value}</span>
                    <Link
                      href={`https://www.google.com/maps?q=${encodeURIComponent(value)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary/80 hover:text-primary hover:underline"
                    >
                      <MapPin className="mr-1 h-3 w-3" /> View on Map
                    </Link>
                  </div>
                </div>
             )
          }
          return (
            <div key={key} className="flex items-start">
              <span className="w-24 shrink-0 font-semibold text-muted-foreground">{key}:</span>
              <span>{value}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Card className="flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary/50">
      <CardHeader>
        <CardTitle className="flex items-start justify-between">
          <span className="font-headline text-lg">{document.title}</span>
          {isProtected && (
            <Badge variant={showContent ? "secondary" : "destructive"} className="ml-2 shrink-0">
              {showContent ? <Unlock className="mr-1 h-3 w-3" /> : <Lock className="mr-1 h-3 w-3" />}
              {showContent ? 'Unlocked' : 'Protected'}
            </Badge>
          )}
        </CardTitle>
        {document.description && (
          <CardDescription>{document.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        {showContent ? (
          renderDetails()
        ) : (
          <div className="space-y-3 rounded-lg border-2 border-dashed border-yellow-500/50 bg-yellow-500/10 p-4 text-center dark:bg-yellow-500/5">
            <KeyRound className="mx-auto h-8 w-8 text-yellow-600 dark:text-yellow-400" />
            <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">
              Trina Key Required
            </p>
            <div className="flex items-center space-x-2">
              <Input
                type="password"
                placeholder="Enter key..."
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                disabled={isChecking}
              />
              <Button size="sm" onClick={handleUnlock} disabled={isChecking}>
                Unlock
              </Button>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center bg-card-foreground/5 dark:bg-card-foreground/10 p-3 mt-auto">
        <LinkPreviewer url={document.link} />
        <Button variant="link" asChild>
          <Link href={document.link} target="_blank" rel="noopener noreferrer">
            Open Document <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

    