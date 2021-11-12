import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="navItems">
          <h1>My portfolio</h1>
          <div className="navLists">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>

              <Link to="/About">
                <li>About</li>
              </Link>

              <Link to="/Education">
                <li>Education</li>
              </Link>

              <Link to="/Skills">
                <li>Skills</li>
              </Link>

              <Link to="/Contacts">
                <li>Contacts</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
