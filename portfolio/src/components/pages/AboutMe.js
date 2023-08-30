import React from "react";
import GitHubLogo from "../../assets/github-mark.png";
import AboutMeText from "../../assets/contentAboutMe";

const styles = {
  fontSize: {
    fontSize: "150%",
  },
  pictureBox: {
    width: "10rem",
    height: "10rem",
  },
};

export default function AboutMe() {
  return (
    <div class='container mb-4 mt-4' style={styles.fontSize}>
      <h2>About Me</h2>
      <img src={GitHubLogo} alt='Placeholder GitHub Logo' className='img-thumbnail'style={styles.pictureBox}></img>
      <p>{AboutMeText}</p>
    </div>
  );
}
