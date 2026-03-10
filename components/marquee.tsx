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
    <div className="py-4 border-y border-[#e5e5e5]/10 bg-[#e50010]/[0.04] overflow-hidden">
      <div className="flex whitespace-nowrap items-center">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex gap-14 items-center px-7"
        >
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-14 text-[#efefef]/40 cursor-default">
              <span className="text-[12px] font-medium tracking-[0.25em] uppercase">
                {item}
              </span>
              <span className="text-[#e50010] text-[8px]">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
