"use client";

import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10 px-6 md:px-12 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6 lg:pr-8">
            <a href="#" className="text-2xl font-bold tracking-tighter text-white">
              OPTCHA
            </a>
            <p className="text-sm text-white/50 leading-relaxed">
              Assessoria de Posicionamento Digital. Conectando marcas ao público certo com estratégia e dados.
            </p>
            <div className="text-xs text-white/30 mt-auto pt-8">
              Feito com ♡ no Brasil.<br />
              © 2018 – 2026 OPTCHA
            </div>
          </div>

          {/* Column 2: Menu */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white/80">Menu</h4>
            <nav className="flex flex-col gap-4">
              {["Sobre", "Portfólio", "Como trabalhamos", "Clientes", "Contato"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-white/50 hover:text-white transition-colors w-fit">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white/80">Serviços</h4>
            <nav className="flex flex-col gap-4">
              {["Tráfego Pago", "Social Media", "Sites & Sistemas", "Google Meu Negócio"].map((item) => (
                <a key={item} href="#servicos" className="text-sm text-white/50 hover:text-white transition-colors w-fit">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Socials */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white/80">Siga-nos</h4>
            <nav className="flex flex-col gap-4">
              {["Instagram", "LinkedIn", "Facebook", "TikTok"].map((item) => (
                <a key={item} href="#" className="text-sm text-white/50 hover:text-white transition-colors w-fit flex items-center gap-2 group">
                  {item}
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs">↗</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-white/30 hidden md:block">
            All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {["LGPD", "Política de Privacidade", "Termos de Uso", "Política de Cookies"].map((item) => (
              <a key={item} href="#" className="text-xs text-white/40 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
