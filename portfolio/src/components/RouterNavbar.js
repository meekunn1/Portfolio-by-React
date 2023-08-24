import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm bg-body-tertiary'>
      <div className='container-fluid'>
        <h1 className='navbar-brand'>Keiji Onishi</h1>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to={"/AboutMe"}>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={"/Portfolio"}>
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={"/Contact"}>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={"/Resume"}>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
