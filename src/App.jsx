//import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route here

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education"
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contacts from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Header />} />
        <Route path="/About" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </div>
  );
}
