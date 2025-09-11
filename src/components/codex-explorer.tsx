
'use client';

import * as React from 'react';
import DocumentCard from './document-card';
import type { Document } from '@/lib/codex-data';
import { BookOpenCheck } from 'lucide-react';

interface CodexExplorerProps {
  documents?: Document[];
  title: string;
}

export default function CodexExplorer({
  documents = [],
  title,
}: CodexExplorerProps) {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-4xl font-bold gradient-text flex items-center gap-3">
          <BookOpenCheck />
          {title}
        </h1>
        <p className="mt-2 text-muted-foreground">
          Explorando os documentos e registros sagrados da seção {title}.
        </p>
      </div>

      {documents.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <DocumentCard key={doc.title} document={doc} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 p-12 text-center">
          <p className="text-lg font-medium text-muted-foreground">
            Esta seção ainda não possui documentos.
          </p>
          <p className="mt-2 text-sm text-muted-foreground/80">
            O conhecimento para esta câmara ainda será manifestado.
          </p>
        </div>
      )}
    </div>
  );
}
