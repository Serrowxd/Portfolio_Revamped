import React from "react";
import { Link } from "react-router-dom";

const LeftNav = (props) => {
  return (
    <div className={props.nav ? "smol_nav" : "hidden_nav"} id="side_nav">
      <div className="smol_buttons">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/projects">
          <p>Projects</p>
        </Link>
        <Link to="/Life">
          <p>Life</p>
        </Link>
        <Link to="/Contact">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default LeftNav;
