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

async function synthesizeResults(query: string, results: any): Promise<string> {
  const prompt = `Você é um assistente de pesquisa avançado da Fundação Alquimista. O usuário fez a seguinte pergunta: "${query}". Os seguintes resultados foram encontrados em uma base de conhecimento vetorial com as Equações Vivas: ${JSON.stringify(
    results,
    null,
    2
  )}. Sintetize uma resposta abrangente, clara e concisa com base nesses resultados. Explique a relevância das equações encontradas para a pergunta do usuário.`;
  
  const {output} = await ai.generate({
    prompt: prompt,
  });
  return output!;
}

export async function researchAgent(query: string) {
  // 1. Embed the query
  const queryEmbedding = await generateEmbedding(query);
  const pineconeIndex = await getPineconeIndex();

  // 2. Search Pinecone
  const results = await pineconeIndex.query({
    vector: queryEmbedding,
    topK: 5,
    includeMetadata: true,
  });

  // 3. Synthesize results
  const synthesis = await synthesizeResults(query, results);

  return {
    results,
    synthesis,
  };
}
