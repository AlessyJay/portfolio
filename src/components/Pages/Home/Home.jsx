import React from "react";
import Dev from "../../../Pictures/Dev2.png";
import circle from "../../../Pictures/blueCircle.png";
import ReactTypingEffect from "react-typing-effect";

function Home() {
  return (
    <div className="HomePage">
      <div className="homeInfo">
        <h1>Welcome to my portfolio</h1>
        <ReactTypingEffect
          className="typingEffect"
          text={[`Junior fullstack developer.`]}
          speed={80}
          eraseSpeed={50}
        />
      </div>
      <img src={Dev} alt="Dev" className="devImg" />
      <img src={circle} alt="blue circle" className="blueCircle" />
    </div>
  );
}

export default Home;
