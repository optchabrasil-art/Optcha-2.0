"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const words = [
  "resultados",
  "autoridade",
  "presença",
  "conversões",
  "crescimento",
  "relevância",
  "impacto",
  "sucesso"
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(229,0,16,0.08)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(229,229,229,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(229,229,229,0.12) 1px, transparent 1px)", backgroundSize: "80px 80px" }}></div>
      
      <div className="max-w-[1280px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between z-10 gap-12">
        <div className="max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-4 py-2 mb-10 text-xs font-medium tracking-[0.15em] uppercase border rounded-full border-[#e5e5e5]/20 text-[#efefef]/50"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e50010] animate-pulse"></span>
            Assessoria de Posicionamento Digital
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="text-[clamp(3.2rem,8vw,7rem)] leading-[0.95] font-black tracking-tight mb-9 font-serif text-[#efefef]"
          >
            Sua marca<br/>no lugar<br/>
            <span className="relative inline-block text-[#e50010] italic overflow-hidden h-[1.1em] align-bottom w-full sm:w-auto min-w-[300px] text-left">
              <motion.span
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="absolute left-0 right-0"
              >
                {words[index]}.
              </motion.span>
              <span className="opacity-0 pointer-events-none">{words[0]}.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-[17px] text-[#efefef]/60 max-w-[520px] mb-12 leading-[1.7]"
          >
            Conectamos sua marca ao público certo com estratégia, dados e criatividade para gerar crescimento real e consistente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#contato"
              className="w-full sm:w-auto px-9 py-4 bg-[#e50010] text-white font-semibold tracking-[0.1em] uppercase text-[13px] rounded-sm hover:bg-[#ff1a2a] hover:-translate-y-0.5 transition-all text-center inline-block"
            >
              Solicitar orçamento
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#efefef]/60 font-medium tracking-[0.05em] text-[13px] rounded-sm hover:text-[#efefef] transition-colors text-center flex items-center justify-center gap-2"
            >
              Ver projetos <span className="text-[#e50010]">→</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="hidden lg:flex flex-col gap-4"
        >
          {[
            { num: "250+", label: "Projetos" },
            { num: "7+", label: "Anos" },
            { num: "37%", label: "Nacional" }
          ].map((stat, i) => (
            <div key={i} className="border border-[#e5e5e5]/10 p-5 px-7 text-center min-w-[140px] backdrop-blur-md bg-[#efefef]/[0.02] hover:border-[#e50010] transition-colors">
              <div className="font-serif text-4xl font-black text-[#e50010] leading-none mb-1.5">{stat.num}</div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-[#efefef]/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
