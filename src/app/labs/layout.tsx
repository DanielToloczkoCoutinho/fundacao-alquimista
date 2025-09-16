
'use client';

import { Suspense } from "react";
import SuspenseFallback from "@/components/ui/suspense-fallback";

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<SuspenseFallback />}>{children}</Suspense>;
}
