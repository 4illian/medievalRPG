import React from "react";

import "../../assets/stylesheets/game_start.css";
import Dialog from "./dialog";
import useStore from "../components/store";

const GameStart = () => {
  const current_player = useStore((state) => state.current_player);

  const checkPlayerImage = (player) => {
    let playerImage = "player_game_start ";

    if (player.name === "Magicien") playerImage += "player_magicien";
    else if (player.name === "Guerrier") playerImage += "player_guerrier";
    else if (player.name === "Ninja") playerImage += "player_ninja";
    else if (player.name === "Zob") playerImage += "player_zob";
    return playerImage;
  };

  return (
    <div className={"ctn"}>
      <Dialog name={"Raoul"} content={"yoooo je suis raoul le caoul"} />

      <div className={checkPlayerImage(current_player)} />
    </div>
  );
};

export default GameStart;
