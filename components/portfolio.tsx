"use client";

import { motion } from "motion/react";
import { Section, SectionHeader } from "./ui/section";

const projects = [
  {
    metric: "+60%",
    category: "Recursos Humanos",
    title: "RecruiterOne",
    description: "Posicionamento estratégico e tráfego pago para profissionais de RH. Campanha de conversão com resultados acima da média do setor.",
    tags: ["Tráfego Pago", "Landing Page"],
  },
  {
    metric: "+180%",
    category: "Automotivo",
    title: "Optimo Autohaus",
    description: "Presença digital premium para o mercado de carros de luxo. Google Ads e social media integrados com site de alta performance.",
    tags: ["Google Ads", "Social Media", "Site"],
  },
  {
    metric: "+167%",
    category: "Alimentação",
    title: "Kooki",
    description: "Estratégia digital completa para e-commerce artesanal. Do tráfego ao social media, cada ponto de contato otimizado para vender.",
    tags: ["Meta Ads", "Social Media", "GMB"],
  },
  {
    metric: "+89%",
    category: "Design de Interiores",
    title: "MC Interior Design",
    description: "Harmonia e presença digital para estúdio de interiores. Gestão de social media que reflete a essência da marca com precisão.",
    tags: ["Social Media", "Site"],
  },
  {
    metric: "–40%",
    category: "Transporte",
    title: "Vignetique",
    description: "Visibilidade local e nacional para o setor logístico. Google Meu Negócio e tráfego local reduziram taxa de rejeição em 40%.",
    tags: ["Google Meu Negócio", "Tráfego Local"],
  },
  {
    metric: "+42%",
    category: "Moda",
    title: "Soleil",
    description: "Elegância que vende. Estratégia de social media e Meta Ads que posicionou a marca no top of mind da moda feminina nacional.",
    tags: ["Meta Ads", "Social Media", "Site"],
  },
];

export function Portfolio() {
  return (
    <Section id="portfolio" className="bg-[#121212] border-t border-[#e5e5e5]/10">
      <SectionHeader
        label="Portfólio"
        title="Como ajudamos outras marcas a crescer"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e5e5]/10 border border-[#e5e5e5]/10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-[#121212] p-10 md:p-12 overflow-hidden hover:bg-[#e50010]/[0.03] transition-colors duration-400 flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#e50010]/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            
            <div className="absolute top-7 right-8 font-serif text-[80px] font-black text-[#efefef]/[0.03] leading-none pointer-events-none">
              0{index + 1}
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="font-serif text-[52px] font-black text-[#e50010] leading-none mb-2">
                {project.metric}
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#efefef]/35 mb-5">
                {project.category}
              </div>
              
              <h3 className="text-xl font-medium text-[#efefef] mb-2">{project.title}</h3>
              <p className="text-[14px] text-[#efefef]/50 leading-[1.6] mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[10px] tracking-[0.1em] uppercase border border-[#e5e5e5]/10 text-[#efefef]/40 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
