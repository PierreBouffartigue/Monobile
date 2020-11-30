import {IonButton, IonCol, IonGrid, IonRow, IonText} from "@ionic/react";
import React from "react";
import {Card} from "./Card";
import {Player} from "./Player";

export class Plate {
    public cards: Card[] = [new Card(1, "case1", "red",10, null),
        new Card(2, "case2", "red",10, null),
    ];

    public players: Player[] = [new Player("player1"), new Player("player2"), new Player("player3"), new Player("player4")]
    public playerTurn = 0;

    jail(){

    }

    depart(player: Player) {
        player.money += 50

    }

    nextPlayer() {
        this.playerTurn++
        if (this.playerTurn > this.players.length - 1) {
            this.playerTurn = 0;
        }
    }
    render() {
        const fun = (cases: number[]) => {
            const col = [];
            for (let i = 0; i < cases.length; i++) {
                if (cases[i] !== -1)
                    col.push(<IonCol>
                        <IonButton color="primary" onClick={() => {}}>{cases[i]} {(() => {
                            if (this.cards[cases[i]-1]) {
                                return this.cards[cases[i]-1].name
                            }
                        }) ()}</IonButton>
                        {(() => {
                            const playerPos = []
                            for (let l = 0; l < this.players.length; l++) {
                                if (this.players[l].pos === cases[i]) {
                                    playerPos.push(<div><IonText>Player{l + 1}</IonText></div>);
                                }
                            }
                            return playerPos;;
                        }) ()}
                    </IonCol>)
                else
                    col.push(<IonCol></IonCol>)
            }
            return col;
        }
        return(
            <IonGrid>
                <IonRow>
                    { (() => {
                        return fun([7, 8, 9, 10, 11, 12, 13]);
                    }) ()}
                </IonRow>

                <IonRow>
                    { (() => {
                        return fun([6, -1, -1, -1, -1, -1, 14]);
                    }) ()}
                </IonRow>

                <IonRow>
                    { (() => {
                        return fun([5, -1, -1, -1, -1, -1, 15]);
                    }) ()}
                </IonRow>

                <IonRow>
                    { (() => {
                        return fun([4, -1, -1, -1, -1, -1, 16]);
                    }) ()}
                </IonRow>

                <IonRow>
                    { (() => {
                        return fun([3, -1, -1, -1, -1, -1, 17]);
                    }) ()}
                </IonRow>

                <IonRow>
                    { (() => {
                        return fun([2, -1, -1, -1, -1, -1, 18]);
                    }) ()}
                </IonRow>

                <IonRow>
                    { (() => {
                        return fun([1, 24, 23, 22, 21, 20, 19]);
                    }) ()}
                </IonRow>
            </IonGrid>
        );
    }
}