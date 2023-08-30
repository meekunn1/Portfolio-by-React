import React from "react";
import myResume from "../../public/KeijiOnishi2023.docx";
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
    width: "30rem",
    margin: "10px",
  },
  primaryListArea: {
    // background: 'black',
    width: "100%",
    padding: "10px",
    margin: "10px",
    borderStyle: "solid",
    borderColor: "green",
    // backgroundColor: "#c3ffd5",
  },
  secondaryListArea: {
    // background: 'black',
    width: "100%",
    padding: "10px",
    margin: "10px",
    borderStyle: "solid",
    borderColor: "blue",
    // backgroundColor: "#ededed",
  },
};

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div className='card' style={styles.marginAll}>
        <p>
          You can download my Resume from the link below. It is still
          work-in-progress.
        </p>
        <a href={myResume} download='KeijiOnishi2023.docx'>
          Download my Resume
        </a>
      </div>
      <div style={styles.skillList}>
        <div className='list-group' style={styles.primaryListArea}>
          <h6>List of Programming Skills</h6>
          {skills.map((skills) => (
            <ul key={skills}>
              <li className='list-group-item'>{skills}</li>
            </ul>
          ))}
        </div>
        <div className='list-group' style={styles.secondaryListArea}>
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
