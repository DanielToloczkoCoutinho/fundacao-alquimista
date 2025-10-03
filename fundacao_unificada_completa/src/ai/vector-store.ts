
import { Pinecone } from '@pinecone-database/pinecone';

let pinecone: Pinecone | null = null;

async function getPineconeClient(): Promise<Pinecone> {
  if (pinecone) return pinecone;
  
  if (!process.env.PINECONE_API_KEY || !process.env.PINECONE_ENVIRONMENT) {
    throw new Error('As variáveis de ambiente PINECONE_API_KEY e PINECONE_ENVIRONMENT devem ser definidas.');
  }

  pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENVIRONMENT,
  });
  
  return pinecone;
}

export async function getPineconeIndex() {
    const pc = await getPineconeClient();
    return pc.Index('alquimista-codex');
}
