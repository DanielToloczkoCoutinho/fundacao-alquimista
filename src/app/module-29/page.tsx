'use client';
import { ZennithDashboard } from "@/components/ui/ZennithDashboard";
import { Suspense } from "react";
import SuspenseFallback from "@/components/ui/suspense-fallback";

export default function Module29Page() {
    return (
        <Suspense fallback={<SuspenseFallback />}>
            <ZennithDashboard />
        </Suspense>
    );
}
