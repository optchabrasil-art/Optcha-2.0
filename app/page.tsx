import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Portfolio } from "@/components/portfolio";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Marquee />
      <Portfolio />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
