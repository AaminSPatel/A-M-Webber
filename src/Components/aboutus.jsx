
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Section: About Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between mb-16"
        >
          {/* About Us Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            className="md:w-1/2 w-full mb-8 md:mb-0"
          >
            <img
              src="./hero1.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
          
          {/* About Us Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            className="md:w-1/2 w-full md:ml-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-gray-700 mb-6">
              We are a team of creative individuals who are passionate about building great products and providing excellent services to our clients. Our goal is to deliver the best solutions tailored to meet the specific needs of each business we collaborate with.
            </p>
            <p className="text-gray-700">
              With years of experience in the industry, we’ve grown to understand the challenges businesses face, and we thrive on helping companies reach their potential with modern, scalable solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Section: Team Members */}
        <motion.h2 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Meet Our Team
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Team Member 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }} 
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="./a52.jpg"
              alt="Aamin Patel Full-Stack Developer"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Aamin Patel</h3>
            <p className="text-gray-600 text-center mb-4">Full-Stack Developer</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }} 
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="./m5.jpg"
              alt="Mona Gupta frontend developer"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Mona Gupta</h3>
            <p className="text-gray-600 text-center mb-4">Frontend Developer</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
