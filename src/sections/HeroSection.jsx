"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import ProButton from '@/components/Button';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const HeroSection = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const isHomePage = pathname === '/';

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const plans = [
    {
      name: "Basic Plan",
      price: "4500",
      features: ["Gym Access", "Locker Room", "Free WiFi", "1 Hour Training"],
      recommended: false,
    },
    {
      name: "Premium Plan",
      price: "7500",
      features: ["All Basic Features", "Personal Trainer", "Diet Plan Included", "Sauna Access"],
      recommended: true,
    },
    {
      name: "Elite Plan",
      price: "12000",
      features: ["All Premium Features", "Yoga & CrossFit", "Massage Therapy", "Supplement Guide"],
      recommended: false,
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* --- SECTION 1: HERO SECTION --- */}
      <section className={`relative h-screen flex items-center overflow-hidden px-6 md:px-32 transition-colors duration-500 ${isHomePage ? 'bg-black' : 'bg-white dark:bg-black'}`}>
        
        {/* Background Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }} 
          animate={{ opacity: isHomePage ? 0.8 : (theme === 'dark' ? 0.7 : 0.4), scale: 1 }} 
          transition={{ duration: 2, ease: "easeOut" }} 
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/bg.png" 
            alt="Fitness" 
            fill 
            className="object-cover grayscale opacity-60 transition-all duration-1000 object-left" 
            priority 
          />
          <div className={`absolute inset-0 ${
            isHomePage || theme === 'dark' 
            ? 'bg-gradient-to-r from-black/20 via-black/60 to-black' 
            : 'bg-gradient-to-r from-white/20 via-white/60 to-white'
          }`} />
        </motion.div>

        {/* Floating Decorative Text */}
        <div className="absolute top-1/4 left-10 hidden lg:block opacity-5 pointer-events-none">
          <h2 className="text-[15rem] font-black italic text-white leading-none tracking-tighter uppercase">FIT</h2>
        </div>

        {/* Main Hero Content (Right Aligned) */}
        <div className="relative z-10 w-full md:ml-auto md:w-3/5 flex flex-col items-center md:items-end text-center md:text-right">
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#E1B12C] font-black uppercase tracking-[0.4em] text-xs mb-6"
          >
            Elite Fitness Training
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="space-y-1"
          >
            <h1 className={`text-5xl md:text-[90px] font-black italic uppercase leading-[0.8] tracking-tighter transition-colors ${isHomePage || theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #E1B12C' }}>TRANSFORM</span> <br /> 
              YOUR BODY
            </h1>
            
            <div className="flex items-center justify-center md:justify-end gap-4 py-6">
              <p className={`text-lg md:text-2xl font-black uppercase italic tracking-widest ${isHomePage || theme === 'dark' ? 'text-white/80' : 'text-gray-600'}`}>
                AND ELEVATE STRENGTH
              </p>
              <div className="h-[2px] w-20 bg-[#E1B12C] hidden md:block" />
            </div>
          </motion.div>

          <div className="mt-8">
            <ProButton 
              text="Start your journey now" 
              style="bg-[#E1B12C] text-black font-black italic uppercase text-lg py-5 px-12 shadow-[0_10px_30px_rgba(225,177,44,0.3)] hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto rounded-none"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="w-[2px] h-16 bg-gradient-to-b from-[#E1B12C] to-transparent" />
        </motion.div>
      </section>

      {/* --- SECTION 2: MEMBERSHIP PLANS --- */}
      <section className="py-24 bg-gray-50 dark:bg-[#0A0A0A] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#E1B12C] font-black uppercase tracking-[0.6em] text-[10px] mb-4">Membership Plans</p>
            <h2 className="text-4xl md:text-7xl font-black italic dark:text-white uppercase tracking-tighter leading-none">
              Choose Your <span className="text-[#E1B12C]">Limits</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 ${
                  plan.recommended 
                  ? "bg-[#111111] border-[#E1B12C] shadow-[0_20px_50px_rgba(225,177,44,0.15)] scale-105 z-10" 
                  : "bg-white dark:bg-[#161616] border-gray-100 dark:border-gray-800"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E1B12C] text-black text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-widest">
                    Best Value
                  </div>
                )}

                <h3 className={`text-2xl font-black italic uppercase mb-2 ${plan.recommended ? "text-[#E1B12C]" : "dark:text-white text-black"}`}>
                  {plan.name}
                </h3>
                
                <div className="my-8 flex items-baseline gap-1">
                  <span className={`text-5xl font-black ${plan.recommended ? "text-white" : "dark:text-white text-black"}`}>
                    Rs.{plan.price}
                  </span>
                  <span className="text-gray-500 font-bold text-sm uppercase">/ Month</span>
                </div>

                <ul className="space-y-5 mb-12">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tight">
                      <FaCheckCircle className="text-[#E1B12C] text-lg" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 rounded-none font-black italic uppercase transition-all duration-300 tracking-widest ${
                  plan.recommended 
                  ? "bg-[#E1B12C] text-black hover:bg-white" 
                  : "bg-gray-100 dark:bg-[#222222] text-gray-500 dark:text-gray-300 hover:bg-[#E1B12C] hover:text-black"
                }`}>
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .stroke-text {
          color: transparent;
          -webkit-text-stroke: 2px #E1B12C;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;