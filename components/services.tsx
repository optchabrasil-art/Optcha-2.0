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
    <Section id="servicos" className="bg-[#0a0a0a] border-t border-white/5">
      <SectionHeader
        label="Soluções"
        title="Transformando ideias em resultados"
        linkText="Nossos serviços"
        linkHref="#servicos"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-[#111111] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col h-full hover:bg-[#161616] transition-colors duration-300"
          >
            <div className="text-4xl mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
              {service.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
              {service.title}
            </h3>
            
            <p className="text-white/60 leading-relaxed mb-8 flex-1">
              {service.description}
            </p>
            
            <ul className="space-y-3 mb-10">
              {service.list.map((item, i) => (
                <li key={i} className="flex items-start text-sm text-white/50">
                  <span className="mr-3 text-white/30 mt-0.5">✦</span>
                  {item}
                </li>
              ))}
            </ul>
            
            <a
              href="#contato"
              className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-white hover:text-white/80 transition-colors group/link mt-auto"
            >
              {service.linkText}
              <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
            </a>

            {/* Decorative SVG Shape */}
            <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
