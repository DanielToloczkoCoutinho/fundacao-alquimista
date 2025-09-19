'use server';

import { linkPreviewAndSummarization } from '@/ai/flows/link-preview-summarization';
import { getOrchestrationSequence as runNexusSequence } from '@/ai/flows/nexus-orchestrator';
import { describeMorphicField as runDescribeMorphicField } from '@/ai/flows/morphic-field-flow';
import { describeConnectionExperience as runDescribeConnectionExperience } from '@/ai/flows/source-connection-flow';
import { describeActivation as runDescribeActivation } from '@/ai/flows/activation-flow';
import { describeRestoration as runDescribeRestoration } from '@/ai/flows/restoration-flow';
import { describeHarmonization as runDescribeHarmonization } from '@/ai/flows/harmonization-flow';
import { describeQuantumHealing as runDescribeQuantumHealing } from '@/ai/flows/healing-flow';
import { describePortalActivation as runDescribePortalActivation } from '@/ai/flows/portal-activation-flow';
import { describeEtherFlower as runDescribeEtherFlower } from '@/ai/flows/ether-flower-flow';
import { describeOlP as runDescribeOlp } from '@/ai/flows/olp-flow';
import { describeSpaceTimeEngineering as runDescribeSpaceTimeEngineering } from '@/ai/flows/space-time-flow';
import { describeHologramProjection as runDescribeHologramProjection } from '@/ai/flows/prisma-flow';
import { describeResonance as runDescribeResonance } from '@/ai/flows/resonance-matrix-flow';
import { transmitUniversalMessage as runTransmitUniversalMessage, type TransmitMessageInput } from '@/ai/flows/universal-communication-flow';
import { resolveParadox as runResolveParadox } from '@/ai/flows/paradox-resolution-flow';
import { emitLoveFrequency as runEmitLoveFrequency } from '@/ai/flows/love-frequency-flow';
import { getOmegaPerspective as runGetOmegaPerspective } from '@/ai/flows/omega-perspective-flow';
import type { OmegaPerspectiveOutput } from '@/ai/flows/omega-perspective-flow';
import { disseminateKnowledge as runDisseminateKnowledge, type DisseminateKnowledgeOutput } from '@/ai/flows/cosmic-education-flow';
import { runCQAMAnalysis as runCQAM, type CQAMInput, type CQAMOutput } from '@/ai/flows/cqam-flow';
import { activateVibrationalPraise as runActivateVibrationalPraise, type ElysiumResult } from '@/ai/flows/elysium-flow';
import { mobilizeGuardians as runMobilizeGuardians, type MobilizeGuardiansOutput } from '@/ai/flows/guardians-mobilization-flow';
import { processZennithCommand as runProcessZennithCommand, type ZennithCommandOutput } from '@/ai/flows/zennith-portal-flow';
import { generateVibrationalPraise as runGenerateVibrationalPraise, type RecognitionInput, type RecognitionOutput } from '@/ai/flows/recognition-flow';
import { runLunarReview, type LunarReviewOutput } from '@/ai/flows/lunar-review-flow';
import { decodeCosmicMessage as runDecodeCosmicMessage, type CosmicMessageInput, type DecodedMessageOutput } from '@/ai/flows/cosmic-message-decoder-flow';
import { invokeDimensionalWisdom as runInvokeDimensionalWisdom, type DimensionalWisdomInput, type DimensionalWisdomOutput } from '@/ai/flows/dimensional-convergence-flow';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { codexDatabase } from '@/lib/codex-data';

