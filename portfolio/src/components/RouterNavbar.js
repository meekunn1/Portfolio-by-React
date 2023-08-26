import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const checkActive = ({ isActive, isPending }) =>
    isActive ? "nav-link disabled" : "nav-link";
  return (
    <nav className='navbar navbar-expand-sm bg-body-tertiary'>
      <div className='container-fluid'>
        <h1 className='navbar-brand'>Keiji Onishi</h1>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink to='/AboutMe' className={checkActive}>
                About Me
              </NavLink>
            </li>
            <li className='nav-item active'>
              <NavLink to={"/Portfolio"} className={checkActive}>
                Portfolio
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={"/Contact"} className={checkActive}>
                Contact
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={"/Resume"} className={checkActive}>
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
