import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {motion,useInView} from 'framer-motion'

const teamMembers = [
  {
    name: "John Doe",
    expertise: "UI/UX Designer",
    image: "./user1.avif",
  },
  {
    name: "Aamin Patel",
    expertise: "Backend Developer",
    image: "./a521.png",
  },
  {
    name: "Mike Johnson",
    expertise: "Graphic Developer",
    image: "./user3.avif",
  },
  {
    name: "Mona Gupta",
    expertise: "Frontend Designer",
    image: "./m51.jpg",
  },
  {
    name: "Chris Brown",
    expertise: "SEO Specialist",
    image: "./user6.avif",
  },
  {
    name: "Samantha Williams",
    expertise: "Project Manager",
    image: "./user4.avif",
  },
];

function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  const isInView = useInView(ref,{once :true})
 
  // Function to handle the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  // Function to handle the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <section className="py-6 overflow-hidden" >
      <div className="container mx-auto px-4">
        <h2 className="text-center exo text-gray-900 mb-10">
          Meet Our Awesome Team
        </h2>

        {/* Carousel Container */}
        <motion.div
            ref={ref}
            initial={{opacity:0,y:70}}
            animate={isInView?{opacity:1,y:0}:{}}
            transition={{duration:0.5}}  className="relative flex justify-center items-center">
          {/* Left Arrow */}
          <motion.button
           initial={{opacity:0,x:-50}}
           whileInView={{ opacity: 1 ,x:0 }}
           transition={{duration:0.5}}  
            onClick={prevSlide}
            className="absolute left-4 text-cyan-500 z-40 hover:bg-black p-2 rounded-full hover:text-white text-2xl focus:outline-none"
          >
            <FaArrowLeft />
          </motion.button>

          {/* Team Member Card */}
          <motion.article
            initial={{opacity:0,y:70,scale:0.5}}
            whileInView={{ opacity: 1 ,y:0 ,scale:1}}
            transition={{duration:0.5}}
              className="flex md:gap-10 justify-center mb-5 item-center w-full">
            
          <div className="hidden md:block w-56 h-80  shado-aamin opacity-70 bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform mt-8">
              <div className="">
                <img
                src={teamMembers[currentIndex===0? teamMembers.length -1 :currentIndex -1].image}
                alt={teamMembers[currentIndex===0? teamMembers.length -1 :currentIndex -1].name}
                className="w-48 h-48 mx-auto rounded-lg mb-4 shadow-lg"
              />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800">
                {teamMembers[currentIndex===0? teamMembers.length -1 :currentIndex -1].name}
              </h3>
              <p className="text-gray-600">{teamMembers[currentIndex===0? teamMembers.length -1 :currentIndex -1].expertise}</p>
            </div>

            {/* Center Card  */}
            <div className="max-w-sm shado-aamin w-80 h-96 bg-white rounded-lg shadow-lg p-4 text-center transition-transform transform hover:scale-105">
              <div className={`bg-gradient-to-l w-64 h-60 ${currentIndex ==3?'' : 'from-amber-500 via-yellow-400 to-amber-500'}  rounded-lg overflow-hidden mx-auto  mb-4`}>

              <img
                src={teamMembers[currentIndex].image}
                alt={teamMembers[currentIndex].name}
                className={` centerTeaminmg h-full w-full `}
              />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {teamMembers[currentIndex].name}
              </h3>
              <p className="text-gray-600">{teamMembers[currentIndex].expertise}</p>
            </div> 
            
            <div className="hidden md:block  w-56 h-80  shado-aamin opacity-70 bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform mt-8">
              <img
                src={teamMembers[currentIndex===teamMembers.length -1? 0 :currentIndex +1].image}
                alt={teamMembers[currentIndex===teamMembers.length -1? 0 :currentIndex +1].name}
                className="w-48 h-48 mx-auto rounded-lg mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {teamMembers[currentIndex===teamMembers.length -1? 0 :currentIndex +1].name}
              </h3>
              <p className="text-gray-600">{teamMembers[currentIndex===teamMembers.length -1? 0 :currentIndex +1].expertise}</p>
            </div>
          </motion.article>

          {/* Right Arrow */}
          <motion.button
           initial={{opacity:0,x:50}}
           whileInView={{ opacity: 1 ,x:0 }}
           transition={{duration:0.5}}  
            onClick={nextSlide}
            className="absolute right-4 z-40 hover:bg-black p-2 rounded-full hover:text-white text-cyan-500  text-2xl focus:outline-none"
          >
            <FaArrowRight />
          </motion.button>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-cyan-500"
                  : "bg-gray-500"
              } focus:outline-none`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
