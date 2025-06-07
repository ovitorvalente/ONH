import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Fontes personalizadas
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadados do projeto ONH - Ônibus na Hora
export const metadata: Metadata = {
  title: "ONH - Ônibus na Hora",
  description:
    "Aplicativo open source para visualizar horários e linhas de ônibus em tempo real. Foco em UX mobile, acessibilidade e experiência fluida. Desenvolvido por Vitor Valente.",
  authors: [{ name: "Vitor Valente", url: "https://github.com/ovitorvalente" }],
  keywords: [
    "ônibus",
    "transporte público",
    "mobilidade urbana",
    "horários",
    "react",
    "next.js",
    "onh",
    "open source",
  ],
  creator: "Vitor Valente",
  metadataBase: new URL("https://onibusnahora.dev"),
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
