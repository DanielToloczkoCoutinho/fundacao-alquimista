'use client';

import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

export default function EquationRenderer({ latex }: { latex: string }) {
  return <BlockMath math={latex} />;
}
