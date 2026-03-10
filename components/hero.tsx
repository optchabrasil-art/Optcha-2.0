"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const words = [
  "resultados reais",
  "crescimento",
  "performance",
  "autoridade",
  "inovação",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Subtle Grain Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
      
      <div className="max-w-[1280px] mx-auto w-full flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest uppercase border rounded-full border-white/10 text-white/70"
        >
          Assessoria de Posicionamento Digital
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-[clamp(3rem,7vw,7rem)] leading-[1.1] font-extrabold tracking-tighter mb-8 max-w-[1000px]"
        >
          Sua marca no lugar certo para gerar{" "}
          <span className="relative inline-block text-white/90 italic overflow-hidden h-[1.1em] align-bottom w-full sm:w-auto min-w-[300px] text-left sm:text-center">
            <motion.span
              key={index}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="absolute left-0 right-0"
            >
              {words[index]}
            </motion.span>
            {/* Invisible placeholder to maintain width */}
            <span className="opacity-0 pointer-events-none">{words[0]}</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/60 max-w-[600px] mb-12 leading-relaxed"
        >
          Conectamos sua marca ao público certo com estratégia, dados e criatividade para gerar crescimento real e consistente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#contato"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors text-center"
          >
            Solicitar orçamento
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-center"
          >
            Ver projetos
          </a>
        </motion.div>

        {/* Floating Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium tracking-widest uppercase text-white/40"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
            250+ Projetos
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
            7+ Anos
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
            37% Nacional
          </div>
        </motion.div>
      </div>
    </section>
  );
}
