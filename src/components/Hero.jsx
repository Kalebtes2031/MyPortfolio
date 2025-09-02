import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[600px] md:h-screen `}>
      <div className="flex flex-col md:pt-28 md:flex-row gap-x-6 xl:gap-x-56 justify-center items-center">
        <div
          className={`mt-24 md:pl-16  px-6 flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 md:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Kaleb</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop innovative software <br className="sm:block hidden" />
              solutions.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center w-[200px] md:w-[280px] lg:w-[400px] border-8 bg-white h-[200px] md:h-[280px] lg:h-[400px] rounded-full">
          <img
            className=" object-contain w-full h-full rounded-full"
            src="professionalphotogemni.png"
          />
        </div>
        {/* <ComputersCanvas /> */}
      </div>

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
