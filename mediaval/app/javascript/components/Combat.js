import React from "react";


function Combat() {

    // player = 0
    // IA = 1
    let currentPlayerTurn = 0

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


    function TurnBasedCheck() {
        if (currentPlayerTurn === 0) PlayerTurnProcess()
        else IATurnProcess()
    }

    function PlayerTurnProcess() {
        // print interface with capacity
        PlayerDisplayInterface()

    }

    function PlayerAttack() {
        if (currentAttack.type === 0) { // is ATTACK

            // set buff player
            let buffDamage = 0
            for (var i = 0; i < currentPlayerBuff.buff.length; i++) {
                buffDamage += currentPlayerBuff.buff[i].buff
            }

            // set protection ennemy
            let buffEnnemyDefense = 0
            for (var j = 0; j < currentEnnemyBuff.protection.length; i++) {
                buffEnnemyDefense += currentEnnemyBuff.protection[i].protection
            }

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
            currentPlayerBuff.protection = currentAttack.protection
        }


        if (currentAttack.type === 2) {  // is BUFF
            // update buff before set new buffs
            BuffUpdate()

            // set current attack buff
            player.attack = player.attack + currentAttack.buff
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


    function EnnemyAttack() {

        CombatEndCheck()
    }


    function IADisplayInterface() {
        // display "adversaire en cours de reflexion ..."
        return {}
    }

    function PlayerDisplayInterface() {
        // display capacity && inventory

        // onclick capacity ->
        // print attack used to ennemy in chat
        PrintPlayerTurnText()
    }


    function IATurnProcess() {

        IADisplayInterface()

        // PROCESS WITH FIX IA AND

        // remove life in current player in ennemy attack
        EnnemyAttack()
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
                IATurnProcess()
            }
        } else {
            if (player.life < 1) {
                // player dead
                EndCombatDefeat()
            } else {
                currentPlayerTurn--
                PlayerTurnProcess()
            }
        }
    }

    function EndCombatVictory() {
        // display message victory and leave combat
    }


    function EndCombatDefeat() {
        // display message defeat and retry
    }


    // start combat process
    TurnBasedCheck()

    return (
        <div>
            dede
            {/*<Dialog name={"Raoul"} content={"yoooo je suis raoul le caoul"} />*/}

            {/*<div className={"player_game_start"} />*/}
        </div>
    );

}

export default Combat;
