import {Dice} from "./Dice";
import {Card} from "./Card";
import {Plate} from "./Plate";
import React from "react";
import { IonButton, IonGrid, IonLabel, IonRow } from "@ionic/react";

export class Player {
    public name: string;
    public pos: number;
    public money: number;
    public properties: Card[];
    public isJailed: boolean;
    public turnJailed: number;

    constructor(name: string, isJailed: boolean) {
        this.name = name;
        this.pos = 1;
        this.money = 100;
        this.properties = [];
        this.isJailed = isJailed;
        this.turnJailed = 0;
    }

    jail(player: Player) {
        if (player.pos == 7) {
            player.isJailed = true;
        }
    }

    removeJail(player: Player) {
        const dice = new Dice();
        if (dice.rollPrison()) {
            player.isJailed = false;
            return true
        } else {
            return false
        }
    }

    move(player: Player, plate: Plate) {
        const dice = new Dice();
        if (player.isJailed) {
            console.log("coucou")
        } else {
            player.pos += dice.roll();
            if (player.pos > 24) {
                plate.depart(player);
                player.pos -= 24;
            }
            console.log(player.pos)
            player.jail(player)
        }
        // if (dice.rollPrison()) {
        //     this.pos += dice.roll();
        //     if (this.pos > 24) {
        //         this.pos -= 24;
        //     }
        // } else {
        //     plate.nextPlayer()
        // }
        
    }

    buyCard(card: Card) {
        if (this.money >= card.price) {
            this.decreaseMoney(card.price);
            this.properties.push(card);
        }
    }

    giveMoneyPlayer(player: Player, nb: number) {
        player.increaseMoney(nb);
        this.decreaseMoney(nb);
    }

    increaseMoney(nb: number) {
        this.money += nb;
    }

    decreaseMoney(nb: number) {
        this.money -= nb;
        if (this.money < 0) {
            this.money = 0;
        }
    }

    renderChoice() {
        return(
            <IonGrid>
                <IonButton color="primary">
                    test
                </IonButton>
            </IonGrid>
        );
    }
}
