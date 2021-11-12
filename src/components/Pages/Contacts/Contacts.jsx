import React from "react";
import facebook from "../../../Pictures/facebook.png";
import instragram from "../../../Pictures/instragram.png";
import github from "../../../Pictures/github.png";
import linkedin from "../../../Pictures/linkedin.png";

function Contacts() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "64px" }}>Social Contract</h1>
      <div className="contactIcon">
        <img src={facebook} alt="socialImg" className="socialImg" />
        <img src={instragram} alt="socialImg" className="socialImg" />
        <img src={github} alt="socialImg" className="socialImg" />
        <img src={linkedin} alt="socialImg" className="socialImg" />
      </div>
      <hr />

      <h1 style={{ textAlign: "center", fontSize: "64px" }}>
        Write me directly
      </h1>
      <div className="contractForm">
        <form className="emailForm">
          <div className="left">
            <input type="text" />
            <input type="text" />
          </div>
          <div className="right">
            <input type="text" />
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
