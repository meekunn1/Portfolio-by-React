import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className='navbar navbar-expand-sm bg-body-tertiary'>
      <div className='container-fluid'>
        <h1 className='navbar-brand'>
          Keiji Onishi
        </h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <button
                onClick={() => handlePageChange("AboutMe")}
                className={
                  currentPage === "AboutMe" ? "nav-link active" : "nav-link"
                }
              >
                About Me
              </button>
            </li>
            <li className='nav-item'>
              <button
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </button>
            </li>
            <li className='nav-item'>
              <button
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </button>
            </li>
            <li className='nav-item'>
              <button
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
