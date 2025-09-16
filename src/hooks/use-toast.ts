"use client"

// Inspired by react-hot-toast library
import * as React from "react"
import { toast as sonnerToast } from "sonner";
import type { ToastProps } from "@/components/ui/toast"

type ToasterToast = Omit<ToastProps, "id"> & {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

function toast(props: ToasterToast) {
    sonnerToast(props.description, {
        id: props.id,
        description: props.description as string,
        duration: props.duration,
        // variant mapping can be added here if needed
    });
}

function useToast() {
  // This hook is now a compatibility layer.
  // The state management is handled by 'sonner'.
  return {
    toast,
    dismiss: (toastId?: string | number) => sonnerToast.dismiss(toastId),
    toasts: [], // 'sonner' manages the state, so we return an empty array for compatibility.
  };
}

export { useToast, toast }
