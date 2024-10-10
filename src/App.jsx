import React from "react";
import Header from "./Components/Header";
import Feedback from "./Components/Feedback";
import ChooseUs from "./Components/ChooseUs";
import Projects from "./Components/Projects";
import Services from "./Components/service";
import Footer from "./Components/Footer";
import CallToAction from "./CallToAction";
import TeamSection from "./Components/TeamSection";
import ProjectDisplay from "./Components/ProjectDisplay";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import ContactForm from "./Components/Contact";
import AboutUs from "./Components/aboutus";
export default function App() {
  return (
    <div className="bg-slate-300">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects/" element={<ProjectDisplay />}></Route>
          <Route path="/contact/" element={<ContactForm />}></Route>
          <Route path="/service/" element={<Services />}></Route>
          <Route path="/aboutus/" element={<AboutUs />}></Route>
        </Routes>

        {/* 
        <Services />
        
        <ChooseUs />
        <Projects />
        <TeamSection />
        <Feedback />
        <CallToAction />
         */}
      </BrowserRouter>
      <Footer />
    </div>
  );
}
