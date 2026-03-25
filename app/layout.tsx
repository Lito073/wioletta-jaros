import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wioletta Jaros Schoonmaakbedrijf | Professionele schoonmaak in regio Altena",
    template: "%s | Wioletta Jaros Schoonmaakbedrijf",
  },
  description:
    "Wioletta Jaros Schoonmaakbedrijf V.O.F. - Professionele schoonmaakdiensten in regio Altena, Nederland. Vaste teams, duidelijke prijzen, persoonlijke service.",
  keywords: [
    "schoonmaakbedrijf",
    "Altena",
    "kantoorschoonmaak",
    "vloeronderhoud",
    "glasbewassing",
    "bouwschoonmaak",
    "Wijk en Aalburg",
  ],
  authors: [{ name: "Wioletta Jaros Schoonmaakbedrijf V.O.F." }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://wioletta-jaros.vercel.app",
    siteName: "Wioletta Jaros Schoonmaakbedrijf",
    title: "Wioletta Jaros Schoonmaakbedrijf | Professionele schoonmaak in regio Altena",
    description:
      "Professionele schoonmaakdiensten in regio Altena. Vaste teams, duidelijke prijzen, persoonlijke service.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
