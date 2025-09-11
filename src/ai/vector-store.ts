
import { Pinecone } from '@pinecone-database/pinecone';

let pinecone: Pinecone | null = null;

async function getPineconeClient() {
  if (pinecone) return pinecone;

  pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
    environment: process.env.PINECONE_ENVIRONMENT!,
  });
  
  return pinecone;
}

export async function getPineconeIndex() {
    const pc = await getPineconeClient();
    return pc.Index('alquimista-codex');
}
