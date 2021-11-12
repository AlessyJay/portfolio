import React, { useState, useEffect } from "react";
import Coding from "../../../Pictures/Coding.svg";
import Coding2 from "../../../Pictures/Coding2.svg";
import emptyCircle from "../../../Pictures/emptyCircle.png";
import redCircle from "../../../Pictures/redCircle.png";
import { ToolData } from "../../../Service/Data";

function Skills() {
  const [scroll, setScroll] = useState(``);
  const handleScroll = () => {
    setScroll(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="header">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: "48px",
          }}
        >
          Fontend
        </h1>
      </div>
      <div className="skills">
        {ToolData.map((item) =>
          item.type === "Fontend" ? (
            <div className="card">
              <img src={item.picture} alt="item card" />
              <hr />
              <h1>{item.name}</h1>
            </div>
          ) : null
        )}
      </div>
      <img
        src={Coding}
        alt="backgroundImg"
        className="backgroundImg"
        style={{ transform: `translateY(${scroll * 0.4}px)` }}
      />
      <img
        src={emptyCircle}
        alt="backgroundImg"
        className="backgroundImg"
        style={{
          transform: `translateY(${scroll * 0.3}px)`,
          zIndex: "-2",
          width: "35%",
          left: "5%",
        }}
      />

      <hr />
      <br />
      <div className="header">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: "48px",
          }}
        >
          Backend
        </h1>
      </div>
      <div className="skills">
        {ToolData.map((item) =>
          item.type === "Backend" ? (
            <div className="card">
              <img src={item.picture} alt="item card" />
              <hr />
              <h1>{item.name}</h1>
            </div>
          ) : null
        )}
      </div>

      <hr />
      <br />
      <div className="header">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: "48px",
          }}
        >
          Other Programming Languages
        </h1>
      </div>
      <div className="skills">
        {ToolData.map((item) =>
          item.type === "OOP" ? (
            <div className="card">
              <img src={item.picture} alt="item card" />
              <hr />
              <h1>{item.name}</h1>
            </div>
          ) : null
        )}
      </div>
      <img
        src={Coding2}
        alt="backgroundImg"
        className="backgroundImg2"
        style={{ transform: `translateY(${scroll * 0.4}px)` }}
      />
      <img
        src={redCircle}
        alt="backgroundImg"
        className="backgroundImg2"
        style={{
          transform: `translateY(${scroll * 0.3}px)`,
          zIndex: "-2",
          width: "35%",
          right: "5%",
        }}
      />

      <hr />
      <br />
      <div className="header">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: "48px",
          }}
        >
          Forgotten Languages
        </h1>
      </div>
      <div className="skills">
        {ToolData.map((item) =>
          item.type === "Forgotten" ? (
            <div className="card">
              <img src={item.picture} alt="item card" />
              <hr />
              <h1>{item.name}</h1>
            </div>
          ) : null
        )}
      </div>

      <hr />
      <br />
      <div className="header">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: "48px",
          }}
        >
          Languages
        </h1>
      </div>
      <div className="skills">
        {ToolData.map((item) =>
          item.type === "Language" ? (
            <div className="card">
              <img src={item.picture} alt="item card" />
              <hr />
              <h1>{item.name}</h1>
              <h1>{item.level}</h1>
            </div>
          ) : null
        )}
      </div>
    </>
  );
}

export default Skills;
