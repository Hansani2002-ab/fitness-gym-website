"use client";
import { useState, useRef } from 'react'; 
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Dumbbell } from 'lucide-react';
import Link from 'next/link'; 
import Image from 'next/image';

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    
    emailjs.sendForm(
      'service_w8slybl', 
      'template_kbvbw7s', 
      formRef.current, 
      'yq2r4XbLSO-gEgGfe'
    )
    .then(() => {
      setLoading(false);
      setStatus("SENT");
      formRef.current.reset(); 
      setTimeout(() => setStatus(""), 5000); 
      setLoading(false);
      setStatus("ERROR");
      console.log(error.text);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="relative bg-white dark:bg-[#0a0a0a] overflow-hidden font-sans">
      
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/contact bg.jpg" 
          alt="Contact Us"
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
            CONTACT <span className="text-[#E1B12C]">US</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 mt-6 text-[11px] font-bold uppercase tracking-[0.5em]"
          >
            <Link href="/" className="text-gray-400 hover:text-[#E1B12C] transition-colors">Home</Link>
            <span className="text-[#E1B12C]">/</span>
            <span className="text-white">Contact</span>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: <Mail />, title: "Email Us", detail: "hello@fitnesspro.com", color: "text-blue-500", bg: "bg-blue-500/10" },
              { icon: <Phone />, title: "Call Us", detail: "+94 77 123 4567", color: "text-green-500", bg: "bg-green-500/10" },
              { icon: <MapPin />, title: "Visit Gym", detail: "Malabe, Sri Lanka", color: "text-red-500", bg: "bg-red-500/10" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 15 }}
                className="flex items-center gap-6 p-7 rounded-[2.5rem] bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-white/5 hover:border-[#E1B12C]/20 transition-all shadow-sm"
              >
                <div className={`p-4 rounded-2xl ${item.bg} ${item.color}`}>{item.icon}</div>
                <div>
                  <h4 className="font-bold dark:text-white text-lg">{item.title}</h4>
                  <p className="text-gray-500 font-medium">{item.detail}</p>
                </div>
              </motion.div>
            ))}

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="p-10 bg-[#E1B12C] rounded-[2.5rem] text-black hidden lg:block relative overflow-hidden"
            >
              <div className="relative z-10">
                <h4 className="font-black text-3xl uppercase leading-none">Join the <br/> Elite Tribe</h4>
                <p className="mt-4 font-bold opacity-80 text-sm italic">Limited slots for 1:1 training.</p>
              </div>
              <Dumbbell className="absolute -right-4 -bottom-4 text-black/10 rotate-12" size={150} />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-[#111] p-10 rounded-[3rem] border border-gray-100 dark:border-white/5 shadow-2xl relative"
          >
            
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                  
                  <input name="user_name" required type="text" placeholder="John Doe" className="w-full p-4 rounded-2xl bg-white dark:bg-black border dark:border-white/10 dark:text-white outline-none focus:border-[#E1B12C] transition-all font-semibold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                  <input name="user_email" required type="email" placeholder="john@example.com" className="w-full p-4 rounded-2xl bg-white dark:bg-black border dark:border-white/10 dark:text-white outline-none focus:border-[#E1B12C] transition-all font-semibold" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Your Message</label>
                <textarea name="message" required rows="4" placeholder="How can we help you?" className="w-full p-4 rounded-2xl bg-white dark:bg-black border dark:border-white/10 dark:text-white outline-none focus:border-[#E1B12C] transition-all resize-none font-semibold"></textarea>
              </div>

              <motion.button 
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#E1B12C] text-black font-black uppercase tracking-tighter rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-[#E1B12C]/20 hover:shadow-[#E1B12C]/40 transition-all"
              >
                {loading ? "Sending..." : status === "SENT" ? "Message Sent! ✅" : "Send Message"}
                {!loading && status !== "SENT" && <Send size={20} />}
              </motion.button>
              
              {/* Success/Error Alerts */}
              {status === "SENT" && <p className="text-green-500 text-center font-bold text-xs mt-2 uppercase">Thank you! Your email is on the way.</p>}
              {status === "ERROR" && <p className="text-red-500 text-center font-bold text-xs mt-2 uppercase">Failed to send. Please try again.</p>}
            </form>

            <div className="absolute -bottom-6 -right-6 text-[#E1B12C]/5 rotate-12">
              <MessageSquare size={150} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;