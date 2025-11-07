'use server';

import { explainCodeLogic } from '@/ai/flows/code-logic-explanation';
import { generateInterconnectedSimulations } from '@/ai/flows/generate-interconnected-simulations';
import { systemDiagramFromCode } from '@/ai/flows/system-diagram-from-code';
import { z } from 'zod';

const codeSchema = z.string().min(10, { message: 'Code must be at least 10 characters.' });
const descriptionSchema = z.string().min(10, { message: 'Description must be at least 10 characters.' });

export type WeaverState = {
  explanation?: string | null;
  diagram?: string | null;
  error?: string | null;
};

export async function runCodeWeaver(
  prevState: WeaverState,
  formData: FormData
): Promise<WeaverState> {
  const code = formData.get('code');
  const validatedCode = codeSchema.safeParse(code);

  if (!validatedCode.success) {
    return { error: validatedCode.error.errors[0].message };
  }

  try {
    const [explanationResult, diagramResult] = await Promise.all([
      explainCodeLogic({ code: validatedCode.data }),
      systemDiagramFromCode({ code: validatedCode.data }),
    ]);

    return {
      explanation: explanationResult.explanation,
      diagram: diagramResult.diagram,
      error: null,
    };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to process the code. Please try again.' };
  }
}

export type ForgeState = {
  scientificSimulation?: string | null;
  biologicalSimulation?: string | null;
  quantumSimulation?: string | null;
  error?: string | null;
};

export async function runCosmicForge(
  prevState: ForgeState,
  formData: FormData
): Promise<ForgeState> {
  const description = formData.get('description');
  const validatedDescription = descriptionSchema.safeParse(description);

  if (!validatedDescription.success) {
    return { error: validatedDescription.error.errors[0].message };
  }

  try {
    const result = await generateInterconnectedSimulations({ description: validatedDescription.data });
    return { ...result, error: null };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to generate simulations. Please try again.' };
  }
}
