import React, { useState } from "react";
import Navbar from "./Navbar";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";

export default function Page() {
  const [currentPage, setCurrentPage] = useState("AboutMe");
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage = {currentPage} handlePageChange = {handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
  );
}
