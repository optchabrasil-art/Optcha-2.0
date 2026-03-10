"use client";

import { motion } from "motion/react";
import { Section, SectionHeader } from "./ui/section";

export function Contact() {
  return (
    <Section id="contato" className="bg-[#0e0e0e] border-t border-[#e5e5e5]/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <SectionHeader
            label="Contato"
            title="Pronta para começar?"
          />
          <p className="text-[15px] text-[#efefef]/55 mb-12 leading-[1.8] max-w-[480px]">
            Agende uma conversa gratuita e descubra como podemos posicionar sua marca no digital com estratégia e resultado.
          </p>

          <div className="flex flex-col gap-4">
            <a href="tel:+5511921414523" className="flex items-center gap-4 text-[15px] text-[#efefef]/70 hover:text-[#e50010] transition-colors group">
              <div className="w-10 h-10 border border-[#e5e5e5]/10 rounded-sm flex items-center justify-center text-[16px] group-hover:border-[#e50010] group-hover:bg-[#e50010]/[0.08] transition-all">📞</div>
              (11) 9 2141-4523
            </a>
            <a href="mailto:optchabrasil@gmail.com" className="flex items-center gap-4 text-[15px] text-[#efefef]/70 hover:text-[#e50010] transition-colors group">
              <div className="w-10 h-10 border border-[#e5e5e5]/10 rounded-sm flex items-center justify-center text-[16px] group-hover:border-[#e50010] group-hover:bg-[#e50010]/[0.08] transition-all">✉️</div>
              optchabrasil@gmail.com
            </a>
            <div className="flex items-center gap-4 text-[15px] text-[#efefef]/70 group">
              <div className="w-10 h-10 border border-[#e5e5e5]/10 rounded-sm flex items-center justify-center text-[16px]">📍</div>
              São Paulo – SP
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#efefef]/40">Nome*</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="bg-[#e5e5e5]/[0.03] border border-[#e5e5e5]/10 rounded-sm px-4 py-3.5 text-[#efefef] placeholder:text-[#efefef]/30 focus:outline-none focus:border-[#e50010] focus:bg-[#e50010]/[0.04] transition-colors text-[14px]"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#efefef]/40">E-mail*</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="bg-[#e5e5e5]/[0.03] border border-[#e5e5e5]/10 rounded-sm px-4 py-3.5 text-[#efefef] placeholder:text-[#efefef]/30 focus:outline-none focus:border-[#e50010] focus:bg-[#e50010]/[0.04] transition-colors text-[14px]"
                  placeholder="Seu e-mail"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="company" className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#efefef]/40">Empresa</label>
              <input
                type="text"
                id="company"
                className="bg-[#e5e5e5]/[0.03] border border-[#e5e5e5]/10 rounded-sm px-4 py-3.5 text-[#efefef] placeholder:text-[#efefef]/30 focus:outline-none focus:border-[#e50010] focus:bg-[#e50010]/[0.04] transition-colors text-[14px]"
                placeholder="Nome da sua empresa"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="budget" className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#efefef]/40">Investimento mensal*</label>
              <select
                id="budget"
                required
                className="bg-[#e5e5e5]/[0.03] border border-[#e5e5e5]/10 rounded-sm px-4 py-3.5 text-[#efefef] focus:outline-none focus:border-[#e50010] focus:bg-[#e50010]/[0.04] transition-colors text-[14px] appearance-none"
              >
                <option value="" disabled selected className="text-[#efefef]/30">Selecione uma faixa</option>
                <option value="1" className="bg-[#1a1a1a]">Até R$ 1.000</option>
                <option value="2" className="bg-[#1a1a1a]">R$ 1.000 – R$ 3.000</option>
                <option value="3" className="bg-[#1a1a1a]">R$ 3.000 – R$ 7.000</option>
                <option value="4" className="bg-[#1a1a1a]">Acima de R$ 7.000</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#efefef]/40">Como podemos ajudar?*</label>
              <div className="grid grid-cols-2 gap-2">
                {["Tráfego Pago", "Social Media", "Sites & Sistemas", "Google Meu Negócio"].map((service) => (
                  <label key={service} className="flex items-center justify-center text-center p-2.5 rounded-sm border border-[#e5e5e5]/10 bg-transparent cursor-pointer hover:bg-[#e50010]/10 hover:border-[#e50010] hover:text-[#e50010] transition-all text-[#efefef]/50 text-[12px] tracking-[0.1em] uppercase has-[:checked]:bg-[#e50010]/10 has-[:checked]:border-[#e50010] has-[:checked]:text-[#e50010]">
                    <input type="checkbox" className="hidden" />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mt-2">
              <label htmlFor="message" className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#efefef]/40">Mensagem*</label>
              <textarea
                id="message"
                required
                rows={4}
                className="bg-[#e5e5e5]/[0.03] border border-[#e5e5e5]/10 rounded-sm px-4 py-3.5 text-[#efefef] placeholder:text-[#efefef]/30 focus:outline-none focus:border-[#e50010] focus:bg-[#e50010]/[0.04] transition-colors text-[14px] resize-y min-h-[120px]"
                placeholder="Conte sobre o seu negócio e seus objetivos..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto mt-2 px-9 py-4.5 bg-[#e50010] text-white font-semibold tracking-[0.2em] uppercase text-[13px] rounded-sm hover:bg-[#ff1a2a] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
            >
              Enviar mensagem
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
