import React from "react";
import ParkTalk from "../../assets/parkTalk.png";
import NoteTaker from "../../assets/note-taker-note-page.png";

const styles = {
  headerStyle: {
    background: 'red',
  },
  headingStyle: {
    fontSize: '100px',
  },
  imageStyle: {
    fontSize: '50%',
  },
  marginAll: {
    margin: '10px',
  },
  center: {
    height: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
  },
};

export default function Portfolio() {
  return (
    <div className='container mb-4 mt-4'>
      <h2>Portfolio</h2>
      <p>Following area my works so far.</p>
      <div className="row">
      <div className="col card text-white" style={styles.center}>
      <img className="card-img" src={ParkTalk} alt="Card sample" style={styles.marginAll}/>
  <div className="card-img-overlay">
    <h5 className="card-title">Park Talk</h5>
    <a href="https://github.com/meekunn1/Park-Talk" target='blank' className="badge badge-pill badge-light">An blog app where users can talk about Parks</a>
    <p className="card-text">Aimed for Family with young children</p>
  </div>
  </div>
  <div className="col card text-white" style={styles.center}>
      <img className="card-img" src={NoteTaker} alt="Card sample" style={styles.marginAll}/>
  <div className="card-img-overlay">
    <h5 className="card-title">Note Taker</h5>
    <a href="https://github.com/meekunn1/Park-Talk" target='blank' className="badge badge-pill badge-light">An blog app where users can talk about Parks</a>
    <p className="card-text">Aimed for Family with young children</p>
  </div>
</div>
  <div className="w-100"></div>
  <div className="col">col</div>
  <div className="col">col</div>
</div>
    </div>
  );
}
