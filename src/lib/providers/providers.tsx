import type { JSX } from "react";
import { LenisProvider } from "./lenis-provide";
import { ThemeProvider } from "./theme-provider";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider>
      <LenisProvider />
      {children}
    </ThemeProvider>
  );
}
