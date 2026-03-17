"use client";

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  const socials = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaTiktok />, link: "#" }
  ];

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <footer className="transition-colors duration-500 bg-white dark:bg-[#2D2D2D] py-16 px-6 md:px-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        
        <div className="flex flex-col items-center md:items-start space-y-6">
          {[
            { icon: <FaMapMarkerAlt />, text: "2nd Floor, Marine Building, Malabe, Sri Lanka" },
            { icon: <FaPhoneAlt />, text: "+94 772234563" },
            { icon: <FaEnvelope />, text: "fitpro@gmail.com" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
              <div className="text-[#E1B12C] text-xl md:text-2xl">{item.icon}</div>
              <p className="text-sm md:text-base font-medium leading-relaxed text-[#26211A] dark:text-gray-300 transition-colors">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        
        <div className="flex flex-col items-center">
          <h4 className="font-black uppercase tracking-[0.2em] mb-8 underline decoration-[#E1B12C] decoration-4 underline-offset-8 text-[#26211A] dark:text-white text-lg">
            Quick Links
          </h4>
          <ul className="space-y-4 text-center">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-[#E1B12C] transition-all duration-300 font-bold uppercase text-xs md:text-sm tracking-widest text-gray-500 dark:text-gray-400 block py-1"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="flex flex-col items-center md:items-end justify-between h-full space-y-8 md:space-y-0">
          <div className="text-center md:text-right">
             <h2 className="font-black uppercase italic text-3xl md:text-4xl text-[#26211A] dark:text-white tracking-tighter">
               FITNESS <span className="text-[#E1B12C]">PRO</span>
             </h2>
             <p className="text-[10px] md:text-xs mt-2 tracking-[0.3em] uppercase font-black text-gray-400 dark:text-gray-500">
               Elevate your strength
             </p>
             
             {/* Social Icons Container */}
             <div className="flex gap-4 mt-8 justify-center md:justify-end">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -5, scale: 1.1, backgroundColor: "#E1B12C", color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                    href={social.link}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all border bg-gray-50 dark:bg-[#1A1A1A] text-[#26211A] dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-[#E1B12C]"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.a>
                ))}
             </div>
          </div>
          
          {/* Copyright */}
          <p className="text-[10px] md:text-[11px] mt-6 md:mt-10 opacity-60 uppercase tracking-[0.15em] font-bold text-gray-500 dark:text-gray-400 text-center md:text-right">
            © {new Date().getFullYear()} FitPro Fitness Center. <br className="md:hidden" /> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;