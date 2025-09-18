'use client';
import GaiaAuréliaCore from '@/components/planet/GaiaAuréliaCore';
import SynapticGrid from '@/components/quantum/SynapticGrid';

export default function GaiaAureliaPage() {
    return (
        <div className="min-h-screen bg-background">
            <GaiaAuréliaCore />
            <div className="mt-16">
                <SynapticGrid />
            </div>
        </div>
    )
}
