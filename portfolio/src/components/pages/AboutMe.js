import React from "react";
import GitHubLogo from "../../assets/github-mark.png";

export default function AboutMe() {
  return (
    <div class='container mb-4 mt-4'>
      <h2>About Me</h2>
      <img src={GitHubLogo} alt="GitHub Logo" class="img-thumbnail"></img>
      <p>Insert comment about myself here</p>
    </div>
  );
}
