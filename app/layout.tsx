import type {Metadata} from "next";
import {
  Alfa_Slab_One,
  BhuTuka_Expanded_One,
  Geist,
  Geist_Mono,
  Krona_One,
  Michroma,
  Play,
  Rubik_Glitch,
  Syncopate,
  Unbounded,
  Wallpoet,
} from "next/font/google";
import "./globals.css";
import {SectionInViewProvider} from "@/contexts/SectionInViewContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const wallPoet = Wallpoet({
  variable: "--font-wallpoet",
  subsets: ["latin"],
  weight: "400",
});

const alfaSlabOne = Alfa_Slab_One({
  variable: "--font-alfa-slab-one",
  subsets: ["latin"],
  weight: "400",
});

const rubikGlitch = Rubik_Glitch({
  variable: "--font-rubik-glitch",
  subsets: ["latin"],
  weight: "400",
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: "400",
});

const play = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: "400",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: "400",
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

const kronaOne = Krona_One({
  variable: "--font-krona-one",
  subsets: ["latin"],
  weight: "400",
});

const bhutukaExpandedOne = BhuTuka_Expanded_One({
  variable: "--font-bhutuka-expanded-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "João Coelho",
  description: "Personal website of João Coelho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${wallPoet.variable} 
          ${alfaSlabOne.variable} 
          ${rubikGlitch.variable} 
          ${syncopate.variable}
          ${play.variable}
          ${unbounded.variable}
          ${michroma.variable}
          ${kronaOne.variable}
          ${bhutukaExpandedOne.variable}
          antialiased font-mono`}
      >
        <SectionInViewProvider>{children}</SectionInViewProvider>
      </body>
    </html>
  );
}
