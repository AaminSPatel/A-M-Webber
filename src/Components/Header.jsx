import React, { useState } from "react";
import { FaCaretDown, FaGlobe, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="shadow-md bg-white py-1 transition-colors">
      <div className="container mx-auto sm:px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2">
         <div className="flex items-center">
          <img src="./logo1.png" alt="Logo" className="min-w-14 h-14 w-14 rounded-full" />
        </div>
        <div>
          <h1 className="marc font-bold text-xl">
            A&M Webber
          </h1>
        </div>
        </div>
        
       {/* Navigation Links */}
<nav className="hidden md:flex space-x-6 text-lg font-medium">
  <Link to="/" className="hover:text-cyan-500 transition-colors text-gray-800">Home</Link>
  <Link to="/aboutus" className="hover:text-cyan-500 transition-colors text-gray-800">About Us</Link>
  <Link to="/projects" className="hover:text-cyan-500 transition-colors text-gray-800">Projects</Link>
  <Link to="/service" className="hover:text-cyan-500 transition-colors text-gray-800">Services</Link>
  <Link to="/contact" className="hover:text-cyan-500 transition-colors text-gray-800">Contact</Link>
</nav>


        {/* Search, Language, and Mobile Menu Toggle */}
        <div className="flex items-center px-4 space-x-4">
          {/* Search */}
          <div className="relative hidden  md:w-72 sm:block">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 md:w-full rounded-full focus:outline-none focus:ring-2 ring-1 ring-gray-300 focus:ring-cyan-500 bg-gray-100 text-gray-800"
            />
            <FaSearch className="absolute right-3 top-2 text-gray-400" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {!isMenuOpen ? <FaBars className="text-gray-800" /> : <FaTimes />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.nav 
        initial={{scale:0.3,y:-60,x:30}}
        animate={isMenuOpen?{scale:1,y:0,x:0}:{}}
        transition={{duration:0.1}}
        className="md:hidden absolute z-50 right-2 top-12 rounded-lg shadow-lg bg-gray-100 p-4 m-3">
          {/* Search */}
          <div className="relative hidden my-1 w-full">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 w-full  ring-1 ring-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-100 text-gray-800"
            />
            <FaSearch className="absolute right-3 top-2 text-gray-400" />
          </div>
<div className=" font-semibold flex flex-col gap-2 ">

          <Link to="/" className="hover:text-cyan-500 transition-colors text-gray-800">Home</Link>
  <Link to="/aboutus" className="hover:text-cyan-500 transition-colors text-gray-800">About Us</Link>
  <Link to="/projects" className="hover:text-cyan-500 transition-colors text-gray-800">Projects</Link>
  <Link to="/service" className="hover:text-cyan-500 transition-colors text-gray-800">Services</Link>
  <Link to="/contact" className="hover:text-cyan-500 transition-colors text-gray-800">Contact</Link>

</div>
         

          {/* Language Selector */}
         
        </motion.nav>
      )}
    </header>
  );
}

export default Header;
