"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import ProButton from '@/components/Button';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const isHomePage = pathname === '/';

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className={`relative h-screen flex items-center overflow-hidden px-6 md:px-32 transition-colors duration-500 ${isHomePage ? 'bg-black' : 'bg-white dark:bg-black'}`}>
      
      {/* Background Image Container */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isHomePage ? 0.7 : (theme === 'dark' ? 0.7 : 0.4) }} transition={{ duration: 1.2 }} className="absolute inset-0 z-0">
        <Image src="/images/bg.png" alt="Fitness" fill className="object-cover grayscale opacity-50 md:opacity-100" priority />
        <div className={`absolute inset-0 ${isHomePage || theme === 'dark' ? 'bg-black/60 md:bg-transparent md:bg-gradient-to-r md:from-black/60 md:to-black/90' : 'bg-white/60 md:bg-transparent md:bg-gradient-to-r md:from-white/60 md:to-white/80'}`} />
      </motion.div>

      {/* Content Container - Centered on mobile, right-aligned on desktop */}
      <div className="relative z-10 w-full md:ml-auto md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-4">
          <h1 className={`text-4xl md:text-6xl font-black italic uppercase leading-tight transition-colors ${isHomePage || theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <span className="text-[#E1B12C]">Transform</span> <br /> your body
          </h1>
          <p className={`text-lg md:text-2xl font-bold uppercase italic ${isHomePage || theme === 'dark' ? 'text-white/90' : 'text-gray-700'}`}>AND</p>
          <h1 className={`text-4xl md:text-6xl font-black italic uppercase leading-tight transition-colors ${isHomePage || theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Elevate <br /> your strength
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-10 w-full md:w-auto">
          <ProButton text="Start your journey now" style="bg-[#E1B12C] text-black text-lg py-4 px-10 shadow-lg hover:bg-[#c99c21] w-full md:w-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;