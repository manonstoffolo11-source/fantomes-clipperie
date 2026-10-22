import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const titre = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f-titre" });
const texte = DM_Sans({ subsets: ["latin"], variable: "--f-texte" });

export const metadata: Metadata = {
  title: "Clipperie : ton live de 2 heures devient 30 clips verticaux",
  description:
    "Dépose ta vidéo longue. Reçois des clips verticaux de 30 à 60 secondes, sous-titrés et prêts à publier.",
  openGraph: {
    title: "Clipperie : ton live de 2 heures devient 30 clips verticaux",
    description:
      "Des clips de 30 à 60 secondes, sous-titrés, prêts à publier. Remboursé sous 14 jours.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${titre.variable} ${texte.variable}`}>
      <body>{children}</body>
    </html>
  );
}
