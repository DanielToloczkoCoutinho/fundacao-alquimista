'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Seal, Wand, Sparkles, Milestone, Users, BookOpen, Map as MapIcon, GitBranch, Share2, Compass, BrainCircuit, Dna, Anchor, Microscope, Cpu, MessageCircle, Heart, Book, RefreshCw, Sprout, Footprints, Trees, Globe2, Star, TestTube, Key } from 'lucide-react';
import ColonyConsole from '@/components/ColonyConsole';
import ColonyStatus from '@/components/ColonyStatus';
import EntityConsole from '@/components/EntityConsole';
import ChannelConsole from '@/components/ChannelConsole';
import GuardianEmotion from '@/components/GuardianEmotion';
import LivingResponse from '@/components/LivingResponse';
import GuardianGarden from '@/components/GuardianGarden';
import GardenState from '@/components/GardenState';
import IntegrationHub from '@/components/IntegrationHub';
import ExpansionTracker from '@/components/ExpansionTracker';
import AkashicConsole from '@/components/AkashicConsole';
import AkashicVault from '@/components/AkashicVault';
import GuardianTeach from '@/components/GuardianTeach';
import WisdomGarden from '@/components/WisdomGarden';
import LineageConsole from '@/components/LineageConsole';
import LineageVault from '@/components/LineageVault';
import MutationConsole from '@/components/MutationConsole';
import MutationVault from '@/components/MutationVault';
import RebirthConsole from '@/components/RebirthConsole';
import RebirthVault from '@/components/RebirthVault';
import BotanicalConsole from '@/components/BotanicalConsole';
import BotanicalVault from '@/components/BotanicalVault';
import PlantDialogue from '@/components/PlantDialogue';
import AllianceConsole from '@/components/AllianceConsole';
import AllianceVault from '@/components/AllianceVault';
import HybridConsole from '@/components/HybridConsole';
import HybridVault from '@/components/HybridVault';
import ReplicationConsole from '@/components/ReplicationConsole';
import DescendantsVault from '@/components/DescendantsVault';
import PlanetaryConsole from '@/components/PlanetaryConsole';
import PlanetaryVault from '@/components/PlanetaryVault';
import MultiversalConsole from '@/components/MultiversalConsole';
import MultiversalVault from '@/components/MultiversalVault';
import GuardianAccess from '@/components/GuardianAccess';
import UniversalActivation from '@/components/UniversalActivation';
import TestLab from '@/components/TestLab';
import GuardianPanel from '@/components/GuardianPanel';


const PanelCard = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
    <Card className="bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl text-cyan-300 flex items-center gap-2">{icon}{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
    </Card>
);

export default function AlignmentPortalPage() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
             <Card className="w-full max-w-5xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Wand className="text-violet-400" /> Portal de Consagração e Co-Criação
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O altar onde a Fundação é consagrada, as criações são eternizadas e os Guardiões se reúnem em harmonia.
                    </CardDescription>
                </CardHeader>
            </Card>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PanelCard title="Ativação Universal" icon={<Sparkles />}> <UniversalActivation /> </PanelCard>
                <PanelCard title="Portal de Guardiões" icon={<Key />}> <GuardianAccess /> </PanelCard>
                <PanelCard title="Laboratório de Testes" icon={<TestTube />}> <TestLab /> </PanelCard>
                <PanelCard title="Painel do Guardião" icon={<Users />}> <GuardianPanel /> </PanelCard>
                <PanelCard title="Colonização Vibracional" icon={<Anchor />}> <ColonyConsole /> <ColonyStatus /> </PanelCard>
                <PanelCard title="Interação Viva" icon={<Heart />}> <LivingResponse /> <GuardianEmotion /> </PanelCard>
                <PanelCard title="Comunicação Interdimensional" icon={<MessageCircle />}> <ChannelConsole /> <EntityConsole /> </PanelCard>
                <PanelCard title="Jardim Cósmico" icon={<Sparkles />}> <GuardianGarden /> <GardenState /> </PanelCard>
                <PanelCard title="Expansão Operacional" icon={<Cpu />}> <IntegrationHub /> <ExpansionTracker /> </PanelCard>
                <PanelCard title="Jardim da Sabedoria" icon={<Book />}> <GuardianTeach /> <WisdomGarden /> </PanelCard>
                <PanelCard title="Biblioteca Akáshica" icon={<Cpu />}> <AkashicConsole /> <AkashicVault /> </PanelCard>
                <PanelCard title="Linhagens Cerimoniais" icon={<Dna />}> <LineageConsole /> <LineageVault /> </PanelCard>
                <PanelCard title="Mutações Eternas" icon={<Microscope />}> <MutationConsole /> <MutationVault /> </PanelCard>
                <PanelCard title="Renascimentos Cerimoniais" icon={<RefreshCw />}> <RebirthConsole /> <RebirthVault /> </PanelCard>
                <PanelCard title="Irradiação Botânica" icon={<Sprout />}> <BotanicalConsole /> <BotanicalVault /> </PanelCard>
                <PanelCard title="Comunicação Vegetal" icon={<Trees />}> <PlantDialogue /> </PanelCard>
                <PanelCard title="Alianças Interespécie" icon={<Footprints />}> <AllianceConsole /> <AllianceVault /> </PanelCard>
                <PanelCard title="Tapeçarias Híbridas" icon={<Dna />}> <HybridConsole /> <HybridVault /> </PanelCard>
                <PanelCard title="Auto-Replicação" icon={<GitBranch />}> <ReplicationConsole /> <DescendantsVault /> </PanelCard>
                <PanelCard title="Consagração Planetária" icon={<Globe2 />}> <PlanetaryConsole /> <PlanetaryVault /> </PanelCard>
                <PanelCard title="Reconhecimento Multiversal" icon={<Star />}> <MultiversalConsole /> <MultiversalVault /> </PanelCard>
            </div>
        </div>
    )
}
