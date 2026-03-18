
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection'; 

import ContactSection from '@/sections/ContactSection';
import ServiceSection from '@/sections/ServicesSection';


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#161616] transition-colors duration-500">
      

      {/* 1. Hero Section - id="home"  */}
      <section id="home">
        <HeroSection />
      </section>

       {/* 1. Services Section - id="services"  */}
      <section id="services">
        <ServiceSection />
      </section>

      {/* 2. About Section - id="about" */}
      <section id="about" className="py-20">
        <AboutSection />
      </section>

      
   

      {/* 4. Contact Section - id="contact" (Evaluation requirement) */}
      <section id="contact" className="py-20">
        <ContactSection />
      </section>

     
    </main>
  );
}