import React, { useRef } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {motion,useInView} from 'framer-motion'

function Footer() {
  const ref = useRef();
  const isInView = useInView(ref,{once :true})
 
  return (
    <motion.footer
    ref={ref}
    initial={{opacity:0}}
    animate={isInView?{opacity:1}:{}}
    transition={{duration:1}}  className="bg-white text-gray-700 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <h2 className="marc text-gray-900 text-2xl font-semibold">A&M Webber</h2>
          <p className="text-gray-500 max-w-xs exo1">
            Building unique digital experiences for the modern web. Let's create something special together.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-500 transition-all" aria-label="Home">Home</a></li>
            <li><a href="#" className="hover:text-indigo-500 transition-all" aria-label="About Us">About</a></li>
            <li><a href="#" className="hover:text-indigo-500 transition-all" aria-label="Services">Services</a></li>
            <li><a href="#" className="hover:text-indigo-500 transition-all" aria-label="Contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">Follow Us</h3>
          <div className="flex gap-1 justify-center md:flex-col md:justify-center items-center ">
            <a href="#" className="text-gray-500 hover:text-indigo-500 transition-all" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-500 transition-all" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-500 transition-all" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-500 transition-all" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} <span className='marc text-black font-semibold cursor-pointer'>A&M Webber</span>. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
