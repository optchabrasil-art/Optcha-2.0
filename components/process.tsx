"use client";

import { motion } from "motion/react";
import { Section, SectionHeader } from "./ui/section";

const steps = [
  {
    number: "01",
    title: "Diagnóstico & Imersão",
    timeframe: "1 - 2 dias",
    description: "Mergulhamos no seu negócio, objetivos e desafios. Identificamos suas necessidades únicas para criar uma visão clara da estratégia digital.",
  },
  {
    number: "02",
    title: "Estratégia & Planejamento",
    timeframe: "2 - 3 dias",
    description: "Analisamos seu mercado, concorrentes e público para criar uma estratégia orientada por dados. Cada ação alinhada aos seus objetivos de crescimento.",
  },
  {
    number: "03",
    title: "Execução & Criação",
    timeframe: "5 - 7 dias",
    description: "Gerenciamos campanhas, produzimos conteúdo e desenvolvemos soluções sob medida. Cada detalhe meticulosamente elaborado para gerar resultados.",
  },
  {
    number: "04",
    title: "Lançamento & Otimização",
    timeframe: "1 - 2 dias",
    description: "Tudo refinado e pronto para performar. Monitoramos e otimizamos continuamente para maximizar a performance e garantir sucesso a longo prazo.",
  },
];

export function Process() {
  return (
    <Section id="processo" className="bg-[#0a0a0a] border-t border-white/5">
      <SectionHeader
        label="Como trabalhamos"
        title="Como transformamos ideias em resultados"
        linkText="How we work"
        linkHref="#processo"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden xl:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />

        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative z-10 flex flex-col pt-8 xl:pt-0 group"
          >
            <div className="flex items-center justify-between mb-8 xl:mb-12">
              <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent group-hover:from-white/40 transition-colors duration-300">
                {step.number}
              </span>
              <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase border rounded-full border-white/10 text-white/50 bg-[#0a0a0a]">
                {step.timeframe}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
              {step.title}
            </h3>
            
            <p className="text-white/50 leading-relaxed text-sm">
              {step.description}
            </p>

            {/* Decorative SVG Icon */}
            <div className="mt-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
