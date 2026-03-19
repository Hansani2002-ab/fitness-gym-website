"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socials = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaTiktok />, link: "https://tiktok.com" }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  if (!mounted) {
    return <footer className="bg-white dark:bg-[#111111] py-20 border-t border-gray-100 dark:border-gray-800" />;
  }

  return (
    <footer className="relative bg-white dark:bg-[#111111] py-20 px-6 md:px-12 border-t border-gray-100 dark:border-gray-800 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E1B12C] opacity-[0.02] blur-[120px] pointer-events-none rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16"
      >
        
        {/* 1. Contact Info Column */}
        <div className="flex flex-col items-center md:items-start space-y-7">
          <h4 className="text-[#26211A] dark:text-white font-black uppercase tracking-[0.2em] text-sm">
            Reach Us
          </h4>
          <div className="space-y-5">
            {[
              { icon: <FaMapMarkerAlt />, text: "2nd Floor, Marine Building, Malabe" },
              { icon: <FaPhoneAlt />, text: "+94 772234563" },
              { icon: <FaEnvelope />, text: "fitpro@gmail.com" }
            ].map((item, idx) => (
              <motion.div 
                whileHover={{ x: 10 }}
                key={idx} 
                className="flex items-center gap-4 group cursor-default"
              >
                <div className="text-[#E1B12C] text-xl transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold transition-colors group-hover:text-[#E1B12C]">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Navigation Links Column */}
        <div className="flex flex-col items-center">
          <h4 className="text-[#26211A] dark:text-white font-black uppercase tracking-[0.2em] text-sm mb-10 underline decoration-[#E1B12C] decoration-4 underline-offset-[12px]">
            Navigation
          </h4>
          <ul className="space-y-5 text-center">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <motion.a 
                  href={link.href}
                  whileHover={{ letterSpacing: "0.3em", color: "#E1B12C" }}
                  className="text-gray-400 dark:text-gray-500 font-bold uppercase text-[11px] tracking-[0.25em] transition-all duration-300 block"
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Brand & Socials Column */}
        <div className="flex flex-col items-center md:items-end justify-between">
          <div className="text-center md:text-right">
            <h2 className="font-black italic text-4xl text-[#26211A] dark:text-white leading-none">
              FITNESS <span className="text-[#E1B12C]">PRO</span>
            </h2>
            <p className="text-[10px] tracking-[0.5em] uppercase font-black text-gray-300 dark:text-gray-700 mt-3">
              Elite Training Hub
            </p>
            
            {/* Social Icons - Updated to match image_ed90ca.png */}
            <div className="flex gap-4 mt-10 justify-center md:justify-end">
              {socials.map((soc, i) => (
                <motion.a
                  key={i}
                  whileHover={{ 
                    y: -8, 
                    backgroundColor: "#E1B12C", 
                    color: "#000",
                    borderColor: "#E1B12C"
                  }}
                  href={soc.link}
                  className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-black dark:text-white bg-transparent transition-all duration-300"
                >
                  <span className="text-xl">{soc.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
          
          <p className="text-[9px] text-gray-400 uppercase mt-12 tracking-[0.2em] font-bold opacity-40">
            © {new Date().getFullYear()} FitPro Fitness. All Rights Reserved.
          </p>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;