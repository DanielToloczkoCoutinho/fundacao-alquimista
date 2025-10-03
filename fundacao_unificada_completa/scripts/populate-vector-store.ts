import 'dotenv/config';
import { livingEquations } from '../src/lib/equations-data';
import { getPineconeIndex } from '../src/ai/vector-store';
import { ai } from '../src/ai/genkit';

async function generateEmbedding(text: string): Promise<number[]> {
  const { embedding } = await ai.embed({
    model: 'googleai/text-embedding-004',
    content: text,
  });
  return embedding;
}

async function populate() {
  if(!process.env.PINECONE_API_KEY || !process.env.PINECONE_ENVIRONMENT) {
    console.warn("Variáveis de ambiente do Pinecone não configuradas. Pulando a povoação do Vector Store.");
    return;
  }

  console.log('Iniciando a povoação do Vector Store...');
  const pineconeIndex = await getPineconeIndex();

  for (const eq of livingEquations) {
    const textToEmbed = `ID: ${eq.id}, Título: ${eq.titulo}, Descrição: ${eq.descricao}, Classificação: ${eq.classificacao}, Disciplinas: ${eq.disciplinas.join(', ')}`;
    
    console.log(`Gerando embedding para: ${eq.id} - ${eq.titulo}`);
    const embedding = await generateEmbedding(textToEmbed);

    const metadata = {
        id: eq.id,
        title: eq.titulo,
        description: eq.descricao,
        formula: eq.formula,
        classification: eq.classificacao,
        disciplines: eq.disciplinas.join(', '),
        modules: eq.modulos.join(', '),
    };

    await pineconeIndex.upsert([{
        id: eq.id,
        values: embedding,
        metadata: metadata,
    }]);

    console.log(`Embedding para ${eq.id} inserido com sucesso.`);
    // Adiciona um pequeno delay para evitar rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log('Povoação do Vector Store concluída com sucesso!');
}

populate().catch(console.error);
