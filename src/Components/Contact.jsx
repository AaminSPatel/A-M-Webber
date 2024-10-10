import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="bg-gray-100 py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="md:w-1/2 w-full bg-white p-8 shadow-md rounded-lg mb-8 md:mb-0"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" 
                  placeholder="Your Email" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  className="mt-1 p-2 w-full h-32 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" 
                  placeholder="Your Message"
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="w-full py-3 bg-cyan-500 text-white font-semibold rounded-md shadow-md hover:bg-cyan-600 transition duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details + Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="md:w-1/2 w-full md:ml-12 p-8 space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Contact Information
            </h2>
            <div className="space-y-7">
              <div className="flex items-center">
                <FaPhone className="text-cyan-500 mr-4" />
                <span className="text-gray-700">+123 456 7890</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-cyan-500 mr-4" />
                <span className="text-gray-700">info@webfreelance.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-cyan-500 mr-4" />
                <span className="text-gray-700">123 Freelancer St, Web City</span>
              </div>
            </div>
            <div className="h-80 bg-red-400 overflow-hidden rounded-2xl">
              <img src="./hero7.jpg" alt="" className="h-full w-full" />

            </div>
            <div className="w-full hidden h-72 bg-gray-200 rounded-md shadow-lg overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095646!2d144.95373531540932!3d-37.816279442021446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727a7c849b0d6a!2sVictoria%20Harbour%20Promenade%2C%20Docklands%20VIC%203008!5e0!3m2!1sen!2sau!4v1637301285559!5m2!1sen!2sau" 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
