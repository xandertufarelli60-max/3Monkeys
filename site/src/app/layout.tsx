import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

// Components
import CursorFollower from "@/components/ui/CursorFollower";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ShutterTransition from "@/components/ui/ShutterTransition";
import SplashScreen from "@/components/ui/SplashScreen";
import Header from "@/components/layout/Header";
import KitSidebar from "@/components/layout/KitSidebar";
import { KitProvider } from "@/lib/KitContext";

// Font — unified to Space Mono
const spaceMono = Space_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

// Metadata
export const metadata: Metadata = {
  title: "3MonkeysFilm | Production Excellence from Italy",
  description:
    "Casa di produzione cinematografica e service video premium. Noleggio attrezzature professionali ARRI, RED, Cooke. Roma - Milano.",
  keywords: [
    "produzione video milano",
    "casa di produzione cinematografica",
    "noleggio attrezzatura cinema",
    "service video italia",
    "ARRI Alexa rental",
    "RED V-Raptor noleggio",
    "3MonkeysFilm",
  ],
  authors: [{ name: "3MonkeysFilm" }],
  creator: "3MonkeysFilm",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://3monkeysfilm.it",
    siteName: "3MonkeysFilm",
    title: "3MonkeysFilm | Production Excellence from Italy",
    description:
      "Casa di produzione cinematografica e service video premium. Noleggio attrezzature professionali.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3MonkeysFilm - Crafting Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3MonkeysFilm | Production Excellence",
    description: "Casa di produzione cinematografica premium. Roma - Milano.",
    images: ["/og-image.jpg"],
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
    <html lang="it" suppressHydrationWarning>
      <body
        className={`${spaceMono.variable} antialiased cursor-custom film-grain`}
        suppressHydrationWarning={true}
      >
        <KitProvider>
          <SplashScreen>
            <SmoothScroll>
              <CursorFollower />
              <Header />
              <ShutterTransition>
                <main>{children}</main>
              </ShutterTransition>
              <KitSidebar />
            </SmoothScroll>
          </SplashScreen>
        </KitProvider>
      </body>
    </html>
  );
}
