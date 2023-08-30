import React from "react";
import ParkTalk from "../../assets/parkTalk.png";
import NoteTaker from "../../assets/note-taker-note-page.png";
import MealMatch from "../../assets/MealMatch.png";
import WeatherDashboard from "../../assets/WeatherDashboard.png";

import Project from "./Project.js";

//add project
import Projects from "../../assets/content.js";

const styles = {
  imageStyle: {
    fontSize: "50%",
  },
  marginAll: {
    margin: "10px",
  },
  center: {
    height: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
  },
  card: {
    width: "30rem",
  },
};

export default function Portfolio() {
  console.log(Projects);
  return (
    <div className='container mb-4 mt-4'>
      <h2>Portfolio</h2>
      <p>Following area my works so far.</p>
      <div className='row'>
        {/* project1 */}
        <div className='col' style={styles.marginAll}>
          <div className='card' style={styles.card}>
            <img
              src={ParkTalk}
              className='card-img-top'
              alt={Projects.ParkTalk.imageAlt}
            />
            <Project {...Projects.ParkTalk} />
          </div>
        </div>
        {/* project2 */}
        <div className='col' style={styles.marginAll}>
          <div className='card' style={styles.card}>
            <img
              src={NoteTaker}
              className='card-img-top'
              alt={Projects.NoteTaker.imageAlt}
            />
            <Project {...Projects.NoteTaker} />
          </div>
        </div>
        {/* <div className='w-100'></div> */}
        <div className='col' style={styles.marginAll}>
          <div className='card' style={styles.card}>
            <img
              src={WeatherDashboard}
              className='card-img-top'
              alt={Projects.WeatherDashboard.imageAlt}
            />
            <Project {...Projects.WeatherDashboard} />
          </div>
        </div>
        {/* project4 */}
        <div className='col' style={styles.marginAll}>
          <div className='card' style={styles.card}>
            <img
              src={MealMatch}
              className='card-img-top'
              alt={Projects.MealMatch.imageAlt}
            />
            <Project {...Projects.MealMatch} />
          </div>
        </div>
      </div>
    </div>
  );
}
