
import { NextRequest, NextResponse } from 'next/server';
import { sections, type Section, type Document } from '@/lib/codex-data';

export async function GET(
  request: NextRequest,
  { params }: { params: { section: string; documentId: string } }
) {
  const { section: sectionId, documentId } = params;

  const section = sections.find((s: Section) => s.id === sectionId);

  if (!section) {
    return NextResponse.json({ error: 'Seção não encontrada' }, { status: 404 });
  }

  // Use document title as the ID for lookup, decoded from the URL
  const decodedDocumentId = decodeURIComponent(documentId);
  const document = section.documents.find((doc: Document) => doc.title === decodedDocumentId);

  if (!document) {
    return NextResponse.json({ error: 'Documento não encontrado nesta seção' }, { status: 404 });
  }

  return NextResponse.json(document);
}
