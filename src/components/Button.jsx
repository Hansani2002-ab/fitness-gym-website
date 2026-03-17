// src/components/Button.jsx
"use client";

import { motion } from "framer-motion";

const ProButton = ({ text, style }) => {
  return (
    <motion.button
      // 1. Initial State
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}

      // 2. Advanced Hover Animation
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: "#ffffff", 
        color: "#000000",           
        boxShadow: "0px 0px 25px rgba(225, 177, 44, 0.6)", 
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 10 
        }
      }}

      // 3. Click (Tap) Animation
      whileTap={{ scale: 0.95 }}
      
      className={`font-black uppercase italic rounded-xl border-2 border-transparent transition-all duration-300 ${style}`}
    >
      {text}
    </motion.button>
  );
};

export default ProButton;