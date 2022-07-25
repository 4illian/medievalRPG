import React, { useEffect } from "react";
import "../../assets/stylesheets/user_creation.css";
import Dwarf from "../../assets/images/dwarf.png";
import UserCreationStatistique from "./UserCreationStatistiques";
import instance from "./instance";
import useStore from "../components/store";

const selector = (state) => ({
  setCurrentPlayer: state.setCurrentPlayer,
});
const UserCreation = ({ token, user, classe }) => {
  //   const setCurrentPlayer = useStore((state) => state.setCurrentPlayer);
  const { setCurrentPlayer } = useStore(selector);

  const createPlayer = async (player) => {
    await instance(token)
      .post("/user_creation", {
        name: player.name,
        user_id: user.id,
        classe_id: player.classe_id,
      })
      .then((res) => {
        setCurrentPlayer(res.data);
      });

    window.location.replace("http://127.0.0.1:3000/game_start");
  };
  const updatePlayer = (player) => {
    instance(token).put(`/user_creation/${player.id}`, {
      name: "player updated",
      user_id: user.id,
      classe_id: 1,
      artefact_id: 1,
    });
  };
  return (
    <div className={"ctn"}>
      <div className={"ctn_select"}>
        <div
          className={"ctn_select_player"}
          onClick={(e) => {
            createPlayer({
              classe_id: classe.filter((clas) => clas.name === "Magicien")[0]
                .id,
              name: "Magicien",
            });
          }}
        >
          <div className={"ctn_select_player_dwarf"}>
            <div className={"player player_magician"} />
          </div>

          <div className={"ctn_infos_player"}>
            <h2>Magicien</h2>
            {/*<p>*/}
            {/*    Combat a distance*/}
            {/*</p>*/}
            <UserCreationStatistique
              strength={4}
              vitality={110}
              dex={7}
              resistance={4}
              intel={10}
            />
          </div>
        </div>

        <div
          className={"ctn_select_player"}
          onClick={(e) => {
            createPlayer({
              classe_id: classe.filter((clas) => clas.name === "Guerrier")[0]
                .id,
              name: "Guerrier",
            });
          }}
        >
          <div className={"ctn_select_player_dwarf"}>
            <div className={"player player_dwarf"} />
          </div>

          <div className={"ctn_infos_player"}>
            <h2>Guerrier</h2>
            {/*<p>*/}
            {/*    Spécialisée dans le combat ou la guerre.*/}
            {/*</p>*/}
            <UserCreationStatistique
              strength={10}
              vitality={140}
              dex={3}
              resistance={8}
              intel={2}
            />
          </div>
        </div>
        <div
          className={"ctn_select_player"}
          onClick={(e) => {
            createPlayer({
              classe_id: classe.filter((clas) => clas.name === "Ninja")[0].id,
              name: "Ninja",
            });
          }}
        >
          <div className={"ctn_select_player_dwarf"}>
            <div className={"player player_ninja"} />
          </div>

          <div className={"ctn_infos_player"}>
            <h2>Ninja</h2>
            {/*<p>*/}
            {/*    Spécialisée la vitesse et la discretion.*/}
            {/*</p>*/}
            <UserCreationStatistique
              strength={7}
              vitality={100}
              dex={10}
              resistance={5}
              intel={3}
            />
          </div>
        </div>
        <div
          className={"ctn_select_player"}
          onClick={(e) => {
            createPlayer({
              classe_id: classe.filter((clas) => clas.name === "Zob")[0].id,
              name: "Zob",
            });
          }}
        >
          <div className={"ctn_select_player_dwarf"}>
            <div className={"player player_zob"} />
          </div>

          <div className={"ctn_infos_player"}>
            <h2>Zob</h2>
            {/*<p>*/}
            {/*    Il sert à rien, mais il est courageux.*/}
            {/*</p>*/}
            <UserCreationStatistique
              strength={4}
              vitality={95}
              dex={4}
              resistance={4}
              intel={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCreation;
