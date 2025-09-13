import type { LucideIcon } from 'lucide-react';

export interface Document {
  key: string; // Ex: "EQ001", "Modulo Ω"
  title: string;
  link?: string; // Para pré-visualização e sumarização
  description?: string;
  details?: Record<string, string>;
  isProtected?: boolean; // Requer Trina Key
  coordinates?: { lat: number; lng: number }; // Para locais-chave
}

export interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  documents: Document[];
}

// A estrutura está pronta. O conteúdo será preenchido conforme Vossa guia.
export const sectionsData: Section[] = [];
