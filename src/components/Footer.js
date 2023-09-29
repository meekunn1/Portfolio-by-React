import React from "react";
import GitHubLogo from "../assets/github-mark.png";
import LinkedInLogo from "../assets/LI-In-Bug.png";

export default function Footer() {
  return (
    <footer className='w-100 mt-auto bg-body-tertiary p-4'>
      <div className='container text-center mb-1'>
        <a href='https://github.com/meekunn1' target='blank'>
          <img
            src={GitHubLogo}
            alt='Official GitHub Logo'
            width='50px'
            height='50px'
          />
        </a>
        <a href='https://linkedin.com/in/keiji-onishi' target='blank'>
          <img
            src={LinkedInLogo}
            alt='Official LinkedIn Logo'
            width='50px'
            height='50px'
          />
        </a>
        <p>Made with love by Keiji Onishi</p>
      </div>
    </footer>
  );
}
