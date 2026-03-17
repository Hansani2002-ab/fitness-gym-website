// src/app/page.js
import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/HeroSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      

      {/* Hero Section */}
      <HeroSection />

      {/* <AboutSection /> */}
      {/* <ServicesSection /> */}
      {/* <ContactSection /> */}
      
      
    </main>
  );
}