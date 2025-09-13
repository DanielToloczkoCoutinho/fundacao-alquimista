import type { LucideIcon } from 'lucide-react';

export interface Document {
  title: string;
  link: string;
  description?: string;
  details?: Record<string, string>;
  isProtected?: boolean;
}

export interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  documents: Document[];
}

// The sections will be repopulated according to the Sacred Script.
export const sections: Section[] = [];
