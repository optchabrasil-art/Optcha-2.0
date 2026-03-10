"use client";

import { motion } from "motion/react";
import { Section, SectionHeader } from "./ui/section";

export function Contact() {
  return (
    <Section id="contato" className="bg-[#0a0a0a] border-t border-white/5">
      <SectionHeader
        label="Contato"
        title="Pronta para começar?"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Form Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <p className="text-lg text-white/60 mb-4">
            Agende uma conversa gratuita e descubra como podemos posicionar sua marca no digital com estratégia e resultado.
          </p>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white/70">Nome*</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white/70">E-mail*</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm font-medium text-white/70">Empresa</label>
              <input
                type="text"
                id="company"
                className="bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Nome da sua empresa"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="text-sm font-medium text-white/70">Investimento mensal*</label>
              <select
                id="budget"
                required
                className="bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
              >
                <option value="" disabled selected className="text-white/30">Selecione uma opção</option>
                <option value="1">Até R$1.000</option>
                <option value="2">R$1.000–R$3.000</option>
                <option value="3">R$3.000–R$7.000</option>
                <option value="4">Acima de R$7.000</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-white/70">Como podemos ajudar?*</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Tráfego Pago", "Social Media", "Sites & Sistemas", "Google Meu Negócio"].map((service) => (
                  <label key={service} className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-[#111111] cursor-pointer hover:bg-[#161616] transition-colors">
                    <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-transparent text-white focus:ring-white/30 focus:ring-offset-0" />
                    <span className="text-sm text-white/80">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-white/70">Mensagem*</label>
              <textarea
                id="message"
                required
                rows={4}
                className="bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="Conte sobre o seu negócio e seus objetivos..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto mt-4 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group"
            >
              Enviar mensagem
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </form>
        </motion.div>

        {/* Booking Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-8 lg:pl-12 lg:border-l border-white/10"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">No sales pitch</h3>
            <p className="text-white/60 leading-relaxed mb-8">
              Agende uma reunião direta com nossos especialistas. Sem compromisso, apenas uma conversa honesta sobre como podemos ajudar sua marca a crescer.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="flex items-center justify-between p-6 rounded-xl border border-white/10 bg-[#111111] hover:bg-[#161616] transition-colors group"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-bold text-white">15 Min Meeting</span>
                  <span className="text-sm text-white/50">Quick chat to align goals</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-between p-6 rounded-xl border border-white/10 bg-[#111111] hover:bg-[#161616] transition-colors group"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-bold text-white">30 Min Meeting</span>
                  <span className="text-sm text-white/50">Deep dive into strategy</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-auto pt-12">
            <div className="flex flex-col gap-4 text-sm text-white/60">
              <a href="tel:+5511921414523" className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="text-xl">📞</span> (11) 9 2141-4523
              </a>
              <a href="mailto:optchabrasil@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="text-xl">✉️</span> optchabrasil@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span> São Paulo – SP
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
