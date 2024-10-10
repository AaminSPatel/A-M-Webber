import React, { useRef, useState } from "react";
import { motion ,useInView} from "framer-motion"; // for animations

export default function AboutUs() {
  const ref = useRef(null);
const isInView = useInView(ref,{once:true}) 
const ref1 = useRef(null);
const isInView1 = useInView(ref1,{once:true})
  return (
    <div className=" text-black p-7 overflow-hidden">
      {/* Hero Section */}
      <section className="text-center py-10 flex flex-wrap items-center justify-center">
        <div className="md:w-1/2 w-full sm:p-8 p-1 marc">
         <motion.h1 
         ref={ref}
          className="exo mb-4"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1 ,x:0 }}
          transition={{ duration: 0.7 }}
        >
          About Us
        </motion.h1>
        <motion.p 
          className="text-lg w-full mx-auto"
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          We are a passionate team of web developers, designers, and strategists committed to delivering quality web solutions for businesses of all sizes. Our mission is to empower clients with cutting-edge web technologies to enhance their online presence and achieve their goals.
        </motion.p> 
        </div>
        <div className="my-6 sm:my-4 md:w-1/2 w-full  sm:p-8">
          <motion.div className="sm:w-96 w-full  sm:h-80 h-64 "
          ref={ref1}
          initial={{ opacity: 0,y:40 }}
          whileInView={{ opacity: 1 ,y:0 }}
          transition={{ duration: 0.7 }}
        
          >
            <img src="./abt1.jpg" alt="" className="rounded-2xl w-full shadow-slate-400 h-full shadow-lg"/>
          </motion.div>
          <motion.div 
          ref={ref1}
          initial={{ opacity: 0,x:-50 }}
          whileInView={{ opacity: 1 ,x:0 }}
          transition={{ duration: 0.5 }}
          className="absolute z-20 sm:h-56 h-40 sm:w-72 w-56 sm:-mt-48 -mt-32 sm:ml-0 -ml-6 sm:right-10 rounded-xl shadow-slate-300 shadow-lg">
            <img src="./abt.jpg" alt="" className="h-full w-full rounded-xl"/>
          </motion.div>
        </div>
        
      </section>

     
    </div>
  );
}

