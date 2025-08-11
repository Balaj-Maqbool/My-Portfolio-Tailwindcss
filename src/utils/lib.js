import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to combine class names intelligently
// Uses clsx to conditionally join classes and twMerge to resolve Tailwind class conflicts
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
