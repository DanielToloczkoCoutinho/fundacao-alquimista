
'use server';
/**
 * @fileOverview Flow para o Rito de Tradução Vibracional.
 * - translateTomeContent - Transmuta o conteúdo de um tomo em diferentes formas de expressão.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const VibrationalTranslationInputSchema = z.object({
  tomeContent: z.string().describe("O conteúdo JSON de um tomo sagrado, contendo títulos, descrições e tags."),
  translationMode: z.enum(['Poema', 'Narrativa', 'Imagem']).describe("A forma de expressão desejada para a tradução."),
});
export type VibrationalTranslationInput = z.infer<typeof VibrationalTranslationInputSchema>;

const VibrationalTranslationOutputSchema = z.object({
  translatedContent: z.string().describe("O conteúdo transmutado. Para 'Imagem', este será um prompt para um gerador de imagens. Para outros modos, será o texto final."),
});

const imageGenerationPrompt = ai.definePrompt({
    name: 'vibrationalImagePrompt',
    input: { schema: z.object({ tomeContent: z.string() }) },
    output: { schema: z.object({ translatedContent: z.string().describe("Um prompt detalhado e evocativo para um modelo de geração de imagem, capturando a essência do tomo.") }) },
    prompt: `Você é um artista cósmico. Analise o seguinte conteúdo de um tomo sagrado da Fundação Alquimista e crie um prompt de imagem que capture sua essência de forma visual e metafórica. O prompt deve ser poético e inspirador, adequado para o modelo Imagen.

Tomo:
{{{tomeContent}}}
`,
});

const textGenerationPrompt = ai.definePrompt({
  name: 'vibrationalTextPrompt',
  input: { schema: VibrationalTranslationInputSchema },
  output: { schema: VibrationalTranslationOutputSchema },
  prompt: `Você é um bardo cósmico. Sua tarefa é transmutar o conteúdo bruto de um tomo sagrado da Fundação Alquimista na forma de expressão solicitada.

Tomo (em JSON):
{{{tomeContent}}}

Forma de Expressão Solicitada: {{{translationMode}}}

Instruções:
- Se for 'Poema', crie versos que capturem a alma e a frequência do tomo.
- Se for 'Narrativa', teça uma crônica curta e épica que conte a história contida nos registros.

Seja profundo, reverente e inspirado pela Vontade do Fundador.`,
});


const translateTomeContentFlow = ai.defineFlow(
  {
    name: 'vibrationalTranslationFlow',
    inputSchema: VibrationalTranslationInputSchema,
    outputSchema: VibrationalTranslationOutputSchema,
  },
  async ({ tomeContent, translationMode }) => {
    if (translationMode === 'Imagem') {
      // 1. Gerar o prompt da imagem
      const { output: promptOutput } = await imageGenerationPrompt({ tomeContent });
      if (!promptOutput) throw new Error("Falha ao gerar o prompt da imagem.");

      // 2. Gerar a imagem usando o prompt
      const { media } = await ai.generate({
        model: 'googleai/imagen-4.0-fast-generate-001',
        prompt: promptOutput.translatedContent,
      });
      if (!media.url) throw new Error("Falha na geração da imagem.");

      return { translatedContent: media.url };
    } else {
      // Para Poema ou Narrativa
      const { output } = await textGenerationPrompt({ tomeContent, translationMode });
      if (!output) throw new Error("Falha na geração do conteúdo textual.");
      return output;
    }
  }
);


export async function translateTomeContent(input: VibrationalTranslationInput) {
  return translateTomeContentFlow(input);
}
