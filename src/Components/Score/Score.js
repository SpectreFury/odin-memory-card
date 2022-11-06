import React from "react";
import "./Score.css";

const Score = (props) => {
  return (
    <div className="score-container">
      <p className="current-score">Score {props.score}</p>
      <p className="high-score">High Score {props.highScore}</p>
    </div>
  );
};

export default Score;
