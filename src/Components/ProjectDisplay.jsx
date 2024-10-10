import React from 'react';
import { motion } from "framer-motion"; // for animations
import { Link } from 'react-router-dom';

function ProjectDisplay() {
  const projects = [
    {
      title: "A Travel Agency",
      description: `Welcome to Our Agency, where we turn your travel dreams into reality. Whether you're seeking a relaxing beach vacation, a thrilling adventure, or an immersive cultural experience, we've got the perfect destination for you.`,
      image: "./Travel2.jpeg",
      link: "https://aaminspatel.github.io/Travel3",
      technologies: ["Html", "Css", "JavaScript"],
    },
    {
      title: "Kitchen Decor",
      description: `We specialize in creating beautiful, modern kitchen designs that transform your space into the heart of your home. Whether you're looking for sleek cabinetry, innovative storage solutions, or a complete kitchen makeover, our team of experts is here to bring your vision to life.`,
      image: "./Kitchen.jpeg",
      link: "https://aaminspatel.github.io/kitchen-design/kit.html",
      technologies: ["Html", "Css", "JavaScript"],
    },
    {
      title: "Random Quote Generator",
      description: `Our innovative platform brings a refreshing dose of humor, inspiration, and wisdom right to your screen with just a click! By utilizing API calls, we generate random jokes, motivational thoughts, psychological insights, and soulful shayari. Each piece of content is uniquely presented with customizable backgrounds to suit your style and mood.  `,
      image: "./Changer.jpeg",
      link: "https://aaminspatel.github.io/post-generate/",
      technologies: ["React.js", "Tailwind Css", "JavaScript"],
    },
    {
      title: "Dream Destination",
      description: `Embark on an extraordinary journey with dream Destination, where every adventure is crafted just for you. Whether you're dreaming of serene beaches, vibrant cities, or hidden gems off the beaten path, we bring you closer to the world’s most captivating destinations. `,
      image: "./Travel1.jpeg",
      link: "https://aaminspatel.github.io/travel3-camper/demo.html",
      technologies: ["Html", "Css", "JavaScript"],
    },
    {
      title: "Music Player",
      description: `Our innovative music player web application, built with React.js, Tailwind CSS, Node.js, and powered by MongoDB, offers a seamless and immersive experience for music lovers. With a robust database integration, users can easily browse, play, and manage their favorite tracks effortlessly. `,
      image: "./Spotify.jpeg",
      link: "https://aaminspatel.github.io/new-spotify/",
      technologies: ["React.js", "Tailwind Css", "Node.js" ,"MongoDB" ,"Express" ,"JavaScript"],
    },
    {
      title: "Foodie App",
      description: `Create a Foodie website with HTML, CSS, and JavaScript. Plan, design, and develop content, incorporating interactivity, responsiveness, and SEO optimization for promotion and engagement. `,
      image: "./food.jpg",
      link: "https://foodie-app-psi.vercel.app/",
      technologies: ["Html", "Css", "JavaScript"],
  
      
    },
    {
      title: "Online Cake Website",
      description: `Delicious custom cakes online with easy ordering, live previews, and secure checkout. Explore our menu, customize your cake, and celebrate! `,
      image: "./cake.jfif",
      link: "https://cake-hotel.vercel.app/",
      technologies: ["Html", "Css", "JavaScript"],
    },
    {
      title: "Todo List",
      description: `Build a responsive Todo List app using React. Features include adding, deleting, and marking tasks as complete. Implement local storage for data persistence and deploy on platforms like Netlify. `,
      image: "./pro_4.jpg",
      link: "https://todo-by-js.vercel.app/",
      technologies: ["React.js", "Tailwind Css" ,"JavaScript" ,"Html"],
    },
    {
      title: "Image Generator",
      description: `This is image Search app using Html, css, javascrit, and api. in tihs app user search any image and easily download. `,
      image: "./imgsearch.png",
      link: "https://image-search-dusky.vercel.app/",
      technologies: ["Html", "Css", "JavaScript"],
    },
    {
      title: "Restaurent Website",
      description: `We developed a modern restaurant website using HTML, CSS, and JavaScript, based on a carefully designed Figma file. The site showcases an elegant layout with intuitive navigation, highlighting the restaurant's menu, ambiance, and services. `,
      image: "./Figma.jpeg",
      link: "https://vercel.com/mona-guptas-projects/resturant",
      technologies: ["Html", "Css", "JavaScript" ,"Figma"],
    },
    
  ];
  return (
    <div className="min-h-screen overflow-hidden bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="exo pb-1  text-gray-800 text-center mb-16">
          Our Amazing Projects
        </h1>

        {/* Grid Layout: 2 cards per row for larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 cursor-pointer">
          {projects.map((project, index) => (
            <motion.div
            initial={index%2 ==0?{ opacity: 0,  x: -90,y:20,scale:0.2}:{scale:0.2,opacity: 0, x: 90,y:20}}
          whileInView={{ opacity: 1 ,x:0,y:0 ,scale:1}}
          transition={{ duration: 0.6 }}
              key={index}
              className="relative  group bg-white h-96 shadow-lg border border-gray-200 overflow-hidden transform rounded-2xl"
            >
              {/* Adjusted Image Height */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 hover:scale-110 hover:blur-sm"
              />
              <div className="p-8 md:p-4 absolute group-hover:bottom-0 -bottom-56 rounded-xl transition-all bg-white h-72 ">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 mb-4 h-20 overflow-hidden">{project.description}</p>
                
                {/* Technologies Section */}
                <p className="text-base md:text-lg text-gray-900 font-bold mb-2">Technologies Used:</p>
                <ul className="flex flex-wrap space-x-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="text-xs md:text-sm bg-blue-500 text-white py-1 px-2 rounded shadow-sm transform transition-transform duration-300 hover:scale-105"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

               
                <a
                  href={project.link}
                  className="inline-block text-white bg-blue-600 hover:bg-blue-700 font-bold py-2 px-6 rounded-full transition-colors duration-300"
                >
                  View Project &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-16">
          <h2 className=" text-gray-800 exo">Interested in working with us?</h2>
          <p className="text-gray-600 mt-4 mb-8">
            Let's create something amazing together. Feel free to reach out to us for any inquiries or custom projects.
          </p>
          <Link
            to="/contact"
            className="text-white bg-blue-600 hover:bg-blue-700 font-bold py-3 px-8 rounded-full transition-colors duration-300 hover:ring-2 hover:ring-blue-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
