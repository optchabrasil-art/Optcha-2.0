"use client";

import { motion } from "motion/react";
import { Section, SectionHeader } from "./ui/section";

const services = [
  {
    title: "Tráfego Pago",
    icon: "📈",
    description: "Campanhas inteligentes que capturam o público certo, no momento certo. Do Google ao Meta, cada real investido é monitorado para gerar o máximo retorno para o seu negócio.",
    list: [
      "Google Ads & YouTube",
      "Meta Ads (Instagram & Facebook)",
      "Remarketing & Retargeting",
      "Campanhas de conversão",
      "Relatórios de performance",
    ],
    linkText: "Quero mais tráfego",
  },
  {
    title: "Social Media",
    icon: "📱",
    description: "Gerenciamos sua presença com estratégia, consistência e criatividade. Conteúdos que engajam, educam e convertem — sempre alinhados à sua identidade de marca e objetivos.",
    list: [
      "Gestão de redes sociais",
      "Criação de conteúdo",
      "Design para social",
      "Calendário editorial",
      "Identidade visual digital",
    ],
    linkText: "Quero crescer nas redes",
  },
  {
    title: "Sites & Sistemas",
    icon: "💻",
    description: "Sites e sistemas que transformam visitantes em clientes. Alta performance, design estratégico e tecnologia escalável para crescer junto com o seu negócio.",
    list: [
      "Desenvolvimento web",
      "Landing pages de conversão",
      "WordPress & plataformas",
      "Sistemas personalizados",
      "Redesign e otimização",
    ],
    linkText: "Quero um site profissional",
  },
  {
    title: "Google Meu Negócio",
    icon: "📍",
    description: "Colocamos sua empresa no mapa — literalmente. Otimizamos seu perfil para aumentar visibilidade local, atrair mais clientes na sua região e fortalecer sua reputação digital.",
    list: [
      "Otimização do perfil GMB",
      "SEO local estratégico",
      "Gestão de avaliações",
      "Fotos e conteúdo local",
      "Relatórios de visibilidade",
    ],
    linkText: "Quero ser encontrado",
  },
];

export function Services() {
  return (
    <Section id="servicos" className="bg-[#121212] border-t border-[#e5e5e5]/10">
      <SectionHeader
        label="Soluções"
        title="Transformando ideias em resultados"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e5e5e5]/10 border border-[#e5e5e5]/10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-[#121212] p-12 md:p-14 flex flex-col h-full hover:bg-[#e50010]/[0.03] transition-colors duration-400"
          >
            <div className="absolute top-[-20px] right-5 font-serif text-[120px] font-black text-[#efefef]/[0.025] leading-none pointer-events-none">
              0{index + 1}
            </div>

            <div className="text-[28px] mb-6 relative z-10">
              {service.icon}
            </div>
            
            <h3 className="font-serif text-[32px] font-bold text-[#efefef] mb-4 leading-[1.1] relative z-10">
              {service.title}
            </h3>
            
            <p className="text-[15px] text-[#efefef]/55 leading-[1.8] mb-8 flex-1 relative z-10">
              {service.description}
            </p>
            
            <ul className="space-y-2 mb-9 relative z-10">
              {service.list.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[13px] text-[#efefef]/60">
                  <span className="w-1 h-1 bg-[#e50010] rounded-full flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            
            <a
              href="#contato"
              className="inline-flex items-center text-[12px] font-semibold tracking-[0.2em] uppercase text-[#e50010] hover:gap-4 transition-all group/link mt-auto relative z-10"
            >
              {service.linkText}
              <span className="ml-2">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
