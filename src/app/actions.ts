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
