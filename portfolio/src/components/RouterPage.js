import React from "react";
import RouterNavbar from "./RouterNavbar";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

export default function Page() {
  return (
    <div>
      <BrowserRouter>
        <RouterNavbar />
        <Routes>
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
