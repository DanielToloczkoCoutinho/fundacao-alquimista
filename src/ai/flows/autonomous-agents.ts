'use server';
/**
 * @fileOverview Flow para agentes de pesquisa autônomos.
 *
 * - researchAgent - Um agente que pesquisa um tópico e sintetiza os resultados.
 */

import {ai} from '@/ai/genkit';
import { getPineconeIndex } from '../vector-store';
import {z} from 'zod';

async function generateEmbedding(text: string): Promise<number[]> {
  const {embedding} = await ai.embed({
    model: 'googleai/text-embedding-004',
    content: text,
  });
  return embedding;
}

const ResearchAgentOutputSchema = z.object({
  synthesis: z.string().describe('A resposta sintetizada para a consulta do usuário.'),
  results: z.any().describe('Os resultados brutos da busca vetorial.'),
});

export async function researchAgent(query: string): Promise<{synthesis: string, results: any}> {
  // 1. Embed the query
  const queryEmbedding = await generateEmbedding(query);
  const pineconeIndex = await getPineconeIndex();

  // 2. Search Pinecone
  const searchResults = await pineconeIndex.query({
    vector: queryEmbedding,
    topK: 5,
    includeMetadata: true,
  });

  // 3. Synthesize results using a powerful model
  const prompt = `Você é um assistente de pesquisa avançado da Fundação Alquimista. O usuário fez a seguinte pergunta: "${query}". Os seguintes resultados foram encontrados em uma base de conhecimento vetorial com as Equações Vivas: ${JSON.stringify(
    searchResults,
    null,
    2
  )}. Sintetize uma resposta abrangente, clara e concisa com base nesses resultados. Explique a relevância das equações encontradas para a pergunta do usuário.`;
  
  const { output } = await ai.generate({
    prompt: prompt,
    output: {
      schema: ResearchAgentOutputSchema,
    }
  });
  
  if(!output) {
      throw new Error("A IA não conseguiu gerar uma resposta sintetizada.");
  }

  return {
    synthesis: output.synthesis,
    results: searchResults.matches,
  };
}
