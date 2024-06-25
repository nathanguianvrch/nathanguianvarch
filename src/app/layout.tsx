import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Guianvarc'h - Portfolio",
  description: "Portfolio of Nathan Guianvarc'h",
  creator: "Nathan Guianvarc'h",
  keywords: ["Portfolio", "Nathan Guianvarc'h"],
};

export default function RootLayout({ children }: any) {
  return (
    <>
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
