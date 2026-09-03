import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { perfil } from "@/data/perfil";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const code = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const titulo = `${perfil.nome} — ${perfil.cargo}`;
const descricao = perfil.resumoCurto;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titulo,
    template: `%s · ${perfil.nome}`,
  },
  description: descricao,
  keywords: [
    "Desenvolvedor Java",
    "Spring Boot",
    "Backend",
    "Microsserviços",
    "Integrações bancárias",
    "Crédito consignado",
    "Florianópolis",
    perfil.nome,
  ],
  authors: [{ name: perfil.nome, url: siteUrl }],
  creator: perfil.nome,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: perfil.nome,
    title: titulo,
    description: descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descricao,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#06090f",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: perfil.nome,
  jobTitle: perfil.cargo,
  email: `mailto:${perfil.email}`,
  telephone: `+${perfil.telefoneE164}`,
  url: siteUrl,
  sameAs: [perfil.linkedin, perfil.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Florianópolis",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Microsserviços",
    "Docker",
    "Kafka",
    "MySQL",
    "Node.js",
    "React",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${code.variable} antialiased`}>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:border focus:border-accent/40 focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-accent"
        >
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
