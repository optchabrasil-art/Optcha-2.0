import type {Metadata} from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Cursor } from '@/components/cursor';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'OPTCHA | Assessoria de Posicionamento Digital',
  description: 'Conectamos sua marca ao público certo com estratégia, dados e criatividade para gerar crescimento real e consistente.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#121212] text-[#efefef] font-sans antialiased selection:bg-[#e50010] selection:text-white" suppressHydrationWarning>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
