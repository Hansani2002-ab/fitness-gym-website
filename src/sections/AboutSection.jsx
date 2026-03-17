"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // Home එකට යන්න මේක අලුතින් එක් කළා
import { FaDumbbell, FaAppleAlt, FaUsers, FaHeartbeat } from 'react-icons/fa';

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

  return (
    <div className="bg-white dark:bg-[#262626] transition-colors duration-500">
      
      {/* --- Section 1: Hero Header (image_14e474.jpg design එකට අනුව) --- */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/fitness.jpg" 
          alt="About Us"
          fill
          className="object-cover brightness-[0.25]"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black italic text-white uppercase tracking-tighter"
          >
            About <span className="text-[#E1B12C]">Us</span>
          </motion.h1>
          
          {/* Home Link එක මෙතන තියෙනවා */}
          <div className="flex items-center justify-center gap-2 mt-4 text-[10px] font-bold uppercase tracking-[0.4em]">
            <Link href="/" className="text-gray-400 hover:text-[#E1B12C] transition-colors cursor-pointer">
              Home
            </Link>
            <span className="text-white">/</span>
            <span className="text-white">About</span>
          </div>
        </div>
      </div>

      {/* --- Section 2: Features (image_14e439.jpg design එකට අනුව) --- */}
      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center mb-20">
          <p className="text-[#E1B12C] font-black uppercase text-[10px] tracking-[0.5em] mb-4">Why Choose Us?</p>
          <h2 className="text-4xl md:text-6xl font-black italic dark:text-white uppercase tracking-tighter leading-none">Push Your Limits Forward</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gray-50 dark:bg-[#1A1A1A] rounded-full flex items-center justify-center text-[#E1B12C] text-3xl mx-auto mb-8 shadow-lg group-hover:bg-[#E1B12C] group-hover:text-black transition-all duration-500">
                {f.icon}
              </div>
              <h4 className="text-xl font-black italic dark:text-white uppercase mb-4 tracking-tight">{f.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Section 3: Achievement & Stats (Quality fix කළා - image_13f7f7.jpg) --- */}
      <div className="flex flex-col lg:flex-row items-center bg-gray-50 dark:bg-[#1A1A1A] py-20 px-6 md:px-20 gap-16">
        
        {/* පින්තූරය තියෙන පැත්ත - max-width දාලා quality එක රැකගත්තා */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[550px] h-[400px] md:h-[500px] overflow-hidden rounded-[2rem] shadow-2xl">
            <Image 
              src="/images/cardio.jpg" 
              alt="Training"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* විස්තර සහ Progress Bars */}
        <div className="w-full lg:w-1/2">
          <p className="text-[#E1B12C] font-black uppercase text-[10px] tracking-[0.5em] mb-4">About Us</p>
          <h2 className="text-4xl md:text-6xl font-black italic dark:text-white uppercase tracking-tighter leading-none mb-8">
            What We Have Done
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-12 leading-relaxed text-base font-medium">
            Since opening our doors, Fitness Pro has transformed hundreds of lives through expert training, personalized support, and a commitment to excellence. We've built a community where fitness goals are achieved and limits are broken.
          </p>

          <div className="space-y-10">
            {stats.map((s, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-end mb-3">
                  <span className="font-black italic dark:text-white uppercase text-sm tracking-widest">{s.label}</span>
                  <span className="text-[#E1B12C] font-black italic text-lg">{s.value}</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: s.value }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-[#E1B12C]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;