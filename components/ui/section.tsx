import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerClassName?: string;
}

export function Section({ children, className, containerClassName, ...props }: SectionProps) {
  return (
    <section 
      className={cn("py-24 md:py-32 px-6 md:px-16", className)} 
      {...props}
    >
      <div className={cn("max-w-[1280px] mx-auto", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ label, title, linkText, linkHref }: { label: string, title: string, linkText?: string, linkHref?: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-3 mb-5 text-[11px] font-bold tracking-[0.2em] uppercase text-[#e50010]">
          <span className="w-6 h-[1px] bg-[#e50010]"></span>
          {label}
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#efefef] font-serif leading-[1.05]">
          {title}
        </h2>
      </div>
      {linkText && linkHref && (
        <a href={linkHref} className="text-[#efefef]/70 hover:text-[#efefef] transition-colors flex items-center gap-2 group whitespace-nowrap text-xs tracking-widest uppercase font-semibold">
          {linkText}
          <span className="group-hover:translate-x-1 transition-transform text-[#e50010]">→</span>
        </a>
      )}
    </div>
  );
}
