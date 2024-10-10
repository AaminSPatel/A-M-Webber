import React, { useRef } from 'react';
import SwipCard from '../SwiperCards';
import { useNavigate } from 'react-router-dom';
import {motion,useInView} from 'framer-motion'

function ProjectIntro() {
  const navigate = useNavigate()
  const ref = useRef();
  const isInView = useInView(ref,{once :true})
  const ref1 = useRef();
  const isInView1 = useInView(ref1,{once :true})
  
  return (
    <div className="py-10 overflow-hidden flex flex-row gap-10 md:gap-0 flex-wrap items-center justify-center  p-6">
     <motion.div
            ref={ref}
            initial={{opacity:0,x:-90}}
            whileInView={{ opacity: 1 ,x:0 }}
            transition={{duration:0.7}} className="md:w-1/3 w-full text-center">
        <h1 className="exo text-gray-900 mb-4">Explore Our Projects</h1>
        <p className="text-lg text-gray-700 mb-6">
          We have worked on several projects involving full-stack development,
          e-commerce platforms, and custom web applications. Check out our latest work and
          see how We bring ideas to life!
        </p>
       
          <button onClick={()=>{navigate('/projects')}} className="bg-cyan-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
            View All Projects
          </button>
        
      </motion.div>
      <motion.div
            ref={ref1}
            initial={{opacity:0,x:90}}
            whileInView={{ opacity: 1 ,x:0 }}
            transition={{duration:0.7}} className="md:w-2/3 w-full h-full overflow-hidden flex item-center justify-center">
      <SwipCard/>
      </motion.div>
    </div>
  );
}

export default ProjectIntro;
