import React, { useEffect } from "react";
import { FaPaintBrush, FaCode, FaImage, FaSearch } from "react-icons/fa";
import {motion } from 'framer-motion'
function HeroSection() {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector(".parallax");
      const scrollY = window.scrollY;
      parallax.style.transform = `translateY(${scrollY * 0.4}px)`; // Adjust the parallax speed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
const clsCard = `shado-aamin flex flex-col items-center z-50 bg-white p-1 pb-3 sm:h-36 h-36 justify-between rounded-xl md:gap-3 group`;
const clsIcon = `bg-gray-200 rounded-full p-4 shadow-lg flex items-center justify-center mb-2 transition-transform transform group-hover:scale-110 duration-300`;
  return (
    <div className=" overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="parallax z-0 bg-right bg-cover h-[400px] overflow-hidden"
        style={{
          backgroundImage: "url('./hero2.avif')", // Replace with your image path
          backgroundSize:"100%",
          backgroundRepeat:"no-repeat"
        }}
      > 
        <div className="flex  items-center justify-center h-full p-3 bg-black bg-opacity-30">
          <div className="text-center text-black px-4">
            <h1 className="exo1 text-5xl font-semibold leading-tight mb-4">
              Elevate Your Digital Experience
            </h1>
            <p className="text-xl md:text-xl mb-8">
              We Create Unique Solutions for Your Business Needs
            </p>
          </div>
        </div>
      </div>

      {/* Circular Service Cards */}
      <div className="h-78 md:h-auto  p-4 w-full z-50 py-10 ">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5  z-50 justify-center items-center">
          {/* Service 1 */}
          <motion.div 
          initial={{ opacity: 0,y:50 }}
          animate={{ opacity: 1 ,y:0}}
          transition={{ duration: 0.3 }} className={clsCard}>
            <div className={clsIcon}>
              <FaPaintBrush className="text-cyan-500 text-3xl" />
            </div>
            <h2 className="text-lg font-semibold z-50">UI/UX Design</h2>
          </motion.div>

          {/* Service 2 */}
          <motion.div 
          initial={{ opacity: 0,y:50 }}
          animate={{ opacity: 1 ,y:0}}
          transition={{ duration: 0.5 }} className={clsCard}>
          <div className={clsIcon}>
          <FaCode className="text-yellow-500 text-3xl" />
            </div>
            <h2 className="text-lg font-semibold ">Web Development</h2>
          </motion.div>

          {/* Service 3 */}
          <motion.div 
          initial={{ opacity: 0,y:50 }}
          animate={{ opacity: 1 ,y:0}}
          transition={{ duration: 0.7 }} className={clsCard}>
          <div className={clsIcon}>
          <FaImage className="text-blue-500 text-3xl" />
            </div>
            <h2 className="text-lg font-semibold z-50 ">Graphic Design</h2>
          </motion.div>

          {/* Service 4 */}
          <motion.div 
          initial={{ opacity: 0,y:50 }}
          animate={{ opacity: 1 ,y:0}}
          transition={{ duration: 0.9 }} className={clsCard}>
          <div className={clsIcon}>
          <FaSearch className="text-pink-500 text-3xl" />
            </div>
            <h2 className="text-lg font-semibold z-50 ">SEO Optimization</h2>
          </motion.div >
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
