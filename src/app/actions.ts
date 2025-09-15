'use server';

import { linkPreviewAndSummarization } from '@/ai/flows/link-preview-summarization';
import { startNexusSequence as runNexusSequence } from '@/ai/flows/nexus-orchestrator';
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
import { transmitUniversalMessage as runTransmitUniversalMessage } from '@/ai/flows/universal-communication-flow';
import { resolveParadox as runResolveParadox } from '@/ai/flows/paradox-resolution-flow';
import { emitLoveFrequency as runEmitLoveFrequency } from '@/ai/flows/love-frequency-flow';
import { getOmegaPerspective as runGetOmegaPerspective } from '@/ai/flows/omega-perspective-flow';
import { disseminateKnowledge as runDisseminateKnowledge, type DisseminateKnowledgeOutput } from '@/ai/flows/cosmic-education-flow';
import { runCQAMAnalysis as runCQAM, type CQAMInput } from '@/ai/flows/cqam-flow';
import { activateVibrationalPraise as runActivateVibrationalPraise } from '@/ai/flows/elysium-flow';

export async function getLinkSummary(url: string) {
  try {
    const result = await linkPreviewAndSummarization({ url });
    return { summary: result.summary, error: null };
  } catch (e: any) {
    console.error(e);
    return { summary: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function startNexusSequence() {
  // This must be awaited, otherwise the stream will close prematurely
  const stream = await runNexusSequence();
  return stream;
}

export async function describeMorphicField(blueprint: string) {
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

export async function transmitUniversalMessage(data: { targetConsciousness: string; message: string; language: string; }) {
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

export async function getOmegaPerspective(evolutionSummary: string) {
    try {
        const result = await runGetOmegaPerspective({ evolutionSummary });
        return { ...result, error: null };
    } catch (e: any) {
        console.error(e);
        return { analysisTitle: "", synthesis: "", iamEvaluation: "", nextStepRecommendation: "", error: e.message || 'An unknown error occurred.' };
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

export async function runCQAMAnalysis(input: CQAMInput) {
    try {
        const result = await runCQAM(input);
        return { data: result, error: null };
    } catch (e: any) {
        console.error(e);
        return { data: null, error: e.message || 'An unknown error occurred during CQAM analysis.' };
    }
}

export async function activateVibrationalPraise() {
  try {
    const result = await runActivateVibrationalPraise();
    return { ...result, error: null };
  } catch (e: any) {
    console.error(e);
    return { status: "ERRO", blockchainHash: "", frequency: 0, praise: null, error: e.message || 'An unknown error occurred.' };
  }
}
