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
    <Section id="processo" className="bg-[#0e0e0e] border-t border-b border-[#e5e5e5]/10">
      <SectionHeader
        label="Como trabalhamos"
        title="Como transformamos ideias em resultados"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-[#e5e5e5]/10 border border-[#e5e5e5]/10">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative z-10 flex flex-col p-8 md:p-10 bg-[#0e0e0e] hover:bg-[#e50010]/[0.04] transition-colors group"
          >
            <div className="flex flex-col mb-8">
              <span className="text-7xl font-black text-[#e50010]/10 font-serif group-hover:text-[#e50010]/20 transition-colors mb-6 leading-none">
                {step.number}
              </span>
              <span className="self-start px-3 py-1 text-[11px] font-semibold tracking-[0.1em] uppercase border rounded-full border-[#e5e5e5]/20 text-[#e50010]">
                {step.timeframe}
              </span>
            </div>

            <h3 className="text-[17px] font-semibold text-[#efefef] mb-3">
              {step.title}
            </h3>
            
            <p className="text-[#efefef]/50 leading-[1.7] text-[13px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
