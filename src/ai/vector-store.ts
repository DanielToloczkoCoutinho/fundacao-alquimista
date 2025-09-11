
import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone();

(async () => {
    await pc.init({
        apiKey: process.env.PINECONE_API_KEY!,
        environment: process.env.PINECONE_ENVIRONMENT!,
    });
})();


export const pineconeIndex = pc.Index('alquimista-codex');
