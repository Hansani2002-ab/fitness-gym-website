"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full transition-all duration-500 bg-white dark:bg-[#262626] border-b border-gray-200 dark:border-white/5 px-6 md:px-12 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* --- Brand Logo --- */}
        <Link href="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image 
                src="/images/fitness_logo.png" 
                alt="Fitness Pro" 
                fill 
                className="object-contain drop-shadow-[0_0_15px_rgba(225,177,44,0.3)]" 
              />
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-black italic leading-none tracking-tighter text-[#26211A] dark:text-white">
                FITNESS <span className="text-[#E1B12C]">PRO</span>
              </h1>
              <p className="hidden sm:block text-[8px] font-black tracking-[0.3em] uppercase text-gray-400">
                Elite Training
              </p>
            </div>
          </motion.div>
        </Link>

        {/* --- Desktop Menu with Animated Underline --- */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <Link key={item.name} href={item.path} className="relative group py-2">
                <motion.span 
                  whileHover={{ y: -1 }}
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer ${
                    isActive 
                      ? 'text-[#E1B12C]' 
                      : 'text-[#26211A] dark:text-gray-400 group-hover:text-[#E1B12C] dark:group-hover:text-[#E1B12C]'
                  }`}
                >
                  {item.name}
                </motion.span>

                {/* Hover Underline Animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-[#E1B12C] w-0 group-hover:w-full transition-all duration-300"
                  initial={false}
                />
                
                {/* Active Page Underline */}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 h-[2px] bg-[#E1B12C] w-full"
                  />
                )}
              </Link>
            );
          })}
          
          <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-800 mx-2" />
          
          <div className="flex items-center gap-6">
            <ThemeToggle />
            
            {/* --- Fixed Join Now Button (Light & Dark compatible) --- */}
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#E1B12C", color: "#000", borderColor: "#E1B12C" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#26211A] dark:bg-transparent border-2 border-[#26211A] dark:border-white text-white dark:text-white font-black uppercase italic px-7 py-2.5 rounded-full text-[10px] tracking-widest transition-all shadow-xl"
            >
              Join Now
            </motion.button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-[#26211A] text-[#26211A] dark:text-white"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-[#262626] border-b border-gray-100 dark:border-white/5 shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navItems.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item.name}
                >
                  <Link href={item.path} onClick={() => setIsOpen(false)}>
                    <span className={`text-sm font-black uppercase tracking-widest ${
                      pathname === item.path ? 'text-[#E1B12C]' : 'text-[#26211A] dark:text-gray-400'
                    }`}>
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <button className="w-full bg-[#E1B12C] text-black font-black uppercase italic py-4 rounded-xl shadow-lg mt-2">
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