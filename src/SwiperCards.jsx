// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

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
// import required modules
import { EffectCards } from "swiper/modules";
import React from "react";
import ProjectCard from "./ProjectCard";

export default function SwipCard(props) {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {projects.map((item,i)=>(
            <SwiperSlide>
          <ProjectCard
            name={item.title}
            image={item.image}
            link={item.link}
            description={item.description}
          />

        </SwiperSlide>
        ))}
        
         </Swiper>
    </div>
  );
}
