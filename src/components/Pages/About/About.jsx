import React from "react";
import myPic from "../../../Pictures/MyPic.jpg";

function About() {
  return (
    <div className="aboutPage">
      <img src={myPic} alt="MyPic" className="profile" />
      <div className="detail">
        <p>My Story</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam soluta
          sapiente debitis molestiae, laborum non dolor quia architecto, in
          explicabo cum odio laboriosam eaque, minima doloremque adipisci
          molestias atque ratione.
        </p>
      </div>
    </div>
  );
}

export default About;
