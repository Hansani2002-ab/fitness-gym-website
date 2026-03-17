"use client";

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
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

  return (
    
    <section 
      id="contact" 
      className="py-24 px-6 md:px-12 bg-transparent transition-colors duration-500 overflow-hidden min-h-screen w-full"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="mb-16 text-left md:text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#E1B12C] font-black uppercase tracking-[0.3em] mb-3 text-sm"
          >
            Contact Us
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black italic text-[#26211A] dark:text-white uppercase leading-none"
          >
            Get In <span className="text-[#E1B12C]">Touch</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="flex flex-col gap-10">
            <div className="space-y-10">
                {contactDetails.map((item, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center md:items-start gap-6 group"
                >
                    <div className="w-16 h-16 shrink-0 rounded-full bg-[#26211A] dark:bg-[#1A1A1A] flex items-center justify-center text-[#E1B12C] text-2xl shadow-xl">
                      {item.icon}
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                          {item.title}
                      </h4>
                      {item.details.map((line, i) => (
                          <p key={i} className="text-lg md:text-xl font-bold text-[#26211A] dark:text-white leading-tight">
                            {line}
                          </p>
                      ))}
                    </div>
                </motion.div>
                ))}
            </div>

            {/* Google Map */}
            <motion.div className="w-full h-[300px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#26211A] dark:border-[#1A1A1A]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.784654067963!2d79.97034177448281!3d6.91636131846497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e3442e653bc9!2sCINEC%20Campus!5e0!3m2!1sen!2slk!4v1710680000000!5m2!1sen!2slk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                className="grayscale dark:invert transition-all duration-500"
              ></iframe>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div className="w-full bg-gray-50 dark:bg-[#1A1A1A] p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-800 transition-colors">
            <h3 className="text-2xl font-black italic text-[#26211A] dark:text-white mb-8 uppercase">
                Leave a <span className="text-[#E1B12C]">Comment</span>
            </h3>
            
            <form className="space-y-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 py-3 outline-none focus:border-[#E1B12C] dark:text-white font-bold transition-colors" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 py-3 outline-none focus:border-[#E1B12C] dark:text-white font-bold transition-colors" 
              />
              <textarea 
                rows="4" 
                placeholder="Message" 
                className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 py-3 outline-none focus:border-[#E1B12C] dark:text-white font-bold resize-none transition-colors"
              ></textarea>

              <button className="w-full bg-[#E1B12C] text-black font-black uppercase italic py-5 mt-4 hover:bg-[#c99d25] transition-all shadow-lg active:scale-95">
                SUBMIT NOW
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;