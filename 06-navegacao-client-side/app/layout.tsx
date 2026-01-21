import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// Configuração da Playfair Display (Google Font)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "700"],
});

// Configuração da Inter (Google Font)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Universo em Foco",
  description: "Explore o incrível mundo da astronomia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* Adicionamos as variáveis e a classe da fonte principal (Inter) no body */}
      <body className={`${inter.className} ${inter.variable} ${playfair.variable}`}>
        <header>
          <div>
            {/* Exemplo de como usar a Playfair especificamente em um título */}
            <div className="site-logo" style={{ fontFamily: 'var(--font-playfair-display)' }}>
              Universo em Foco
            </div>
            <p>Explore o incrível mundo da astronomia e descubra segredos do cosmos através de artigos, imagens e muito mais!</p>
          </div>
          <nav>
            <Link href="/">Início</Link>
            {" | "}
            <Link href="/blog">Blog</Link>
            {" | "}
            <Link href="/loja">Loja</Link>
          </nav>
        </header>
        
        <main>{children}</main>
      </body>
    </html>
  );
}