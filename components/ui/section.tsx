import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerClassName?: string;
}

export function Section({ children, className, containerClassName, ...props }: SectionProps) {
  return (
    <section 
      className={cn("py-20 md:py-30 2xl:py-40 px-6 md:px-12 xl:px-20", className)} 
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
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
      <div className="max-w-3xl">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase border rounded-full border-white/10 text-white/70">
          {label}
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          {title}
        </h2>
      </div>
      {linkText && linkHref && (
        <a href={linkHref} className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group whitespace-nowrap">
          {linkText}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      )}
    </div>
  );
}
