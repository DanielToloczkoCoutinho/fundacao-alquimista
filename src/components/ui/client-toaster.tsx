"use client"

import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";

// Este componente wrapper garante que o Toaster (que usa hooks de cliente)
// só seja renderizado no lado do cliente, evitando erros de hidratação.
export default function ClientSideToaster() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Toaster />;
}
