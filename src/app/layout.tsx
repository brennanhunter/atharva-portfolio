import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atharva Sawant - 3D Environment Artist & Game Developer",
  description: "Portfolio of Atharva Sawant - 3D Environment Artist and Game Developer specializing in game-ready environments, level design, and interactive experiences.",
  keywords: "3D Artist, Environment Artist, Game Developer, Level Design, Unity, Unreal Engine, Maya, Substance Painter",
  authors: [{ name: "Atharva Sawant" }],
  openGraph: {
    title: "Atharva Sawant - 3D Environment Artist & Game Developer",
    description: "Portfolio showcasing 3D environments, game development projects, and interactive experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}