"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Section, SectionHeader } from "./ui/section";

const projects = [
  {
    metric: "+60%",
    category: "Recursos Humanos",
    title: "RecruiterOne",
    description: "Posicionamento estratégico e tráfego pago para profissionais de RH. Campanha de conversão com resultados acima da média do setor.",
    tags: ["Tráfego Pago", "Landing Page"],
    image: "https://picsum.photos/seed/recruiter/800/600",
  },
  {
    metric: "+180%",
    category: "Automotivo",
    title: "Optimo Autohaus",
    description: "Presença digital premium para o mercado de carros de luxo. Google Ads e social media integrados com site de alta performance.",
    tags: ["Google Ads", "Social Media", "Site"],
    image: "https://picsum.photos/seed/car/800/600",
  },
  {
    metric: "+167%",
    category: "Alimentação",
    title: "Kooki",
    description: "Estratégia digital completa para e-commerce artesanal. Do tráfego ao social media, cada ponto de contato otimizado para vender.",
    tags: ["Meta Ads", "Social Media", "GMB"],
    image: "https://picsum.photos/seed/food/800/600",
  },
  {
    metric: "+89%",
    category: "Design de Interiores",
    title: "MC Interior Design",
    description: "Harmonia e presença digital para estúdio de interiores. Gestão de social media que reflete a essência da marca com precisão.",
    tags: ["Social Media", "Site"],
    image: "https://picsum.photos/seed/interior/800/600",
  },
  {
    metric: "–40%",
    category: "Transporte",
    title: "Vignetique",
    description: "Visibilidade local e nacional para o setor logístico. Google Meu Negócio e tráfego local reduziram taxa de rejeição em 40%.",
    tags: ["Google Meu Negócio", "Tráfego Local"],
    image: "https://picsum.photos/seed/transport/800/600",
  },
  {
    metric: "+42%",
    category: "Moda",
    title: "Soleil",
    description: "Elegância que vende. Estratégia de social media e Meta Ads que posicionou a marca no top of mind da moda feminina nacional.",
    tags: ["Meta Ads", "Social Media", "Site"],
    image: "https://picsum.photos/seed/fashion/800/600",
  },
];

export function Portfolio() {
  return (
    <Section id="portfolio" className="bg-[#0a0a0a]">
      <SectionHeader
        label="Portfólio"
        title="Como ajudamos outras marcas a crescer"
        linkText="See all projects"
        linkHref="#portfolio"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-[#111111] rounded-2xl border border-white/10 overflow-hidden hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col h-full"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                <span className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white drop-shadow-lg">
                  {project.metric}
                </span>
                <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium tracking-widest uppercase text-white/80 border border-white/10">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-10 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-white/60 leading-relaxed mb-8 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-medium tracking-wide uppercase bg-white/5 text-white/70 rounded-md border border-white/5"
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