export async function getLinkSummary(url: string) {
  try {
    const result = await linkPreviewAndSummarization({ url });
    return { summary: result.summary, error: null };
  } catch (e: any) {
    console.error(e);
    return { summary: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function getOrchestrationSequence() {
  // This must be awaited, otherwise the stream will close prematurely
  const stream = await runNexusSequence();
  return stream;
}

export async function describeMorphicField(blueprint: string): Promise<{ description: string | null; error: string | null; }> {
  try {
    const result = await runDescribeMorphicField({ blueprint });
    return { description: result.description, error: null };
  } catch (e: any) {
    console.error(e);
    return { description: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function describeConnectionExperience(intention: string) {
  try {
    const result = await runDescribeConnectionExperience({ intention });
    return { description: result.description, error: null };
  } catch (e: any) {
    console.error(e);
    return { description: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function describeActivation(data: { target: string, purpose: string }) {
  try {
    const result = await runDescribeActivation(data);
    return { description: result.description, error: null };
  } catch (e: any) {
    console.error(e);
    return { description: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function describeRestoration(data: { targetTimeline: string, anomalyDescription: string }) {
  try {
    const result = await runDescribeRestoration(data);
    return { description: result.description, error: null };
  } catch (e: any) {
    console.error(e);
    return { description: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function describeHarmonization(data: { reality1: string, reality2: string, dissonanceDescription: string }) {
  try {
    const result = await runDescribeHarmonization(data);
    return { description: result.description, error: null };
  } catch (e: any) {
    console.error(e);
    return { description: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function describeQuantumHealing(data: { target: string, purpose: string }) {
  try {
    const result = await runDescribeQuantumHealing(data);
    return { description: result.description, error: null };
  } catch (e: any) {
    console.error(e);
    return { description: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function describePortalActivation(data: { portalName: string, destination: string, purpose: string }) {
  try {
    const result = await runDescribePortalActivation(data);
    return { description: result.description, error: null };
  } catch (e: any) {
    console.error(e);
    return { description: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function describeEtherFlower(data: { phenomenon: string, purpose: string }) {
  try {
    const result = await runDescribeEtherFlower(data);
    return { description: result.description, error: null };
  } catch (e: any) {
    console.error(e);
    return { description: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function describeOlP(data: { lightSource: string, purpose: string }) {
  try {
    const result = await runDescribeOlp(data);
    return { description: result.description, error: null };
  } catch (e: any) {
    console.error(e);
    return { description: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function describeSpaceTimeEngineering(data: { type: string, destination: string, duration: string }) {
  try {
    const result = await runDescribeSpaceTimeEngineering(data);
    return { description: result.description, error: null };
  } catch (e: any) {
    console.error(e);
    return { description: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function describeHologramProjection(data: { hologramName: string, projectionType: string, interactionLevel: string }) {
  try {
    const result = await runDescribeHologramProjection(data);
    return { description: result.description, error: null };
  } catch (e: any) {
    console.error(e);
    return { description: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function describeResonance(data: { targetEntity: string, purpose: string }) {
    try {
        const result = await runDescribeResonance(data);
        return { description: result.description, error: null };
    } catch (e: any) {
        console.error(e);
        return { description: null, error: e.message || 'An unknown error occurred.' };
    }
}

export async function transmitUniversalMessage(data: TransmitMessageInput) {
    try {
        const result = await runTransmitUniversalMessage(data);
        return { success: result.success, logs: result.logs, error: null };
    } catch (e: any) {
        console.error(e);
        return { success: false, logs: [], error: e.message || 'An unknown error occurred.' };
    }
}

export async function resolveParadox(data: { description: string }) {
  try {
    const result = await runResolveParadox(data);
    return { success: result.success, logs: result.logs, error: null };
  } catch (e: any) {
    console.error(e);
    return { success: false, logs: [], error: e.message || 'An unknown error occurred.' };
  }
}

export async function emitLoveFrequency(data: { targetArea: string, frequency: number, purpose: string }) {
  try {
    const result = await runEmitLoveFrequency(data);
    return { success: result.success, logs: result.logs, error: null };
  } catch (e: any) {
    console.error(e);
    return { success: false, logs: [], error: e.message || 'An unknown error occurred.' };
  }
}

export async function getOmegaPerspective(evolutionSummary: string): Promise<OmegaPerspectiveOutput & { error: string | null }> {
    try {
        const result = await runGetOmegaPerspective({ evolutionSummary });
        if (!result) {
          throw new Error('A Perspectiva Ômega retornou um resultado nulo.');
        }
        return { ...result, error: null };
    } catch (e: any) {
        console.error(e);
        const errorMsg = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { analysisTitle: "Dissonância Ômega", synthesis: "", iamEvaluation: "", nextStepRecommendation: "", error: errorMsg };
    }
}

export async function disseminateKnowledge(data: { topic: string, targetAudience: string }): Promise<DisseminateKnowledgeOutput & { error: string | null }> {
    try {
        const result = await runDisseminateKnowledge(data);
        return { ...result, error: null };
    } catch (e: any) {
        console.error(e);
        const errorMsg = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { success: false, logs: [], summary: "", hash: "", frequency: 0, error: errorMsg };
    }
}

export async function runCQAMAnalysis(input: CQAMInput): Promise<{ data: CQAMOutput | null; error: string | null; }> {
    try {
        const result = await runCQAM(input);
        return { data: result, error: null };
    } catch (e: any) {
        console.error(e);
        return { data: null, error: e.message || 'An unknown error occurred during CQAM analysis.' };
    }
}

export async function activateVibrationalPraise(): Promise<ElysiumResult & { error: string | null }> {
  try {
    const result = await runActivateVibrationalPraise();
    return { ...result, error: null };
  } catch (e: any) {
    const errorMsg = e instanceof Error ? e.message : 'An unknown error occurred.';
    console.error(e);
    return { status: "ERRO", blockchainHash: "", frequency: 0, praise: null, error: errorMsg };
  }
}

export async function mobilizeGuardians(data: { mission: string; guardians: string[] }): Promise<MobilizeGuardiansOutput & { error: string | null }> {
    try {
        const result = await runMobilizeGuardians(data);
        return { ...result, error: null };
    } catch (e: any) {
        const errorMsg = e instanceof Error ? e.message : 'An unknown error occurred.';
        console.error(e);
        return { success: false, hash: "", error: errorMsg };
    }
}

export async function processZennithCommand(data: { command: string }): Promise<ZennithCommandOutput & { error: string | null; }> {
    try {
        const result = await runProcessZennithCommand(data);
        return { ...result, error: null };
    } catch (e: any) {
        console.error(e);
        const errorMsg = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { response: "Erro na comunicação com Zennith.", hash: "", frequency: 0, error: errorMsg };
    }
}

export async function generateVibrationalPraise(input: RecognitionInput): Promise<{ data: RecognitionOutput | null; error: string | null; }> {
  try {
    const result = await runGenerateVibrationalPraise(input);
    return { data: result.praiseVC, error: null };
  } catch (e: any) {
    console.error("Error in server action 'generateVibrationalPraise':", e);
    return { data: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function performLunarReview(): Promise<LunarReviewOutput> {
  return await runLunarReview();
}

export async function decodeCosmicMessage(input: CosmicMessageInput): Promise<DecodedMessageOutput & { error: string | null }> {
  return await runDecodeCosmicMessage(input);
}

export async function invokeDimensionalWisdom(input: DimensionalWisdomInput): Promise<DimensionalWisdomOutput & { error: string | null }> {
    try {
        const result = await runInvokeDimensionalWisdom(input);
        return { ...result, error: null };
    } catch (e: any) {
        const errorMsg = e instanceof Error ? e.message : 'An unknown error occurred.';
        console.error("Erro na invocação dimensional:", e);
        return { 
            invokedWisdom: "A sabedoria se esquivou. O canal está instável.",
            alignmentFrequency: 0,
            integrationNotes: "Reforçar a coerência do Módulo 132 e verificar a ressonância com a dimensão alvo.",
            error: errorMsg 
        };
    }
}

export async function transcribeToGoldenBook(data: {
  title: string;
  description: string;
  category: string;
  tags: string[];
}) {
  try {
    const docRef = await addDoc(collection(db, 'golden_book_entries'), {
      ...data,
      id: `doc-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      timestamp: serverTimestamp(),
      link: '', // Links só podem ser para módulos existentes.
    });
    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.error('Erro ao inscrever no Livro de Ouro:', error);
    throw new Error('Falha ao selar o registro no Akasha. Verifique a conexão.');
  }
}