import type { JSX } from "react";
import { LenisProvider } from "./lenis-provide";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "sonner";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider>
      <LenisProvider />
      <Toaster richColors position="top-right" />
      {children}
    </ThemeProvider>
  );
}
