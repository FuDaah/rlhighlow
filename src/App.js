import "./App.css";
import { useEffect, useState } from "react";
import "./index.css";
import beast from "./pictures/beast.jpg";
import monkey from "./pictures/monkey.jpg";
import rise from "./pictures/rise.jpg";
import first from "./pictures/first.jpg";
import atomic from "./pictures/atomic.jpg";
import jstn from "./pictures/jstn.jpg";
import garret from "./pictures/GarrettG.jpg";
import squishy from "./pictures/Squishy.jpg";
import Jknaps from "./pictures/JKnaps.jpg";
import Chicago from "./pictures/Chicago.jpg";
import ayyjayy from "./pictures/AYYJAYY.jpg";
import Sypical from "./pictures/Sypical.jpg";
import Torment from "./pictures/Torment.jpg";
import Comm from "./pictures/Comm.jpg";
import Arsenal from "./pictures/Arsenal.jpg";
import retals from "./pictures/Retals.jpg";
import Daniel from "./pictures/Daniel.jpg";
import Joyo from "./pictures/Joyo.jpg";
import Vatria from "./pictures/Vatira.jpg";
import ApparentlyJack from "./pictures/ApparentlyJack.jpg";
import Joreuz from "./pictures/Joreuz.jpg";
import Scrubkiller from "./pictures/Scrub_Killa.jpg";
import Marc from "./pictures/MaRc_By_8.jpg";
import Extra from "./pictures/Extra.png";
import RelatingWave from "./pictures/RelatingWave.jpg";
import Metsanauris from "./pictures/Metsanauris.jpg";
import Seikoo from "./pictures/Seikoo.jpg";
import Catalysm from "./pictures/Catalysm.jpg";
import ivn from "./pictures/ivn.jpg";
import Rizex45 from "./pictures/Rizex45.jpg";
import CJCJ from "./pictures/CJCJ.jpg";
import Kamii from "./pictures/Kamii.png";
import Fever from "./pictures/Fever.png";
import Superlachie from "./pictures/Superlachie.png";
import Bananahead from "./pictures/Bananahead.png";
import Scrub from "./pictures/Scrub.png";
import Sad from "./pictures/secret.png";
import nxghtt from "./pictures/secret.png";
import math from "./pictures/secret.png";
import CaioTG1 from "./pictures/CaioTG1.jpg";
import caard from "./pictures/Caard.jpg";
import yanxnz from "./pictures/yanxnz.jpg";
import Olpix from "./pictures/placeholder.png";
import Burn from "./pictures/placeholder.png";
import mikan from "./pictures/placeholder.png";




