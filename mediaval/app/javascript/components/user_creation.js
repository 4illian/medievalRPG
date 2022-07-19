import React from "react";
import "../../assets/stylesheets/user_creation.css"
import Dwarf from "../../assets/images/dwarf.png"
import UserCreationStatistique from "./user_creation_statistiques";


const UserCreation = () => {
    return (
        <div className={"ctn"}>

            <div className={"ctn_select"}>

                <div className={"ctn_select_player"}>
                    <div className={"ctn_select_player_dwarf"}>
                        <div className={"player player_magician"}

                        />
                    </div>

                    <div className={"ctn_infos_player"}>
                        <h2>
                            Magicien
                        </h2>
                        {/*<p>*/}
                        {/*    Combat a distance*/}
                        {/*</p>*/}
                        <UserCreationStatistique strength={4} vitality={5} dex={7} resistance={4} intel={10}/>
                    </div>
                </div>


                <div className={"ctn_select_player"}>
                    <div className={"ctn_select_player_dwarf"}>
                        <div className={"player player_dwarf"}

                        />
                    </div>

                    <div className={"ctn_infos_player"}>
                        <h2>
                            Guerrier
                        </h2>
                        {/*<p>*/}
                        {/*    Spécialisée dans le combat ou la guerre.*/}
                        {/*</p>*/}
                        <UserCreationStatistique strength={10} vitality={7} dex={3} resistance={8} intel={2}/>
                    </div>
                </div>

                <div className={"ctn_select_player"}>
                    <div className={"ctn_select_player_dwarf"}>
                        <div className={"player player_ninja"}

                        />
                    </div>

                    <div className={"ctn_infos_player"}>
                        <h2>
                            Ninja
                        </h2>
                        {/*<p>*/}
                        {/*    Spécialisée la vitesse et la discretion.*/}
                        {/*</p>*/}
                        <UserCreationStatistique strength={7} vitality={5} dex={10} resistance={5} intel={3}/>
                    </div>
                </div>

                <div className={"ctn_select_player"}>
                    <div className={"ctn_select_player_dwarf"}>
                        <div className={"player player_zob"}
                        />
                    </div>

                    <div className={"ctn_infos_player"}>
                        <h2>
                            Zob
                        </h2>
                        {/*<p>*/}
                        {/*    Il sert à rien, mais il est courageux.*/}
                        {/*</p>*/}
                        <UserCreationStatistique strength={4} vitality={4} dex={4} resistance={4} intel={4}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserCreation;
