import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaMobileAlt, FaSearch } from 'react-icons/fa';

const services = [
  {
    title: "Web Development",
    description: "Creating responsive and modern websites with the latest technologies.",
    icon: <FaCode size={50} />,
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces with a focus on user experience.",
    icon: <FaPaintBrush size={50} />,
  },
  {
    title: "Mobile App Development",
    description: "Building powerful and responsive mobile applications for Android and iOS.",
    icon: <FaMobileAlt size={50} />,
  },
  {
    title: "SEO Optimization",
    description: "Enhancing your website’s visibility and ranking on search engines.",
    icon: <FaSearch size={50} />,
  },
];

const Services = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Freelance Services
          </h2>
          <p className="text-gray-600 text-lg">
            We offer a wide range of professional services to meet your business needs.
          </p>
        </motion.div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
