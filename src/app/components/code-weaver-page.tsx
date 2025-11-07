'use client';

import { useFormState } from 'react-dom';
import { runCodeWeaver, type WeaverState } from '@/app/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Code, GitFork, Loader2, Wand2 } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import Welcome from './welcome-page';

const initialState: WeaverState = {
  explanation: null,
  diagram: null,
  error: null,
};

type CodeWeaverPageProps = {
  logAction: (entry: { type: 'weaver'; data: any }) => void;
};

export default function CodeWeaverPage({ logAction }: CodeWeaverPageProps) {
  const [state, formAction] = useFormState(runCodeWeaver, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const hasResult = state?.explanation || state?.diagram;

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
    if (hasResult) {
      logAction({ type: 'weaver', data: state });
    }
  }, [state, toast, logAction, hasResult]);

  return (
    <div className="grid lg:grid-cols-12 gap-8 h-full">
      <div className="lg:col-span-4 xl:col-span-3">
        <form ref={formRef} action={formAction} className="space-y-4">
          <h2 className="text-lg font-semibold font-headline">Input Code</h2>
          <Textarea
            name="code"
            placeholder="Paste your Python, JSON, or other code snippets here to begin the weaving process..."
            className="h-64 lg:h-[calc(100vh-22rem)] min-h-[200px] bg-card font-code text-sm"
            required
          />
          <SubmitButton />
        </form>
        {state.error && <Alert variant="destructive" className="mt-4"><AlertDescription>{state.error}</AlertDescription></Alert>}
      </div>

      <div className="lg:col-span-8 xl:col-span-9">
        {hasResult ? (
          <div className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/5">
              <CardHeader className="flex flex-row items-center gap-4">
                <Code className="w-6 h-6 text-primary" />
                <CardTitle className="font-headline">Logic Explanation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{state.explanation}</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/5">
              <CardHeader className="flex flex-row items-center gap-4">
                <GitFork className="w-6 h-6 text-primary" />
                <CardTitle className="font-headline">System Diagram</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{state.diagram}</p>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Welcome />
        )}
      </div>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormState(runCodeWeaver, initialState);
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Weaving...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" /> Weave System
        </>
      )}
    </Button>
  );
}
