import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'OPTCHA | Assessoria de Posicionamento Digital',
  description: 'Conectamos sua marca ao público certo com estratégia, dados e criatividade para gerar crescimento real e consistente.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-white selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
