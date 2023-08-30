import React from "react";

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
    width: "100%",
  },
};

export default function Project(props) {
  const { title, comment, repo, url} = props;
  return (
    <div className='card' style={styles.card}>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{comment}</p>
        <a href={url} target='blank' className='card-link'>
          Link to deployed app
        </a>
        <a href={repo} target='blank' className='card-link'>
          GitHub link
        </a>
      </div>
    </div>
  );
}
