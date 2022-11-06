import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Card from "./Components/Card/Card";

import Capybara from "./assets/capybara.jpg";
import Communism from "./assets/communism.jpg";
import CryingCat from "./assets/crying-cat.jpg";
import Elon from "./assets/elon.jpg";
import Hank from "./assets/hank.jpg";
import Invest from "./assets/invest.jpg";
import Joker from "./assets/joker.jpg";
import Mike from "./assets/mike.jpg";
import TerrifiedPingu from "./assets/terrified-pingu.jpg";
import Elmo from "./assets/elmo.jpg";
import TradeOffer from "./assets/trade-offer.jpg";
import Pepe from "./assets/pepe.jpg";
import "./App.css";

const MEME_LIST = [
  {
    image: Capybara,
    text: "Capybara Meme",
  },
  {
    image: Communism,
    text: "Suddenly Communist",
  },
  {
    image: CryingCat,
    text: "Sad Cat",
  },
  {
    image: Elon,
    text: "Elon Musk Smoking Weed",
  },
  {
    image: Hank,
    text: "Hanking Happy/Angry",
  },
  {
    image: Invest,
    text: "Invest Button",
  },
  {
    image: Joker,
    text: "You get what you fucking deserve",
  },
  {
    image: Mike,
    text: "Walter, Put Your Dick Away",
  },
  {
    image: TerrifiedPingu,
    text: "Terrified Pingu",
  },
  {
    image: Elmo,
    text: "Elmo Rise",
  },
  {
    image: TradeOffer,
    text: "Trade Offer",
  },
  {
    image: Pepe,
    text: "Pepe Sad",
  },
];

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <React.Fragment>
      <NavBar score={score} highScore={highScore} />
      <main className="cards-flex">
        <Card
          memelist={MEME_LIST}
          score={score}
          highScore={highScore}
          onChangeScore={setScore}
          onChangeHighScore={setHighScore}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
