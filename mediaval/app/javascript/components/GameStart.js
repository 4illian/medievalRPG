import React, { useEffect, useState, useRef } from "react";

import "../../assets/stylesheets/game_start.css";
import Dialog from "./dialog";
import useStore from "../components/store";
import instance from "./instance";
const GameStart = ({ token }) => {
  const current_player = useStore((state) => state.current_player);
  const [dialogs, setDialogs] = useState(null);
  const [currentEnvironment, setCurrentEnvironment] = useState("city");

  const [gameMode, setGameMode] = useState("dialog");
  const checkPlayerImage = (player) => {
    let playerImage = "player_game_start ";

    if (player.name === "Magicien") playerImage += "player_magicien";
    else if (player.name === "Guerrier") playerImage += "player_guerrier";
    else if (player.name === "Ninja") playerImage += "player_ninja";
    else if (player.name === "Zob") playerImage += "player_zob";
    return playerImage;
  };

  useEffect(() => {
    const G = async () =>
      await instance(token)
        .get(`/dialog/1`)
        .then((res) => setDialogs(res.data));
    G();
  }, []);

  return (
    <div className={"ctn " + currentEnvironment}>
      {gameMode === "dialog" ? (
        <Dialog
          setGameMode={setGameMode}
          name={dialogs?.[2]}
          content={dialogs?.[1] || ""}
        />
      ) : (
        <div className="choice_quete">
          <button onClick={() => setCurrentEnvironment("city")}>city</button>
          <button onClick={() => setCurrentEnvironment("forest")}>
            forest
          </button>
          <button onClick={() => setCurrentEnvironment("caverne")}>
            cavern
          </button>
        </div>
      )}

      <div className={checkPlayerImage(current_player)} />
    </div>
  );
};

export default GameStart;
