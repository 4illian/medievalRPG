import React from "react";

import "../../assets/stylesheets/game_start.css";
import Dialog from "./dialog";

const GameStart = () => {
  return (
    <div className={"ctn"}>
      <Dialog name={"Raoul"} content={"yoooo je suis raoul le caoul"} />

      <div className={"player_game_start"} />
    </div>
  );

};

export default GameStart;
