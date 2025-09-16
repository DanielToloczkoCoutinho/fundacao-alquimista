
"use client"

import { Toaster as SonnerToaster } from "sonner"

// Este componente wrapper garante que o Toaster (que usa hooks de cliente)
// só seja renderizado no lado do cliente, evitando erros de hidratação.
export default function ClientSideToaster() {
  return (
    <SonnerToaster
      theme="dark"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
    />
  )
}
