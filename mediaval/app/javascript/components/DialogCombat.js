import React from "react";
import "../../assets/stylesheets/dialog_combat.css"


function DialogCombat (props, capacities) {

//    const [placeholder, setPlaceholder] = React.useState('');

    return (
        <>
            <div className={"dialogCombat"}>
                <div className={"dialogCombatName"}>
                    your turn
                </div>

                <div className={"dialog_combat_ctn"}>
                    <div className={"dialog_combat_capacity_ctn"}>
                        <div className={"dialog_combat_capacity_logo_ctn"}/>

                        <div className={"dialog_combat_capacity_name_ctn"}>
                            Colère divine
                            {/*{capacities[0].name}*/}
                        </div>
                        <div className={"dialog_combat_capacity_stats_ctn"}>

                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Dégats</span>: 50
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Buff Attack</span>: 5
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Buff durée</span>: 3
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Protection</span>: 5
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Protection durée</span>: 3
                            </div>
                        </div>

                    </div>
                    <div className={"dialog_combat_capacity_ctn"}>
                        <div className={"dialog_combat_capacity_logo_ctn"}/>
                        <div className={"dialog_combat_capacity_name_ctn"}>
                            Colère divine
                            {/*{capacities[0].name}*/}
                        </div>
                        <div className={"dialog_combat_capacity_stats_ctn"}>

                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Dégats</span>: 50
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Buff Attack</span>: 5
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Buff durée</span>: 3
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Protection</span>: 5
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Protection durée</span>: 3
                            </div>
                        </div>
                    </div>
                    <div className={"dialog_combat_capacity_ctn"}>
                        <div className={"dialog_combat_capacity_logo_ctn"}/>
                        <div className={"dialog_combat_capacity_name_ctn"}>
                            Colère divine
                            {/*{capacities[0].name}*/}
                        </div>
                        <div className={"dialog_combat_capacity_stats_ctn"}>

                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Dégats</span>: 50
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Buff Attack</span>: 5
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Buff durée</span>: 3
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Protection</span>: 5
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Protection durée</span>: 3
                            </div>
                        </div>
                    </div>
                    <div className={"dialog_combat_capacity_ctn"}>
                        <div className={"dialog_combat_capacity_logo_ctn"}/>
                        <div className={"dialog_combat_capacity_name_ctn"}>
                            Colère divine
                            {/*{capacities[0].name}*/}
                        </div>
                        <div className={"dialog_combat_capacity_stats_ctn"}>

                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Dégats</span>: 50
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Buff Attack</span>: 5
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Buff durée</span>: 3
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Protection</span>: 5
                            </div>
                            <div className={"dialog_combat_capacity_stats"}>
                                <span>Protection durée</span>: 3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DialogCombat;
