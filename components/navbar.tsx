"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Serviços", href: "#servicos" },
  { name: "Clientes", href: "#clientes" },
  { name: "Fale com a gente", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        scrolled
          ? "bg-[#121212]/90 backdrop-blur-md border-b border-[#e5e5e5]/10 py-5"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-[0.15em] text-[#efefef] font-serif">
          OPT<span className="text-[#e50010]">CH</span>A
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-[13px] font-medium tracking-[0.1em] uppercase transition-colors",
                link.name === "Fale com a gente" 
                  ? "bg-[#e50010] text-white px-6 py-2.5 rounded-sm hover:bg-[#ff1a2a]"
                  : "text-[#efefef]/60 hover:text-[#efefef]"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden text-[#efefef]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#121212] border-b border-[#e5e5e5]/10 p-6 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg text-[#efefef]/80 hover:text-[#efefef] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
