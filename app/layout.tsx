import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { companyInfo } from "@/lib/site-content";

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
    default:
      `${companyInfo.shortName} Schoonmaakbedrijf | Professionele schoonmaak in Wijk en Aalburg en omgeving`,
    template: `%s | ${companyInfo.shortName} Schoonmaakbedrijf`,
  },
  description:
    `${companyInfo.name} verzorgt professionele schoonmaakdiensten in ${companyInfo.serviceArea.join(", ")}. Vaste teams, duidelijke prijzen en persoonlijke service.`,
  keywords: [
    "schoonmaakbedrijf",
    "kantoorschoonmaak",
    "vloeronderhoud",
    "glasbewassing",
    "bouwschoonmaak",
    "Wijk en Aalburg",
    "Hedel",
    "Kerkdriel",
    "Den Bosch",
    "Waalwijk",
    "Werkendam",
  ],
  authors: [{ name: companyInfo.name }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: companyInfo.shortName,
    title:
      `${companyInfo.shortName} Schoonmaakbedrijf | Professionele schoonmaak in Wijk en Aalburg en omgeving`,
    description:
      "Professionele schoonmaakdiensten in Wijk en Aalburg, Hedel, Kerkdriel, Den Bosch, Waalwijk en Werkendam.",
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
        <main className="flex-1 pt-20 md:pt-[8.8rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
