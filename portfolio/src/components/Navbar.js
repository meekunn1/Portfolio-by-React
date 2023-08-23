import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className='navbar navbar-expand-sm bg-body-tertiary'>
      <div className='container-fluid'>
        <h1 className='navbar-brand'>
          Keiji Onishi
        </h1>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a
                onClick={() => handlePageChange("AboutMe")}
                className={
                  currentPage === "AboutMe" ? "nav-link active" : "nav-link"
                }
                href='#AboutMe'
              >
                About Me
              </a>
            </li>
            <li className='nav-item'>
              <a
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
                href='#Portfolio'
              >
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
                href='#Contact'
              >
                Contact
              </a>
            </li>
            <li className='nav-item'>
              <a
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
                href='#Resume'
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
