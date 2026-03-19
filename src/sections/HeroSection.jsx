"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ProButton from '@/components/Button';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const HeroSection = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: mounted ? targetRef : undefined,
    offset: ["start start", "end start"],
  });

  const smoothY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), {
    stiffness: 100,
    damping: 30
  });

  const opacityVal = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgTextX = useTransform(scrollYProgress, [0, 1], [0, -150]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen bg-black" />;

  const isHomePage = pathname === '/';

  const plans = [
    { name: "Basic Plan", price: "4500", features: ["Gym Access", "Locker Room", "Free WiFi", "1 Hour Training"], recommended: false },
    { name: "Premium Plan", price: "7500", features: ["All Basic Features", "Personal Trainer", "Diet Plan Included", "Sauna Access"], recommended: true },
    { name: "Elite Plan", price: "12000", features: ["All Premium Features", "Yoga & CrossFit", "Massage Therapy", "Supplement Guide"], recommended: false }
  ];

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    })
  };

  return (
    <div className="overflow-x-hidden" ref={targetRef}>
      {/* --- SECTION 1: HERO SECTION --- */}
      <section className={`relative h-screen flex items-center overflow-hidden transition-colors duration-500 ${isHomePage ? 'bg-black' : 'bg-white dark:bg-black'}`}>
        
        {/* IMPROVED: High Visibility Background Scrolling Text */}
        <div className="absolute inset-0 flex items-center whitespace-nowrap pointer-events-none z-0">
          <motion.div 
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="text-[12rem] md:text-[22rem] font-black italic uppercase flex gap-20 opacity-[0.12]" 
            style={{ 
              WebkitTextStroke: theme === 'dark' ? "3px rgba(255, 255, 255, 0.4)" : "3px rgba(0, 0, 0, 0.15)", 
              color: "transparent"
            }}
          >
            <span>FITNESS PRO</span>
            <span>FITNESS PRO</span>
            <span>FITNESS PRO</span>
          </motion.div>
        </div>

        {/* LEFT SIDE: Animated Image Container */}
        <div className="absolute inset-0 z-0 flex items-center justify-start pointer-events-none">
          <motion.div 
            style={{ y: smoothY, opacity: opacityVal }}
            className="relative w-full h-full flex items-center justify-start pl-4 md:pl-20 lg:pl-32"
          >
            <motion.div
              initial={{ x: -100, opacity: 0, filter: "blur(20px)", scale: 1.1 }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="relative h-[70vh] md:h-[85vh] w-[80vw] md:w-[45vw] min-w-[320px] max-w-[600px]"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full relative"
              >
                <Image 
                  src="/images/bg.png" 
                  alt="Fitness Training" 
                  fill 
                  className="object-contain object-left drop-shadow-[0_0_50px_rgba(225,177,44,0.2)]" 
                  priority 
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Decorative Text (Parallax) */}
        <motion.div 
          style={{ x: bgTextX }}
          className="absolute top-1/4 left-10 hidden lg:block opacity-[0.05] pointer-events-none z-0"
        >
          <h2 className="text-[20rem] font-black italic text-white leading-none tracking-tighter uppercase">FIT</h2>
        </motion.div>

        {/* RIGHT SIDE: Main Content */}
        <div className="container mx-auto px-6 md:px-32 relative z-10 flex flex-col items-center md:items-end text-center md:text-right">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[#E1B12C] font-black uppercase text-[10px] md:text-xs mb-4 tracking-[0.5em]"
            >
              ELITHE FITNESS TRAINING
            </motion.p>

            <h1 className="text-5xl md:text-[90px] font-black italic uppercase leading-[0.85] tracking-tighter mb-6 text-white overflow-hidden">
              <motion.span 
                custom={1}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className="inline-block text-transparent stroke-text"
              >
                TRANSFORM
              </motion.span> <br /> 
              <motion.span
                custom={2}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className="inline-block"
              >
                YOUR BODY
              </motion.span>
            </h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center justify-center md:justify-end gap-4 mb-10"
            >
              <p className="text-white/80 text-lg md:text-xl font-bold uppercase tracking-widest">
                AND ELEVATE STRENGTH
              </p>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="h-[2px] bg-[#E1B12C] hidden md:block" 
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group inline-block"
            >
              <div className="absolute -inset-1 bg-[#E1B12C] rounded-none blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <ProButton 
                text="START YOUR JOURNEY NOW" 
                style="bg-[#E1B12C] text-black font-black italic uppercase text-lg py-5 px-12 relative z-10 shadow-2xl hover:bg-white transition-all duration-300 rounded-none"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <motion.div 
            animate={{ height: [40, 80, 40], opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="w-[1px] bg-[#E1B12C]" 
          />
        </div>
      </section>

      {/* --- SECTION 2: MEMBERSHIP PLANS --- */}
      <section className="py-24 bg-gray-50 dark:bg-[#0A0A0A] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#E1B12C] font-black uppercase tracking-[0.6em] text-[10px] mb-4"
            >
              Membership Plans
            </motion.p>
            <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-10 text-black dark:text-white">
              <span className="text-transparent stroke-text-thin">CHOOSE YOUR </span>
              <span className="text-[#E1B12C]"> LIMITS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15, transition: { duration: 0.4, ease: "easeOut" } }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 group ${
                  plan.recommended 
                  ? "bg-[#111111] border-[#E1B12C] shadow-[0_25px_60px_rgba(225,177,44,0.15)] scale-105 z-10" 
                  : "bg-white dark:bg-[#161616] border-gray-100 dark:border-gray-800 hover:border-[#E1B12C]/50"
                }`}
              >
                {plan.recommended && (
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E1B12C] text-black text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em]"
                  >
                    Best Value
                  </motion.div>
                )}
                <h3 className={`text-2xl font-black italic uppercase mb-2 ${plan.recommended ? "text-[#E1B12C]" : "dark:text-white text-black"}`}>{plan.name}</h3>
                <div className="my-8 flex items-baseline gap-1">
                  <span className={`text-5xl font-black ${plan.recommended ? "text-white" : "dark:text-white text-black"}`}>Rs.{plan.price}</span>
                  <span className="text-gray-500 font-bold text-sm uppercase">/ Month</span>
                </div>
                <ul className="space-y-5 mb-12">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      whileInView={{ x: [0, 5, 0] }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-center gap-3 text-sm font-bold text-gray-400 uppercase tracking-tight"
                    >
                      <FaCheckCircle className="text-[#E1B12C] text-lg" /> {feature}
                    </motion.li>
                  ))}
                </ul>
                <button className={`w-full py-5 rounded-none font-black italic uppercase transition-all duration-300 tracking-widest ${
                  plan.recommended ? "bg-[#E1B12C] text-black hover:bg-white" : "bg-gray-100 dark:bg-[#222222] text-gray-500 dark:text-gray-300 hover:bg-[#E1B12C] hover:text-black"
                }`}>Select Plan</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .stroke-text { -webkit-text-stroke: 2px #E1B12C; }
        .stroke-text-thin { -webkit-text-stroke: 1px ${theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.3)'}; color: transparent; }
      `}</style>
    </div>
  );
};

export default HeroSection;