import React from "react";
import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from "react-icons/fa";

export default function ProjectCard( project ) {
  return (
    <div className="w-full group max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-lg">
      <div className="relative overflow-hidden h-96 bg-yellow-600">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-96 object-cove  hover:scale-105 transition duration-300"
        />
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute group-hover:bottom-24 bottom-6 right-3 bg-white text-black shadow-xl shadow-indigo-500 p-2 rounded-full  transition-all duration-300"
        >
          <FaExternalLinkSquareAlt />
        </a>
      </div>
      <div className="pt-1 p-3 absolute z-50 h-20 -bottom-20 group-hover:bottom-0 transition-all duration-300  bg-white ">
        <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
        <p className="text-gray-600 text-sm h-10 mx-h-12 overflow-hidden">{project.description}</p>
      </div>
    </div>
  );
}
