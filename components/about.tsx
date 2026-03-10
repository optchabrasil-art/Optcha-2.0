"use client";

import { motion } from "motion/react";
import { Section, SectionHeader } from "./ui/section";

export function About() {
  return (
    <Section id="sobre" className="bg-[#0e0e0e] border-t border-b border-[#e5e5e5]/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div>
          <div className="inline-flex items-center gap-3 mb-5 text-[11px] font-bold tracking-[0.2em] uppercase text-[#e50010]">
            <span className="w-6 h-[1px] bg-[#e50010]"></span>
            Quem somos
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#efefef] font-serif mb-8 leading-[1.05]"
          >
            Feitas para <em className="text-[#e50010] not-italic">mover</em><br/>marcas
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] text-[#efefef]/65 leading-[1.9] mb-12 space-y-5"
          >
            <p>
              A <strong className="text-[#efefef] font-medium">OPTCHA</strong> é uma assessoria de posicionamento digital fundada e operada inteiramente por mulheres. São <strong className="text-[#efefef] font-medium">7 anos de mercado</strong>, mais de <strong className="text-[#efefef] font-medium">250 projetos entregues</strong> e crescimento comprovado de <strong className="text-[#efefef] font-medium">37% a nível nacional</strong>.
            </p>
            <p>
              Acreditamos que posicionamento digital não é sorte — é estratégia, consistência e dados. Nossa equipe une criatividade e performance para colocar sua marca exatamente onde o seu cliente está buscando.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e5e5e5]/10 border border-[#e5e5e5]/10 mt-12">
            {[
              { icon: "🎯", title: "Foco em resultado", desc: "Cada ação tem um objetivo mensurável. Sem achismo, apenas dados." },
              { icon: "💡", title: "Estratégia personalizada", desc: "Nenhuma marca é igual. Sua estratégia também não pode ser." },
              { icon: "🤝", title: "Parceria real", desc: "Comunicação aberta em cada etapa. Você sabe tudo que acontece." },
              { icon: "⚡", title: "Execução ágil", desc: "Velocidade sem perder qualidade. Entregamos no prazo, sempre." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="bg-[#0e0e0e] p-6 md:p-7 hover:bg-[#e50010]/[0.04] transition-colors"
              >
                <div className="text-xl mb-3">{item.icon}</div>
                <h3 className="text-[14px] font-semibold text-[#efefef] mb-1.5">{item.title}</h3>
                <p className="text-[#efefef]/45 text-[13px] leading-[1.6]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-10 md:p-12 border border-[#e5e5e5]/10 bg-[#e50010]/[0.03]"
        >
          <div className="absolute top-[-1px] left-10 right-10 h-[3px] bg-[#e50010]" />
          
          <blockquote className="font-serif text-[28px] italic leading-[1.5] text-[#efefef] mb-8">
            &quot;Posicionamento digital não é sobre estar em todo lugar — é sobre estar no <span className="text-[#e50010]">lugar certo</span>.&quot;
          </blockquote>

          <div className="grid grid-cols-2 gap-6">
            {[
              { num: "250+", label: "Projetos Entregues" },
              { num: "7+", label: "Anos de Experiência" },
              { num: "37%", label: "Crescimento Nacional" },
              { num: "100%", label: "Equipe Feminina" }
            ].map((stat, i) => (
              <div key={i} className="text-left">
                <div className="font-serif text-[44px] font-black text-[#e50010] leading-none mb-1">{stat.num}</div>
                <div className="text-[12px] uppercase tracking-[0.15em] text-[#efefef]/45">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
