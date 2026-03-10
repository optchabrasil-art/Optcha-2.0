"use client";

import { motion } from "motion/react";
import { Section } from "./ui/section";

export function About() {
  return (
    <Section id="sobre" className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[860px] mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block px-3 py-1 mb-12 text-xs font-semibold tracking-widest uppercase border rounded-full border-white/10 text-white/70"
        >
          Quem somos
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8"
        >
          Feitas para mover marcas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 leading-relaxed mb-12"
        >
          A OPTCHA é uma assessoria de posicionamento digital fundada e operada inteiramente por mulheres. São 7 anos de mercado, mais de 250 projetos entregues e crescimento comprovado de 37% a nível nacional.
          <br /><br />
          Acreditamos que posicionamento digital não é sorte — é estratégia, consistência e dados. Nossa equipe une criatividade e performance para colocar sua marca exatamente onde o seu cliente está buscando.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left w-full mb-20">
          {[
            {
              icon: "🎯",
              title: "Foco em resultado",
              desc: "Cada ação tem um objetivo mensurável. Sem achismo, apenas dados.",
            },
            {
              icon: "💡",
              title: "Estratégia personalizada",
              desc: "Nenhuma marca é igual. Sua estratégia também não pode ser.",
            },
            {
              icon: "🤝",
              title: "Parceria real",
              desc: "Comunicação aberta em cada etapa. Você sabe tudo que acontece.",
            },
            {
              icon: "⚡",
              title: "Execução ágil",
              desc: "Velocidade sem perder qualidade. Entregamos no prazo, sempre.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="bg-[#111111] p-6 rounded-2xl border border-white/5"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full py-16 px-8 md:px-16 bg-[#161616] rounded-3xl border border-white/10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
          <blockquote className="relative z-10 text-2xl md:text-4xl font-semibold italic text-white/90 leading-tight">
            &quot;Posicionamento digital não é sobre estar em todo lugar — é sobre estar no lugar certo.&quot;
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 text-xs font-bold tracking-widest uppercase text-white/50"
        >
          <span>250+ Projetos Entregues</span>
          <span className="hidden md:inline">•</span>
          <span>7+ Anos de Experiência</span>
          <span className="hidden md:inline">•</span>
          <span>37% Crescimento Nacional</span>
          <span className="hidden md:inline">•</span>
          <span>100% Equipe Feminina</span>
        </motion.div>
      </div>
    </Section>
  );
}
