"use client";

import { motion } from "motion/react";
import { Section, SectionHeader } from "./ui/section";

const testimonials = [
  {
    quote: "A OPTCHA transformou nossa presença digital. As campanhas de tráfego pago trouxeram resultados acima de tudo que esperávamos. Equipe dedicada, atenciosa e extremamente profissional.",
    name: "Marius H.",
    role: "CMO @ Vignetique",
    initials: "MH"
  },
  {
    quote: "Trabalhar com a OPTCHA foi incrível. Elas entenderam nossa visão desde o primeiro momento e entregaram uma presença digital que realmente representa nossa marca.",
    name: "Cristina M.",
    role: "Fundadora @ MC Interior Design",
    initials: "CM"
  },
  {
    quote: "O Google Meu Negócio otimizado pela OPTCHA nos colocou no topo das buscas locais. Em menos de 3 meses, o volume de clientes novos aumentou de forma expressiva.",
    name: "Cosmina V.",
    role: "Co-Fundadora @ Kooki",
    initials: "CV"
  },
  {
    quote: "Estratégia, criatividade e execução impecável. A gestão de social media da OPTCHA nos posicionou como referência no segmento. Resultados reais, comunicação transparente.",
    name: "Marina D.",
    role: "CEO @ RecruiterOne",
    initials: "MD"
  },
  {
    quote: "Nossa taxa de conversão aumentou 42% em dois meses com as campanhas da OPTCHA. Uma parceria que realmente entende o mercado de moda e entrega o que promete.",
    name: "Siavash J.",
    role: "Fundador @ Westgrowth",
    initials: "SJ"
  },
  {
    quote: "O novo site e a estratégia de tráfego aumentaram nosso alcance nacional em 180%. A OPTCHA é a parceira ideal para empresas que querem crescimento real e consistente.",
    name: "Andrei R.",
    role: "Fundador @ Twelve",
    initials: "AR"
  },
];

export function Testimonials() {
  return (
    <Section id="clientes" className="bg-[#121212] border-t border-[#e5e5e5]/10">
      <SectionHeader
        label="Clientes"
        title="Elas falam por nós"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e5e5]/10 border border-[#e5e5e5]/10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#121212] p-10 md:p-12 flex flex-col justify-between hover:bg-[#e50010]/[0.03] transition-colors"
          >
            <div className="text-[80px] text-[#e50010]/30 mb-5 font-serif leading-[0.6] pt-4">&quot;</div>
            
            <blockquote className="text-[14px] font-medium italic text-[#efefef]/65 leading-[1.8] mb-8 flex-1">
              {testimonial.quote}
            </blockquote>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-[#e50010] to-[#7b2ff7] flex items-center justify-center text-white font-bold font-serif text-[14px] flex-shrink-0">
                {testimonial.initials}
              </div>
              <div>
                <div className="font-semibold text-[#efefef] text-[14px] mb-0.5">{testimonial.name}</div>
                <div className="text-[#efefef]/40 text-[11px] tracking-[0.1em] uppercase">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
