import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppDock } from "@/components/layout/app-dock";
import { SmoothCursor } from "@/components/layout/smooth-cursor";
import { ThemeProvider } from "@/components/layout/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enacle — AI-Powered Operating System for Businesses",
  description:
    "One AI-powered platform for projects, docs, chat, CRM, support and autonomous agents. Replace every disconnected tool your team uses today.",
  openGraph: {
    title: "Enacle — AI-Powered Operating System for Businesses",
    description:
      "One AI-powered platform for projects, docs, chat, CRM, support and autonomous agents.",
    siteName: "Enacle",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <SmoothCursor />
          {children}
          <AppDock />
        </ThemeProvider>
      </body>
    </html>
  );
}
