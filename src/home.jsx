import React from "react"
import Header from "./Components/Header";
import Feedback from "./Components/Feedback";
import ChooseUs from "./Components/ChooseUs";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import CallToAction from "./CallToAction";
import TeamSection from "./Components/TeamSection";
import AboutUs from "./about";

export default function Home (props) {
  return (
    <div className="w-full h-auto">
        <Services />
       < AboutUs/>
        <ChooseUs />
        <Projects />
        <TeamSection />
        <Feedback />
        <CallToAction />
    </div>
  )
};