function App() {
  const [playerId, setPlayerId] = useState(0);
  const [userChoice, setUserChoice] = useState("noChoice");
  const [userPoints, setUserPoints] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [playGame, setPlayGame] = useState(false);
  const [mainMenu, setMainMenu] = useState(true);
  const [playerIdCurrent, setPlayerIdCurrent] = useState(0);

  const firstGen = () => {
    const randomId = Math.floor(Math.random() * 45) + 1;
    const randomId2 = Math.floor(Math.random() * 45) + 1;
    setPlayerIdCurrent(randomId);
    setPlayerId(randomId2);
    setPlayGame(true);
    setMainMenu(false);
  };

  const reset = () => {
    window.location.reload();
    setMainMenu(true);
  };

  const choices = ["higher", "lower"];

  useEffect(() => {
    if (userChoice === "higher" && playerId <= playerIdCurrent) {
      generateNewPlayer();
      const updatedUserPoints = userPoints + 1;
      setUserPoints(updatedUserPoints);
      setUserChoice("noChoice");
    }
    if (userChoice === "lower" && playerId >= playerIdCurrent) {
      generateNewPlayer();
      const updatedUserPoints = userPoints + 1;
      setUserPoints(updatedUserPoints);
      setUserChoice("noChoice");
    }
    if (
      (userChoice === "higher" && playerId > playerIdCurrent) ||
      (userChoice === "lower" && playerId < playerIdCurrent)
    ) {
      setGameOver(true);
      setPlayGame(false);
    }
  });
  const handleOnClick = (choice) => {
    setUserChoice(choice);
  };
  const newPlayer = (playerIdCurrent) => {
    playerIdCurrent = playerId;
    setPlayerIdCurrent(playerIdCurrent);
  };
  const generateNewPlayer = () => {
    const randomId = Math.floor(Math.random() * 45) + 1;
    setPlayerId(randomId);
    newPlayer();
  };
  const [players] = useState([
    {
      id: 1,
      name: "BeastMode",
      rating: 1.297,
      picture: beast,
    },
    {
      id: 2,
      name: "M0nkey M00n",
      rating: 1.246,
      picture: monkey,
    },
    {
      id:3,
      name: "rise.",
      rating: 1.147,
      picture: rise,
    },
    {
      id: 4,
      name: "Firstkiller",
      rating: 1.132,
      picture: first,
    },
    {
      id: 5,
      name: "Atomic",
      rating: 1.100,
      picture: atomic,
    },
    {
      id: 6,
      name: "Superlachie",
      rating: 1.092,
      picture: Superlachie,
    },
    {
      id: 7,
      name: "AYYJAYY",
      rating: 1.076,
      picture: ayyjayy,
    },
    {
      id: 8,
      name: "Vatria",
      rating: 1.058,
      picture: Vatria,
    },
    {
      id: 9,
      name: "Joyo",
      rating: 1.058,
      picture: Joyo,
    },
    {
      id: 10,
      name: "Comm",
      rating: 1.052,
      picture: Comm,
    },
    {
      id: 11,
      name: "jstn.",
      rating: 1.025,
      picture: jstn
    },
    {
      id: 12,
      name: "Seikoo",
      rating: 1.023,
      picture: Seikoo,
    },
    {
      id: 13,
      name: "GarrettG",
      rating: 1.021,
      picture: garret,
    },
    {
      id: 14,
      name: "yanxnz",
      rating: 1.020,
      picture: yanxnz,
    },
    {
      id: 15,
      name: "ApparentlyJack",
      rating: 1.020,
      picture: ApparentlyJack
    },
    {
      id: 16,
      name: "Scrub Killa",
      rating: 1.011,
      picture: Scrubkiller
    },
    {
      id: 17,
      name: "Jknaps",
      rating: 1.009,
      picture: Jknaps,
    },
    {
      id: 18,
      name: "Joreuz",
      rating: 0.998,
      picture: Joreuz,
    },
    {
      id: 19,
      name: "Daniel",
      rating: 0.997,
      picture: Daniel,
    },
    {
      id: 20,
      name: "ivn",
      rating: 0.981,
      picture: ivn,
    },
    {
      id: 21,
      name: "Squishy",
      rating: 0.976,
      picture: squishy,
    },
    {
      id: 22,
      name: "CaioTG1",
      rating: 0.961,
      picture: CaioTG1,
    },
    {
      id: 23,
      name: "Sad",
      rating: 0.958,
      picture: Sad,
    },
    {
      id: 24,
      name: "Bananahead",
      rating: 0.955,
      picture: Bananahead,
    },
    {
      id: 25,
      name: "math",
      rating: 0.938,
      picture: math,
    },
    {
      id: 26,
      name: "Catalysm",
      rating: 0.924,
      picture: Catalysm,
    },
    {
      id: 27,
      name: "Sypical",
      rating: 0.923,
      picture: Sypical,
    },
    {
      id: 28,
      name: "Fever",
      rating: 0.913,
      picture: Fever,
    },
    {
      id: 29,
      name: "Chicago",
      rating: 0.907,
      picture: Chicago,
    },
    {
      id: 30,
      name: "Extra",
      rating: 0.897,
      picture: Extra,
    },
    {
      id: 31,
      name: "CJCJ",
      rating: 0.863,
      picture: CJCJ,
    },
    {
      id: 32,
      name: "Rizex45",
      rating: 0.863,
      picture: Rizex45,
    },
    {
      id: 33,
      name: "retals",
      rating: 0.842,
      picture: retals,
    },
    {
      id: 34,
      name: "caard",
      rating: 0.832,
      picture: caard,
    },
    {
      id: 35,
      name: "Metsanauris",
      rating: 0.826,
      picture: Metsanauris,
    },
    {
      id: 36,
      name: "Kamii",
      rating: 0.816,
      picture: Kamii,
    },
    {
      id: 37,
      name: "Torment",
      rating: 0.804,
      picture: Torment,
    },
    {
      id: 38,
      name: "RelatingWave",
      rating: 0.796,
      picture: RelatingWave
    },
    {
      id: 39,
      name: "nxghtt",
      rating: 0.778,
      picture: nxghtt,
    },
    {
      id: 40,
      name: "Arsenal",
      rating: 0.751,
      picture: Arsenal,
    },
    {
      id: 41,
      name: "mikan",
      rating: 0.701,
      picture: mikan,
    },
    {
      id: 42,
      name: "Scrub",
      rating: 0.698,
      picture: Scrub,
    },
    {
      id: 43,
      name: "MaRc_By_8.",
      rating: 0.647,
      picture: Marc
    },
    {
      id: 44,
      name: "Burn",
      rating: 0.639,
      picture: Burn
    },
    {
      id: 45,
      name: "Olpix",
      rating: 0.566,
      picture: Olpix,
    },
  ]);

  return (
      <div className="App">
        {mainMenu ? (
          <div className="main-menu">
            <h1>Who has the highest rating</h1>
            <p>Who was the highest rated Rocket League player at the winter major based on Octane.gg rating </p>
            <button
              className="button"
              onClick={() => firstGen(playerIdCurrent, playerId)}
            >
              Play
            </button>
            <div className="socials">
              <div className="socialCircle"></div>
              <div className="socialCircle"></div>
              <div className="socialCircle"></div>
            </div>
          </div>
        ) : (
          mainMenu
        )}
        
        {playGame ? (
          <div className="main-game">
            <div className="circle">
              VS
            </div>
            <ul className="flex-container nowrap">
              <li className="flex-item playerCurr" style={{ backgroundImage: `url(${
                              players &&
                                players
                                  .filter((player) => player.id === playerIdCurrent)
                                  .map((player) => player.picture)}`}}>
              <div className="gameStuff">
              <h1 className="playerNew">
              {players &&
              players
                .filter((player) => player.id === playerIdCurrent)
                .map((player) => player.name)}
                </h1>
                </div>
              </li>
              <li className="flex-item playerNext" style={{backgroundImage: `url(${players &&
                    players
                      .filter((player) => player.id === playerId)
                      .map((player) => player.picture)})`}}>
              <div className="gameStuff gamepos">
                <h1 className="playerNew">
                  {players &&
                    players
                      .filter((player) => player.id === playerId)
                      .map((player) => player.name)}
                </h1>
                <p> Has </p>
                <div children="button-div">
                  {choices.map((choice, index) => (
                    <button
                      className="button higherLower"
                      key={index}
                      onClick={() => handleOnClick(choice)}
                    >
                      {choice}
                    </button>
                  ))}
              Rating than{" "}
              {players &&
                players
                  .filter((player) => player.id === playerIdCurrent)
                  .map((player) => player.name)}
            </div>
            </div>
            </li>
            </ul>
            <div className="score">
              <h1>Score: {userPoints}</h1>
            </div>
          </div>
        ) : (
          playGame
        )}
        <div className="button-div">
          {gameOver && (
            <button className="button" onClick={() => reset()}>
              {" "}
              Restart Game
            </button>
          )}
          
        </div>
      </div>
  );
}

export default App;
