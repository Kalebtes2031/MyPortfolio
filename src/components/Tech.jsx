import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechCard = ({ index, name, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className='group relative w-28 h-32 flex flex-col items-center justify-center'
    >
      {/* The Glow Effect Background */}
      <div className="absolute inset-0 bg-[#915EFF] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-full" />
      
      {/* The Card Body */}
      <div className='w-20 h-20 rounded-2xl bg-tertiary/50 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:border-[#915EFF]/50 transition-all duration-300 shadow-xl'>
        <img 
          src={icon} 
          alt={name} 
          className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" 
        />
        
        {/* Subtle "Scanning" Line Animation on Hover */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#915EFF] opacity-0 group-hover:opacity-100 group-hover:animate-scan" />
      </div>

      {/* Technology Name */}
      <p className='text-secondary text-[12px] mt-3 font-medium group-hover:text-white transition-colors uppercase tracking-widest'>
        {name}
      </p>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 max-w-5xl mx-auto'>
      {technologies.map((technology, index) => (
        <TechCard 
          key={technology.name} 
          index={index} 
          {...technology} 
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");