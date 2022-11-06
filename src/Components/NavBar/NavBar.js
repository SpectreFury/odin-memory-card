import React from "react";
import Score from "../Score/Score";

import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">KNOW YOUR MEME</h1>
      <Score score={props.score} highScore={props.highScore} />
    </nav>
  );
};

export default NavBar;
