import React, { useRef } from 'react';
import { FaCode, FaLaptopCode, FaRocket, FaMobileAlt, FaPaintBrush, FaHandshake } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    title: "Custom Web Development",
    description: "We create bespoke, scalable, and secure websites tailored to your unique business needs using modern web technologies.",
    icon: <FaCode />,
    delay: 0.3,
  },
  {
    title: "Full Stack Expertise",
    description: "Our team is proficient in both front-end and back-end development, offering end-to-end solutions for any project.",
    icon: <FaLaptopCode />,
    delay: 0.4,
  },
  {
    title: "Fast & Efficient Delivery",
    description: "We follow agile methodologies to ensure timely delivery of your projects without compromising on quality.",
    icon: <FaRocket />,
    delay: 0.6,
  },
  {
    title: "Mobile-First Design",
    description: "We design websites with a mobile-first approach, ensuring that your site looks great and performs well on all devices.",
    icon: <FaMobileAlt />,
    delay: 0.8,
  },
  {
    title: "Creative Design Solutions",
    description: "Our designers bring creativity and innovation to every project, ensuring your brand stands out with stunning visuals.",
    icon: <FaPaintBrush />,
    delay: 1.0,
  },
  {
    title: "Reliable Partnerships",
    description: "We value long-term relationships, offering continuous support and collaboration to ensure your project’s ongoing success.",
    icon: <FaHandshake />,
    delay: 1.2,
  },
];

function ChooseUs() {
  const cardRefs = useRef([]);

  // Classes for styling
  const clsname = `text-xl md:text-2xl font-bold text-gray-800 whitespace-nowrap`;
  const clsCard = `bg-white shado-aamin flex flex-col items-center rounded-lg shadow-lg py-8 px-8 gap-2 transform hover:scale-105`;
  const clsIcon = `text-black text-5xl`;

  return (
    <div className="py-20">
      <div className="text-center mb-12">
        <h1 className="exo text-gray-900">Why Choose Us</h1>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={el => cardRefs.current[index] = el} // Store refs dynamically
              initial={{ opacity: 0, y: 50 ,scale:0.4}}
              whileInView={{ opacity: 1, y: 0 ,scale:1}}
              transition={{ duration: 0.17*index }}
              className={clsCard}
            >
              <div className={clsIcon}>{service.icon}</div>
              <div className="flex items-center mb-4">
                <h2 className={clsname}>{service.title}</h2>
              </div>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
