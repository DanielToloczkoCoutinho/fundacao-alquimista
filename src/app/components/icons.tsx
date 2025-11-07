import { cn } from "@/lib/utils"

export const AppIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 12a4 4 0 1 0 4-4" />
      <path d="M12 12a1 1 0 1 0 1-1" />
      <path d="M12 22a10 10 0 0 0 10-10" />
      <path d="M2 12a10 10 0 0 1 10-10" />
    </svg>
  );
  