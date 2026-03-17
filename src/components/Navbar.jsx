"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <nav className="sticky top-0 z-[100] w-full transition-colors duration-500 bg-white dark:bg-[#2D2D2D] border-b border-gray-200 dark:border-gray-800 px-6 md:px-12 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* --- Animated Brand Logo --- */}
        <motion.div 
          onClick={toggleTheme} 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative w-12 h-12 md:w-14 md:h-14"
          >
            <Image 
              src="/images/fitness_logo.png" 
              alt="Fitness Pro" 
              fill 
              className="object-contain drop-shadow-[0_0_12px_rgba(225,177,44,0.4)]" 
            />
          </motion.div>
          
          <div className="flex flex-col">
            <h1 className="text-lg md:text-2xl font-black italic leading-none text-[#26211A] dark:text-white transition-colors">
              FITNESS <span className="text-[#E1B12C]">PRO</span>
            </h1>
            <p className="hidden sm:block text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400">
              Elite Training
            </p>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`}>
              <motion.span 
                whileHover={{ y: -2, color: "#E1B12C" }}
                className="text-xs font-bold uppercase tracking-widest text-[#26211A] dark:text-gray-300 cursor-pointer transition-colors"
              >
                {item}
              </motion.span>
            </Link>
          ))}
          <ThemeToggle />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#26211A] dark:bg-white text-white dark:text-black font-black uppercase italic px-6 py-2 rounded-lg text-xs hover:bg-[#E1B12C] dark:hover:bg-[#E1B12C] transition-all shadow-md"
          >
            Join Now
          </motion.button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-[#26211A] dark:text-white transition-transform active:scale-90">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#1A1A1A] overflow-hidden border-t border-gray-100 dark:border-gray-800 mt-4"
          >
            <div className="flex flex-col p-6 gap-6">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  <span className="text-sm font-bold uppercase tracking-widest text-[#26211A] dark:text-gray-300">
                    {item}
                  </span>
                </Link>
              ))}
              <button className="w-full bg-[#E1B12C] text-white font-black uppercase italic py-4 rounded-xl shadow-lg">
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;