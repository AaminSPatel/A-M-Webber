import React, { useRef } from 'react';
import { FaCheckCircle, FaPhoneAlt, FaRocket, FaArrowRight } from 'react-icons/fa';
import {motion,useInView} from 'framer-motion'

function CallToAction() {
  const ref = useRef();
  const isInView = useInView(ref,{once :true})
  const ref1 = useRef();
  const isInView1 = useInView(ref1,{once :true})
  return (
    <div className="w-full overflow-hidden p-4 text-black py-16 px-4 md:px-0">
      <div className="container mx-auto text-center">
        <h1 className="exo leading-tight mb-6">
          Ready to Elevate Your Online Presence?
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          We create SEO-optimized, visually appealing websites that attract, engage, and convert. Let’s turn your ideas into reality with a fast, responsive, and stunning website that drives your business growth.
        </p>

        <motion.div 
          ref={ref}
          initial={{ opacity: 0,x:-90 }}
          whileInView={{ opacity: 1 ,x:0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          {/* CTA Button */}
          <a 
            href="#contact" 
            className="flex items-center justify-center bg-white text-cyan-500 font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-indigo-50 transition transform hover:scale-105 duration-300">
            <FaPhoneAlt className="mr-2" />
            Get a Free Consultation
          </a>

          {/* Secondary Button */}
          <a 
            href="#services" 
            className="flex items-center justify-center border-2 border-white text-black font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-white hover:text-indigo-600 transition transform hover:scale-105 duration-300">
            <FaRocket className="mr-2" />
            Explore Services
          </a>
        </motion.div>

        {/* Highlights */}
        <motion.div 
          ref={ref1}
          initial={{ opacity: 0,x:150 }}
          whileInView={{ opacity: 1 ,x:0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 p-5 md:grid-cols-3 gap-6 text-center text-sm md:text-base">
          <div className="flex items-start">
            <FaCheckCircle className="text-cyan-500 text-2xl mr-3" />
            <p>SEO-Optimized for Better Ranking</p>
          </div>
          <div className="flex items-start">
            <FaCheckCircle className="text-cyan-500 text-2xl mr-3" />
            <p>Responsive Design for All Devices</p>
          </div>
          <div className="flex items-start">
            <FaCheckCircle className="text-cyan-500 text-2xl mr-3" />
            <p>Fast & Secure Websites for Growth</p>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div 
          ref={ref1}
          initial={{ opacity: 0,x:-90 }}
          whileInView={{ opacity: 1 ,x:0 }}
          transition={{ duration: 0.5 }}
         className="mt-10 flex items-center justify-center">
          <a 
            href="#contact" 
            className="flex w-3/4 items-center justify-center bg-black hover:bg-slate-900 text-white font-semibold py-4 px-12 rounded-full text-lg shadow-lg transition transform hover:scale-100 scale-95 duration-300">
            Get Started Now
            <FaArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default CallToAction;
