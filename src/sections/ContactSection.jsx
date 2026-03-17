"use client";

import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import Link from 'next/link'; 

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status !== "") {
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: "GET IN TOUCH",
      details: ["2nd Floor, Marine Building,", "Malabe, Sri Lanka"]
    },
    {
      icon: <FaPhoneAlt />,
      title: "CALL US",
      details: ["+94 772234563", "+94 112233445"]
    },
    {
      icon: <FaEnvelope />,
      title: "EMAIL US",
      details: ["fitpro@gmail.com"]
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs.sendForm(
      'service_w8slybl', 
      'template_kbvbw7s',         
      form.current, 
      'yq2r4XbLSO-gEgGfe'   
    )
    .then((result) => {
        if(result.text === "OK") {
            setStatus("success");
            form.current.reset();
        }
    })
    .catch(() => {
        setStatus("error");
    })
    .finally(() => {
        setLoading(false);
    });
  };

  return (
    <div className="w-full bg-white dark:bg-[#0A0A0A]">
     
      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ 
            backgroundImage: "url('/images/bodybuilding.jpg')", 
            backgroundColor: "#1A1A1A" 
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black italic text-white uppercase tracking-tighter"
          >
            CONTACT <span className="text-[#E1B12C]">US</span>
          </motion.h1>
          
          {/* Breadcrumbs (Home / Contact) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 mt-4 text-sm font-bold uppercase tracking-widest"
          >
            <Link href="/" className="text-gray-400 hover:text-[#E1B12C] transition-colors">HOME</Link>
            <span className="text-[#E1B12C]">/</span>
            <span className="text-white">CONTACT</span>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT CONTENT --- */}
      <section 
        id="contact" 
        className="py-24 px-6 md:px-12 bg-transparent overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div className="flex flex-col gap-10">
              <div className="space-y-10 text-left">
                  <p className="text-[#E1B12C] font-black uppercase tracking-[0.3em] text-sm">Our Location</p>
                  {contactDetails.map((item, idx) => (
                  <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex items-center md:items-start gap-6 group"
                  >
                      <div className="w-16 h-16 shrink-0 rounded-full bg-[#26211A] dark:bg-[#1A1A1A] flex items-center justify-center text-[#E1B12C] text-2xl shadow-xl border border-gray-800">
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">{item.title}</h4>
                        {item.details.map((line, i) => (
                            <p key={i} className="text-lg md:text-xl font-bold text-[#26211A] dark:text-white leading-tight">{line}</p>
                        ))}
                      </div>
                  </motion.div>
                  ))}
              </div>

              <motion.div className="w-full h-[350px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#26211A] dark:border-[#1A1A1A]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798511776515!2d79.970364!3d6.9146775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e3442e62112!2sMalabe!5e0!3m2!1sen!2slk!4v1710000000000!5m2!1sen!2slk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  className="grayscale dark:invert transition-all duration-500"
                ></iframe>
              </motion.div>
            </div>

            <motion.div className="w-full bg-gray-50 dark:bg-[#1A1A1A] p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-800 relative">
              <h3 className="text-3xl font-black italic text-[#26211A] dark:text-white mb-8 uppercase">
                  Leave a <span className="text-[#E1B12C]">Comment</span>
              </h3>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <input 
                  type="text" 
                  name="from_name"
                  required
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 py-4 outline-none focus:border-[#E1B12C] dark:text-white font-bold transition-all" 
                />
                <input 
                  type="email" 
                  name="from_email"
                  required
                  placeholder="Your Email Address" 
                  className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 py-4 outline-none focus:border-[#E1B12C] dark:text-white font-bold transition-all" 
                />
                <textarea 
                  name="message"
                  required
                  rows="4" 
                  placeholder="Tell us about your fitness goals..." 
                  className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 py-4 outline-none focus:border-[#E1B12C] dark:text-white font-bold resize-none transition-all"
                ></textarea>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#E1B12C] text-black font-black uppercase italic py-5 mt-4 hover:bg-white hover:text-black transition-all shadow-lg active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {loading ? <span className="animate-pulse tracking-widest">SENDING...</span> : "SUBMIT NOW"}
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-2 text-green-500 font-bold mt-4 bg-green-500/10 py-3 rounded-lg border border-green-500/20">
                      <FaCheckCircle /> Message sent successfully!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-2 text-red-500 font-bold mt-4 bg-red-500/10 py-3 rounded-lg border border-red-500/20">
                      <FaExclamationCircle /> Failed to send. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;