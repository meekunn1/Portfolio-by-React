import React from "react";
import myResume from "../../public/KeijiOnishiResume2023_webdevelopment.pdf";
import { skills, otherSkills } from "../../assets/contentResume";

const styles = {
  imageStyle: {
    fontSize: "50%",
  },
  marginAll: {
    margin: "10px",
    padding: "10px",
  },
  center: {
    height: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
  },
  skillList: {
    width: "60rem",
    margin: "10px",
  },
  primaryListArea: {
    // background: 'black',
    width: "30rem",
    padding: "10px",
    margin: "10px",
    borderStyle: "solid",
    borderColor: "green",
    // backgroundColor: "#c3ffd5",
  },
  secondaryListArea: {
    // background: 'black',
    width: "30rem",
    padding: "10px",
    margin: "10px",
    borderStyle: "solid",
    borderColor: "blue",
    // backgroundColor: "#ededed",
  },
};

export default function Resume() {
  return (
    <div className='container mb-4 mt-4'>
      <h1>Resume</h1>
      <div className='card' style={styles.marginAll}>
        <p>
          You can download my Resume from the link below. It is still
          work-in-progress.
        </p>
        <a href={myResume} download='KeijiOnishiResume2023_webdevelopment.pdf'>
          Download my Resume
        </a>
      </div>
      <div className='row'>
        <div className='list-group col' style={styles.primaryListArea}>
          <h6>List of Programming Skills</h6>
          {skills.map((skills) => (
            <ul key={skills}>
              <li className='list-group-item'>{skills}</li>
            </ul>
          ))}
        </div>
        <div className='list-group col' style={styles.secondaryListArea}>
          <h6>List of other Skills</h6>
          {otherSkills.map((otherSkills) => (
            <ul key={otherSkills}>
              <li className='list-group-item'>{otherSkills}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
