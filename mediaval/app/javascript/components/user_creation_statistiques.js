import React from "react";
import "../../assets/stylesheets/user_creation.css"
import Dwarf from "../../assets/images/dwarf.png"


function UserCreationStatistique (props, strength, vitality, dex, resistance, intel) {
    return (
        <>
            <h3
                title={"Ses statistiques seront augmentables par le biais des artefactes récuperables durant diverses quêtes."}
            >
                Statistiques
            </h3>

            <div className={"ctn_infos_stats"}>

                <div className={"ctn_infos_stats_default ctn_infos_stats_strength"}/>
                <div>
                    Force:
                </div>
                <div className={"ctn_infos_stats_number_default"}>
                    {props.strength}
                </div>
                <div className={"ctn_infos_stats_default ctn_infos_stats_vitality"}/>
                <div>
                    Vitalité:
                </div>
                <div className={"ctn_infos_stats_number_default"}>
                    {props.vitality}
                </div>
                <div className={"ctn_infos_stats_default ctn_infos_stats_dex"}/>
                <div>
                    Dextérité:
                </div>
                <div className={"ctn_infos_stats_number_default"}>
                    {props.dex}
                </div>
                <div className={"ctn_infos_stats_default ctn_infos_stats_resistance"}/>
                <div>
                    Résistance:
                </div>
                <div className={"ctn_infos_stats_number_default"}>
                    {props.resistance}
                </div>
                <div className={"ctn_infos_stats_default ctn_infos_stats_intel"}/>
                <div>
                    Intelligence:
                </div>

                <div className={"ctn_infos_stats_number_default"}>
                    {props.intel}
                </div>
            </div>
        </>
    )
}

export default UserCreationStatistique;
