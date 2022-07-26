import React from "react";
import DialogCombat from "./DialogCombat";


function Combat() {

    // player = 0
    // IA = 1
    let currentPlayerTurn = 0
    let countTurnPlayed = 0
    let isBoss = false

    let player = {
        "life": 0,
        "attack": 0,
        "defense": 0
    } // get store player statistics

    let ennemy = {
        "life": 0,
        "attack": 0,
        "defense": 0
    } // get enemy statistics

    let currentAttack = {
        "damage": 0,
        "protection": 0,
        "protectionDuration": 0,
        "buff": 0,
        "buffDuration": 0
    } // get all of current attack


    let currentPlayerBuff = {
        "protection": [],
        "buff": [],
    }
    let currentEnnemyBuff = {
        "protection": [],
        "buff": [],
    }

    let playerCooldown = 0
    let ennemyCooldown = 0

    function TurnBasedCheck() {
        if (currentPlayerTurn === 0) PlayerDisplayInterface()
        else IATurnProcess()
    }

    // function PlayerDisplayInterface() {
    //     // print interface with capacity
    //     PlayerDisplayInterface()
    //
    // }

    function PlayerAttack() {
        if (currentAttack.type === 0) { // is ATTACK

            // set buff player
            let buffDamage = getCurrentPlayerBuff()

            // set protection ennemy
            let buffEnnemyDefense = getCurrentEnnemyProtection()

            // set damage
            ennemy.life = (ennemy.life + ennemy.defense + buffEnnemyDefense)
                - (currentAttack.damage + player.attack + buffDamage)

            // update buff before set new buffs
            BuffUpdate()

            // set buff attack
            if (currentAttack.protection > 0) {
                let json = JSON(currentAttack.protectionDuration, currentAttack.protection)
                currentPlayerBuff.protection.push(json)
            }

            if (currentAttack.buff > 0) {
                let json = JSON(currentAttack.buffDuration, currentAttack.buff)
                currentPlayerBuff.buff.push(json)
            }
        }


        if (currentAttack.type === 1) { // is PROTECTION
            // update buff before set new buffs
            BuffUpdate()

            // set current attack buff
            let json = JSON(currentAttack.protectionDuration, currentAttack.protection)
            currentPlayerBuff.protection.push(json)
        }


        if (currentAttack.type === 2) {  // is BUFF
            // update buff before set new buffs
            BuffUpdate()

            // set current attack buff
            let json = JSON(currentAttack.buffDuration, currentAttack.buff)
            currentPlayerBuff.buff.push(json)
        }

        CombatEndCheck()
    }


    function BuffUpdate() {
        var buffObject = {}
        if (currentPlayerTurn === 0) buffObject = currentPlayerBuff
        else buffObject = currentEnnemyBuff

        for (var i = 0; i < buffObject.buff.length; i++) {
            if (buffObject.buff[i].buffDuration > 1)
                buffObject.buff[i].buffDuration = buffObject.buff[i].buffDuration--
            else delete buffObject.buff[i]
        }

        for (var k = 0; k < buffObject.protection.length; k++) {
            if (buffObject.protection[i].protectionDuration > 1)
                buffObject.protection[i].protectionDuration = buffObject.buff[i].protectionDuration--
            else delete buffObject.protection[i]
        }

        if (currentPlayerTurn === 0) currentPlayerBuff = buffObject
        else currentEnnemyBuff = buffObject
    }


    function EnnemyAttack(attack) {
        currentAttack = attack
        // display dialog " Ennemy attack ....."


        if (currentAttack.type === 0) { // is ATTACK

            // set buff player
            let buffDamage = getCurrentEnnemyBuff()

            // set protection ennemy
            let buffPlayerDefense = getCurrentPlayerProtection()

            // set damage
            player.life = (player.life + player.defense + buffPlayerDefense)
                - (currentAttack.damage + ennemy.attack + buffDamage)

            // update buff before set new buffs
            BuffUpdate()

            // set buff attack
            if (currentAttack.protection > 0) {
                let json = JSON(currentAttack.protectionDuration, currentAttack.protection)
                currentEnnemyBuff.protection.push(json)
            }

            if (currentAttack.buff > 0) {
                let json = JSON(currentAttack.buffDuration, currentAttack.buff)
                currentEnnemyBuff.buff.push(json)
            }
        }


        if (currentAttack.type === 1) { // is PROTECTION
            // update buff before set new buffs
            BuffUpdate()

            // set current attack buff
            let json = JSON(currentAttack.protectionDuration, currentAttack.protection)
            currentEnnemyBuff.protection.push(json)
        }


        if (currentAttack.type === 2) {  // is BUFF
            // update buff before set new buffs
            BuffUpdate()

            // set current attack buff
            let json = JSON(currentAttack.buffDuration, currentAttack.buff)
            currentEnnemyBuff.buff.push(json)
        }

        if(currentAttack.cooldown > 0)
            ennemyCooldown = currentAttack.cooldown
        CombatEndCheck()
    }


    function PrintEnnemyTurnText() {
        // display "adversaire en cours de reflexion ..."
        // need await 3 secondes
    }

    function PlayerDisplayInterface() {

        if(playerCooldown > 0) {
            PrintCooldownMessage(player)
            playerCooldown--
            currentPlayerTurn++
        }

        // display capacity && inventory




        // onclick capacity ->
        // print attack used to ennemy in chat
        PrintPlayerTurnText()
    }

    function PrintCooldownMessage(concernUser) {

    }

    function IATurnProcess() {
        if(ennemyCooldown > 0) {
            PrintCooldownMessage(ennemy)
            ennemyCooldown--
            currentPlayerTurn--
        }

        PrintEnnemyTurnText()

        // check if one of the abilities can end the fight
        for (var i = 0; i < ennemy.capacity.size; i++) {
            if ((getCurrentPlayerProtection() + player.defense + player.life)
                <= (getCurrentEnnemyBuff() + ennemy.attack + ennemy.capacity[i].damage)) {
                // play this capacity
            }
        }

        // if not
        if (!isBoss) {

            let jet = getRandomInt(11) // 0 - 10

            if (countTurnPlayed < 3) { // favorise le buff
                if (jet > 4) {
                    if (jet > 7) {
                        // buff protec
                        for (var i = 0; ennemy.capacity.length; i++) {
                            if (ennemy.capacity[i].protection > 0) {
                                EnnemyAttack(ennemy.capacity[i])
                            }
                        }
                    } else {
                        // buff attack
                        for (var i = 0; ennemy.capacity.length; i++) {
                            if (ennemy.capacity[i].buff > 0) {
                                EnnemyAttack(ennemy.capacity[i])
                            }
                        }
                    }
                } else {
                    //attack
                    var attackCapacities = []
                    for (var i = 0; ennemy.capacity.length; i++) {
                        if (ennemy.capacity[i].attack > 0) {
                            attackCapacities.push(i)
                        }
                    }
                    if (attackCapacities.length > 0) {
                        if (jet > 2) {
                            EnnemyAttack(ennemy.capacity[attackCapacities[0]])
                        } else {
                            EnnemyAttack(ennemy.capacity[attackCapacities[1]])
                        }
                    } else {
                        EnnemyAttack(ennemy.capacity[attackCapacities[0]])
                    }
                }

            } else { // classic process / 0-5 attack / 6-8 buff / 9-10 protec

                if (ennemy.life <= 35) {
                    // protec or attack

                    if (jet < 6) {
                        // launch attack
                        var attackCapacities = []
                        for (var i = 0; ennemy.capacity.length; i++) {
                            if (ennemy.capacity[i].attack > 0) {
                                attackCapacities.push(i)
                            }
                        }
                        if (attackCapacities.length > 0) {
                            if (jet > 3) {
                                EnnemyAttack(ennemy.capacity[attackCapacities[0]])
                            } else {
                                EnnemyAttack(ennemy.capacity[attackCapacities[1]])
                            }
                        } else {
                            EnnemyAttack(ennemy.capacity[attackCapacities[0]])
                        }
                    } else {
                        // launch protection
                        for (var i = 0; ennemy.capacity.length; i++) {
                            if (ennemy.capacity[i].protection > 0) {
                                EnnemyAttack(ennemy.capacity[i])
                            }
                        }
                    }
                } else {
                    // attack or buff or protec
                    if (jet <= 5) {
                        // attack
                        var attackCapacities = []
                        for (var i = 0; ennemy.capacity.length; i++) {
                            if (ennemy.capacity[i].attack > 0) {
                                attackCapacities.push(i)
                            }
                        }
                        if (attackCapacities.length > 0) {
                            if (jet > 2) {
                                EnnemyAttack(ennemy.capacity[attackCapacities[0]])
                            } else {
                                EnnemyAttack(ennemy.capacity[attackCapacities[1]])
                            }
                        } else {
                            EnnemyAttack(ennemy.capacity[attackCapacities[0]])
                        }
                    } else if (jet <= 8 && jet > 5) {
                        // buff
                        for (var i = 0; ennemy.capacity.length; i++) {
                            if (ennemy.capacity[i].buff > 0) {
                                EnnemyAttack(ennemy.capacity[i])
                            }
                        }
                    } else {
                        // protec
                        for (var i = 0; ennemy.capacity.length; i++) {
                            if (ennemy.capacity[i].protection > 0) {
                                EnnemyAttack(ennemy.capacity[i])
                            }
                        }
                    }
                }
            }
        }

        // remove life in current player in ennemy attack
    }


    function PrintPlayerTurnText() {
        // print "Player utilise CAPACITY sur MOB"


        // remove life in current ennemy in player attack
        PlayerAttack()


    }

    function CombatEndCheck() {
        if (currentPlayerTurn === 0) {
            if (ennemy.life < 1) {
                // ennemy dead
                EndCombatVictory()
            } else {
                currentPlayerTurn++
                countTurnPlayed++
                IATurnProcess()
            }
        } else {
            if (player.life < 1) {
                // player dead
                EndCombatDefeat()
            } else {
                currentPlayerTurn--
                countTurnPlayed++
                PlayerTurnProcess()
            }
        }
    }

    function EndCombatVictory() {
        console.log("PLAYER VICTORY")
        // display message victory and leave combat
    }


    function EndCombatDefeat() {
        console.log("PLAYER DEFEAT")
        // display message defeat and retry
    }

    function getCurrentEnnemyBuff() {
        var buffDamage = 0
        for (var i = 0; i < currentEnnemyBuff.buff.length; i++) {
            buffDamage += currentEnnemyBuff.buff[i].buff
        }
        return buffDamage
    }

    function getCurrentEnnemyProtection() {
        var buffProtection = 0
        for (var i = 0; i < currentEnnemyBuff.protection.length; i++) {
            buffProtection += currentEnnemyBuff.protection[i].protection
        }
        return buffProtection
    }

    function getCurrentPlayerBuff() {
        var buffDamage = 0
        for (var i = 0; i < currentPlayerBuff.buff.length; i++) {
            buffDamage += currentPlayerBuff.buff[i].buff
        }
        return buffDamage
    }

    function getCurrentPlayerProtection() {
        var buffProtection = 0
        for (var i = 0; i < currentPlayerBuff.protection.length; i++) {
            buffProtection += currentPlayerBuff.protection[i].protection
        }
        return buffProtection
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // start combat process
    TurnBasedCheck()

    return (
        <div className={"ctn"}>
            <DialogCombat capacities={"yoooo je suis raoul le caoul"} />
            {/*<div className={"player_game_start"} />*/}
        </div>
    );

}

export default Combat;
