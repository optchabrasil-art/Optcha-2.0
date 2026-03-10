"use client";

import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-[#e5e5e5]/10 pt-16 pb-10 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="flex flex-col gap-5 lg:pr-8">
            <a href="#" className="text-2xl font-black tracking-[0.15em] text-[#efefef] font-serif">
              OPT<span className="text-[#e50010]">CH</span>A
            </a>
            <p className="text-[13px] text-[#efefef]/40 leading-[1.6] max-w-[220px]">
              Assessoria de Posicionamento Digital. Feito com ♡ no Brasil.
            </p>
            <div className="text-[12px] text-[#efefef]/25 mt-auto pt-4">
              © 2018 – 2026 OPTCHA
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#efefef]/40">Menu</h4>
            <nav className="flex flex-col gap-2.5">
              {["Sobre", "Portfólio", "Como trabalhamos", "Clientes", "Contato"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-[14px] text-[#efefef]/55 hover:text-[#e50010] transition-colors w-fit">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#efefef]/40">Serviços</h4>
            <nav className="flex flex-col gap-2.5">
              {["Tráfego Pago", "Social Media", "Sites & Sistemas", "Google Meu Negócio"].map((item) => (
                <a key={item} href="#servicos" className="text-[14px] text-[#efefef]/55 hover:text-[#e50010] transition-colors w-fit">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#efefef]/40">Siga-nos</h4>
            <nav className="flex flex-row gap-2.5">
              {[
                { label: "ig", title: "Instagram" },
                { label: "in", title: "LinkedIn" },
                { label: "fb", title: "Facebook" },
                { label: "tt", title: "TikTok" }
              ].map((item) => (
                <a 
                  key={item.label} 
                  href="#" 
                  title={item.title}
                  className="w-9 h-9 border border-[#e5e5e5]/10 rounded-sm flex items-center justify-center text-[13px] text-[#efefef]/50 hover:text-[#e50010] hover:border-[#e50010] hover:bg-[#e50010]/[0.08] transition-all"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
