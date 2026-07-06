import { Navbar } from "@/app/components/Navbar";
import { About } from "@/app/sections/About";
import { Academic } from "@/app/sections/Academic";
import { Contact } from "@/app/sections/Contact";
import { Footer } from "@/app/sections/Footer";
import { Hero } from "@/app/sections/Hero";
import { Process } from "@/app/sections/Process";
import { Projects } from "@/app/sections/Projects";
import { Services } from "@/app/sections/Services";
import { Skills } from "@/app/sections/Skills";
import { Testimonials } from "@/app/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Academic />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
