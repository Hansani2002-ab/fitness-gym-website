"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaDumbbell, FaAppleAlt, FaUsers, FaHeartbeat, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    { icon: <FaDumbbell />, title: "Modern equipment", desc: "Our gym is equipped with the latest state-of-the-art fitness machines and technology." },
    { icon: <FaAppleAlt />, title: "Healthy nutrition plan", desc: "We go beyond the gym floor. With Fitness Pro meal plans, you'll get nutritious guidance." },
    { icon: <FaUsers />, title: "Professional training plan", desc: "Our certified trainers create structured, results-driven programs just for you." },
    { icon: <FaHeartbeat />, title: "Unique to your needs", desc: "Your fitness journey is personal, and so is our approach. We craft plans to match your goals." },
  ];

  const stats = [
    { label: "Body building", value: "80%" },
    { label: "Training", value: "85%" },
    { label: "Fitness", value: "75%" },
  ];

  // අර Screenshot එකේ විදිහට Trainer data ටික
  const trainers = [
    { name: "Matt", role: "GYM TRAINER", image: "/images/matt.jpg" },
    { name: "Rosy", role: "FITNESS COACH", image: "/images/rosy.jpg" },
    { name: "Sofia", role: "BODYBUILDING EXPERT", image: "/images/sofia.jpg" },
  ];

  return (
    <div className="bg-white dark:bg-[#0A0A0A] transition-colors duration-500 overflow-hidden">
      
      {/* --- Section 1: Hero Header --- */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/fitness.jpg" 
          alt="About Us"
          fill
          className="object-cover brightness-[0.3] scale-105"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black italic text-white uppercase tracking-tighter"
          >
            About <span className="text-[#E1B12C]">Us</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 mt-6 text-[11px] font-bold uppercase tracking-[0.5em]"
          >
            <Link href="/" className="text-gray-400 hover:text-[#E1B12C] transition-colors">Home</Link>
            <span className="text-[#E1B12C]">/</span>
            <span className="text-white">About</span>
          </motion.div>
        </div>
      </div>

      {/* --- Section 2: Features --- */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#E1B12C] font-black uppercase text-[10px] tracking-[0.6em] mb-4"
          >
            Why Choose Us?
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-7xl font-black italic dark:text-white uppercase tracking-tighter leading-none"
          >
            Push Your Limits <span className="text-[#E1B12C]">Forward</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group p-8 rounded-[2rem] hover:bg-gray-50 dark:hover:bg-[#111111] transition-all duration-500"
            >
              <div className="w-20 h-20 bg-[#1A1A1A] rounded-full flex items-center justify-center text-[#E1B12C] text-3xl mx-auto mb-8 shadow-2xl group-hover:bg-[#E1B12C] group-hover:text-black transition-all duration-500">
                {f.icon}
              </div>
              <h4 className="text-xl font-black italic dark:text-white uppercase mb-4 tracking-tight">{f.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Section 3: Achievement & Stats --- */}
      <section className="bg-gray-50 dark:bg-[#0F0F0F] py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[500px] h-[450px] md:h-[550px] overflow-hidden rounded-[3rem] shadow-2xl border-[10px] border-white dark:border-[#1A1A1A]">
              <Image 
                src="/images/cardio.jpg" 
                alt="Training"
                fill
                className="object-cover hover:scale-110 transition-transform duration-1000"
              />
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <p className="text-[#E1B12C] font-black uppercase text-[10px] tracking-[0.5em] mb-4">Our Achievement</p>
            <h2 className="text-4xl md:text-6xl font-black italic dark:text-white uppercase tracking-tighter leading-none mb-8">
              What We Have <span className="text-[#E1B12C]">Done</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-12 leading-relaxed text-lg">
              Fitness Pro transformed lives through expert training. We build a community where goals are achieved and limits are broken.
            </p>

            <div className="space-y-10">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-black italic dark:text-white uppercase text-xs tracking-[0.2em]">{s.label}</span>
                    <span className="text-[#E1B12C] font-black italic text-xl">{s.value}</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: s.value }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full bg-[#E1B12C]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Trainer Section --- */}
      <section className="py-24 px-6 bg-white dark:bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#E1B12C] font-black uppercase text-[10px] tracking-[0.6em] mb-4"
            >
              Expert Team
            </motion.p>
            <h2 className="text-4xl md:text-7xl font-black italic dark:text-white uppercase tracking-tighter leading-none">
              Train With <span className="text-[#E1B12C]">Experts</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="group relative cursor-pointer"
              >
                <div className="relative h-[500px] overflow-hidden rounded-sm">
                  <Image 
                    src={trainer.image} 
                    alt={trainer.name}
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  
                  {/* Black Info Box (As per Screenshot) */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/95 p-8 text-center translate-y-2 group-hover:translate-y-0 transition-all duration-500 border-t border-[#E1B12C]/30">
                    <h3 className="text-3xl font-black italic uppercase text-white tracking-tight">
                      {trainer.name}
                    </h3>
                    <p className="text-[#E1B12C] text-xs font-bold mt-2 tracking-[0.3em]">
                      {trainer.role}
                    </p>
                    
                    {/* Social Icons on Hover */}
                    <div className="flex justify-center gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                      <FaInstagram className="text-white hover:text-[#E1B12C] cursor-pointer" />
                      <FaTwitter className="text-white hover:text-[#E1B12C] cursor-pointer" />
                      <FaFacebookF className="text-white hover:text-[#E1B12C] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          
          <div className="flex justify-center gap-3 mt-12">
            <div className="w-12 h-1 bg-gray-800"></div>
            <div className="w-12 h-1 bg-gray-800"></div>
            <motion.div 
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-12 h-1 bg-[#E1B12C]"
            ></motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;