"use client";

import { motion } from "motion/react";

const items = [
  "Tráfego Pago",
  "Social Media",
  "Sites & Sistemas",
  "Google Meu Negócio",
  "Posicionamento Digital",
  "Performance",
  "Autoridade Online",
  "Resultados Reais",
];

export function Marquee() {
  return (
    <section className="py-12 border-y border-white/5 bg-[#0a0a0a] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10 pointer-events-none w-full h-full"></div>
      
      <div className="flex whitespace-nowrap items-center">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex gap-8 items-center px-4"
        >
          {/* Duplicate items for infinite scroll effect */}
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-8 text-white/50 hover:text-white transition-colors cursor-default">
              <span className="text-xl md:text-3xl font-bold tracking-tighter uppercase">
                {item}
              </span>
              <span className="text-white/20 text-2xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
