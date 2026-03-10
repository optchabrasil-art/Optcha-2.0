"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Section, SectionHeader } from "./ui/section";

const testimonials = [
  {
    quote: "A OPTCHA cuidou do nosso Google Meu Negócio e do social media do Divino Sabor, e a diferença foi imediata. Nosso restaurante passou a aparecer nas buscas da região, as avaliações cresceram e o movimento aumentou visivelmente. Parceria de verdade!",
    name: "Rosivania & Eloi",
    role: "Proprietários @ Divino Sabor Bar e Restaurante",
    avatar: "https://picsum.photos/seed/divino/100/100",
  },
  {
    quote: "Precisávamos de um site profissional e de presença no Google para a Epimero. A OPTCHA entregou os dois com qualidade e agilidade. Hoje somos encontrados com facilidade por novos clientes e a credibilidade da nossa empresa cresceu muito.",
    name: "Caique",
    role: "Proprietário @ Epimero Equipamentos",
    avatar: "https://picsum.photos/seed/epimero/100/100",
  },
  {
    quote: "A OPTCHA criou nosso cardápio digital e assumiu o social media da Flor da Pavão. O resultado foi uma comunicação muito mais profissional, clientes comentando sobre as redes e um cardápio lindo e fácil de compartilhar no WhatsApp. Recomendo demais!",
    name: "Reinaldo",
    role: "Proprietário @ Flor da Pavão",
    avatar: "https://picsum.photos/seed/flor/100/100",
  },
];

export function Testimonials() {
  return (
    <Section id="clientes" className="bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <SectionHeader
        label="Clientes"
        title="Nossos clientes falam por nós"
        linkText="Hear more stories"
        linkHref="#clientes"
      />

      <div className="flex overflow-x-auto pb-12 -mx-6 px-6 md:-mx-12 md:px-12 xl:-mx-20 xl:px-20 snap-x snap-mandatory scrollbar-hide gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] snap-center bg-[#111111] border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col justify-between"
          >
            <div className="text-4xl text-white/20 mb-6">&quot;</div>
            
            <blockquote className="text-lg md:text-xl font-medium italic text-white/80 leading-relaxed mb-12 flex-1">
              {testimonial.quote}
            </blockquote>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-bold text-white text-sm">{testimonial.name}</div>
                <div className="text-white/50 text-xs mt-0.5">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
