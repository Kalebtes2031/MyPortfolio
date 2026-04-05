import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className='w-full group relative' 
    >
      {/* Outer Glowing Border */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-[#915EFF] to-[#4e31aa] rounded-[24px] blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
      
      {/* Main Card Body */}
      <div className='relative bg-[#151030] border border-white/5 rounded-[24px] py-8 px-6 h-full min-h-[280px] flex flex-col items-center justify-between overflow-hidden'>
        
        {/* Floating Icon Container */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner group-hover:border-[#915EFF]/50 transition-colors"
        >
          <img src={icon} alt={title} className='w-10 h-10 md:w-12 md:h-12 object-contain' />
        </motion.div>

        <div className="text-center mt-4">
          <h3 className='text-white text-[18px] md:text-[20px] font-bold tracking-tight'>
            {title}
          </h3>
          <div className="w-8 h-[2px] bg-[#915EFF] mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
        </div>

        {/* Dynamic Tagline */}
        <p className="text-secondary text-[11px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
          Scalable Solutions
        </p>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute -left-20 top-0 w-64 h-64 bg-[#915EFF]/10 blur-[120px] rounded-full -z-10" />
        
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} mt-12 md:mt-6`}>Introduction</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-6 text-secondary text-[17px] md:text-[18px] max-w-3xl leading-[30px] md:leading-[32px] font-light'
        >
          I am a <span className="text-white font-medium">Software Engineer</span>. 
          I specialize in the <span className="text-[#915EFF]">ReactNative, MERN Stack</span> and <span className="text-[#915EFF]">Django</span>, 
          focusing on high-performance & scalable architectures and seamless user experiences.
        </motion.p>
      </div>

      {/* RESPONSIVE GRID SYSTEM */}
      <div className='mt-20 mb-12 md:mb:32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");