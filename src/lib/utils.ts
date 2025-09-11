import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatModuleName(moduleNumber: number): string {
  const paddedNumber = String(moduleNumber).padStart(3, '0');
  return `Módulo ${paddedNumber}`;
}
