// import React from 'react';
// import { styles } from "../styles";

// const Hero = () => {
//   return (
//     <section className={`relative w-full min-h-[700px] md:h-screen bg-[#050505] overflow-hidden flex items-center`}>
      
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 z-0">
//         {/* Subtle Grid */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
//         {/* Neon Glows */}
//         <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#915EFF]/20 rounded-full blur-[120px] animate-pulse" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
//       </div>

//       <div className={`${styles.paddingX} container mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-12 mt-20 md:mt-0`}>
        
//         {/* LEFT SIDE: Text Content */}
//         <div className="flex flex-row items-start gap-5">
//           {/* The Vertical Line / Dot Decor */}
//           <div className="flex flex-col justify-center items-center mt-5">
//             <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//             <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent" />
//           </div>

//           <div className="max-w-2xl">
//             <h1 className={`${styles.heroHeadText} text-white`}>
//               Hi, I'm <span className="text-[#915EFF] drop-shadow-[0_0_10px_rgba(145,94,255,0.3)]">Kaleb</span>
//             </h1>
            
//             <p className={`${styles.heroSubText} mt-4 text-white-100 leading-relaxed`}>
//               I develop innovative software <br className="sm:block hidden" />
//               solutions that bridge the gap between <br className="sm:block hidden" />
//               logic and design.
//             </p>

//             {/* Added: Tech Stack Pills for "Engagement" */}
//             <div className="flex flex-wrap gap-3 mt-8">
//               {['React', 'Next.js', 'Node.js', 'Django', 'Tailwind'].map((tech) => (
//                 <span key={tech} className="px-4 py-1.5 text-xs font-medium border border-[#915EFF]/30 bg-[#915EFF]/5 rounded-full text-purple-200">
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* Added: CTA Button */}
//             <div className="mt-10">
//               <button className="px-10 py-4 bg-[#915EFF] hover:bg-[#7a49e6] text-white font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_15px_rgba(145,94,255,0.4)]">
//                 VIEW MY WORK
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE: Professional Portrait */}
//         <div className="relative group">
//           {/* Animated Glow behind the image */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          
//           <div className="relative flex justify-center items-center w-[250px] md:w-[350px] lg:w-[450px] h-[250px] md:h-[350px] lg:h-[450px] p-2 bg-gradient-to-tr from-[#915EFF] via-purple-400 to-blue-500 rounded-full shadow-[0_0_30px_rgba(145,94,255,0.3)]">
//             <div className="w-full h-full rounded-full overflow-hidden border-4 ">
//               <img
//                 className="object-cover w-full h-full  transition-all duration-700"
//                 src="professionalphoto.png"
//                 alt="Portrait of Kaleb"
//                 loading="lazy"
//               />
//             </div>
            
//             {/* Floating Code Snippet Decor */}
//             <div className="absolute -bottom-6 -right-6 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 hidden lg:block">
//               <pre className="text-[10px] text-purple-300">
//                 <code>{`{
//   role: 'Fullstack Developer',
//   focus: 'MERN, Expo & Django',
//   passionate: true
// }`}</code>
//               </pre>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex items-center justify-center font-sans">
      {/* Background Grid & Glow Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Animated Purple Blur */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="pl-0 md:pl-32 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side: Content */}
        <div className="space-y-6 mt-20 md:mt-0 ml-4 md:ml-0">
          <div className="inline-block px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium tracking-wider uppercase">
            Fullstack Software Engineer | Creating the Digital Future
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Kaleb.</span>
          </h1>

          <p className="text-md  md:text-2xl text-gray-400 max-w-lg leading-relaxed">
            I develop different types of software solutions with a focus on performance and modern design.
          </p>

          {/* Tech Stack Icons Placeholder */}
          <div className="flex flex-wrap gap-4 pt-4">
            {['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
              <div key={tech} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-purple-500/50 transition-colors">
                {tech}
              </div>
            ))}
          </div>

          {/* <div className="pt-8">
            <button className="relative group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(147,51,234,0.4)]">
              <span className="relative z-10">EXPLORE MY PROJECTS</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div> */}
        </div>

        {/* Right Side: Portrait Container */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 mb-6 md:mb-0 md:w-[450px] md:h-[450px]">
            {/* Animated Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30 animate-[spin_20s_linear_infinite]"></div>
            
            {/* Glowing Border Container */}
            <div className="absolute inset-4 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-blue-500 to-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.4)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#111] border-4 border-black">
                <img 
                  src="/professionalphoto.png" // rotate image in small scall
                  alt="Kaleb" 
                  className="w-full h-full object-cover rotate-[1deg] transition-all duration-500"
                />
              </div>
            </div>
            
            {/* Floating Decorative Code Snippet */}
            <div className="absolute -bottom-4 -left-8 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 hidden md:block">
              <code className="text-purple-400 text-xs">
                const Kaleb = () =&gt; &#123; <br />
                &nbsp;&nbsp;return &lt;Creativity /&gt;; <br />
                &#125;
              </code>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;