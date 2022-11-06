import React, { useEffect, useState } from "react";
import "./Card.css";

const Modal = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "5rem 10rem",
          backgroundColor: "#0e5e6f",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <p
          style={{
            fontSize: "2.8rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#f2deba",
          }}
        >
          You took an L
        </p>
        <button
          style={{
            cursor: "pointer",
            padding: "1rem 2rem",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "1.2rem",
            textTransform: "uppercase",
            backgroundColor: "#f2deba",
          }}
          onClick={() => {
            props.onChangeLost(false);
            props.onChangeScore(0);

            props.onChangeSelectedMeme([]);
          }}
        >
          Replay
        </button>
      </div>
    </div>
  );
};

const Card = (props) => {
  const { memelist } = props;

  const [selectedMeme, setSelectedMeme] = useState([]);
  const [lost, setLost] = useState(false);

  function shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  useEffect(() => {
    const flexContainer = document.querySelector(".cards-flex");
    const cardContainer = document.querySelectorAll(".card-container");

    cardContainer.forEach((card) => {
      card.remove();
    });

    shuffleArray(Array.from(cardContainer)).map((card) => {
      flexContainer.append(card);
    });
  }, [props.score]);

  const changeImages = (e) => {
    if (e.target.parentElement.className === "card-container") {
      const currentCard = e.target.parentElement;

      if (!selectedMeme.includes(currentCard.id)) {
        setSelectedMeme((prevCard) => [...prevCard, currentCard.id]);
        props.onChangeScore(props.score + 1);
      } else {
        setLost(true);
        if (props.score > props.highScore) {
          props.onChangeHighScore(props.score);
        }
      }
    }
  };

  return (
    <React.Fragment>
      {memelist.map((meme) => (
        <div
          className="card-container"
          id={meme.text}
          key={meme.text}
          onClick={changeImages}
        >
          <img src={meme.image} className="meme-image" />
          <p className="meme-title">{meme.text}</p>
        </div>
      ))}
      {lost ? (
        <Modal
          lost={lost}
          onChangeLost={setLost}
          onChangeSelectedMeme={setSelectedMeme}
          onChangeScore={props.onChangeScore}
        />
      ) : null}
    </React.Fragment>
  );
};

export default Card;
