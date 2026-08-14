'use client';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Workexperience from '@/components/sections/Workexperience';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  return (
    <main className="w-full bg-ink">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Workexperience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
