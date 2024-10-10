import React, { useRef } from "react";

import {motion } from 'framer-motion'

const feedbackData = [
  {
    name: "RoofStock",
    role: "CEO, RoofStock",
    image: "./user1.avif",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan egestas odio, quis gravida nulla.",
  },
  {
    name: "Client Name",
    role: "Director, Some Company",
    image: "./user2.avif",
    feedback:
      "Aliquam erat volutpat. Curabitur tempor felis ac nisl dictum, vel ultrices justo consequat.",
  },
  {
    name: "Another Client",
    role: "Manager, Another Company",
    image: "./user3.avif",
    feedback:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
  },
  {
    name: "XYZ Corp",
    role: "CTO, XYZ Corp",
    image: "./user4.avif",
    feedback:
      "Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit.",
  },
  {
    name: "ABC Enterprises",
    role: "Owner, ABC Enterprises",
    image: "./user5.avif",
    feedback:
      "Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.",
  },
  {
    name: "PQR Tech",
    role: "Founder, PQR Tech",
    image: "./user6.avif",
    feedback:
      "Quis varius quam quisque id diam vel quam elementum pulvinar etiam non.",
  },
];

function FeedbackCarousel() {
 
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="exo text-gray-900">
            What Our Clients Are Saying
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from our satisfied clients about their experiences.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden p-5 w-full">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
            {feedbackData.map((feedback, index) => (
              <motion.div
              initial={{opacity:0,scale:0.3,x:30}}
              whileInView={{opacity:1,scale:1,x:0}}
              transition={{duration:0.2*index}}
                key={index}
                className="min-w-[300px]  shado-aamin max-w-[300px] h-48 flex-shrink-0 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center flex-col">
                  <div className="flex justify-start w-full gap-2 items-center">
                     <img
                    src={feedback.image}
                    alt={feedback.name}
                    className="w-24 h-24 rounded-full border-4 border-cyan-500 "
                  />
                  <div>
                    <h6 className="text-lg font-semibold text-gray-800">
                      {feedback.name}
                    </h6>
                    <p className="text-sm text-gray-500">{feedback.role}</p>
                    
                  </div>
                  </div>
                 
                  <div className=" overflow-hidden">
                  <p className="mt-1 text-sm text-gray-600 h-20 text-wrap">
                      "{feedback.feedback}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Duplicate the cards for smooth infinite effect */}
            {feedbackData.map((feedback, index) => (
              <motion.div
              initial={{opacity:0,scale:0.3,x:30}}
              whileInView={{opacity:1,scale:1,x:0}}
              transition={{duration:0.4*index}}
                key={`duplicate-${index}`}
                className="min-w-[300px]  shado-aamin max-w-[300px] h-48 flex-shrink-0 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center flex-col">
                  <div className="flex justify-start w-full gap-2 items-center">
                     <img
                    src={feedback.image}
                    alt={feedback.name}
                    className="w-24 h-24 rounded-full border-4 border-indigo-500 "
                  />
                  <div>
                    <h6 className="text-lg font-semibold text-gray-800">
                      {feedback.name}
                    </h6>
                    <p className="text-sm text-gray-500">{feedback.role}</p>
                    
                  </div>
                  </div>
                 
                  <div className=" overflow-hidden">
                  <p className="mt-1 text-sm text-gray-600 h-20 text-wrap">
                      "{feedback.feedback}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackCarousel;
