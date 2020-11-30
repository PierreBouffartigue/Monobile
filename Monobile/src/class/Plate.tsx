import {IonButton, IonCol, IonGrid, IonRow, IonText} from "@ionic/react";
import React from "react";
import {Card} from "./Card";
import {Player} from "./Player";

export class Plate {
    public card1: Card = new Card("Test","blue", 2);
    public cards: Card[] = [new Card("Test","blue", 2), new Card("Test","blue", 2)];
    public player1: Player = new Player("player1");
    public players: Player[] = [new Player("player1"), new Player("player2"), new Player("player3"), new Player("player4")]
    public playerTurn = this.players[0];

    jail(){

    }

    depart(player: Player) {
        player.money += 50

    }
    change() {
        this.card1.state.price = 50;
    }
    render() {
        const fun = (cards: number[]) => {
            const col = [];
            for (let i = 0; i < cards.length; i++) {
                if (cards[i] !== -1)
                    col.push(<IonCol>
                        <IonButton color="primary">{cards[i]}</IonButton>
                        {(() => {
                            if (this.players[0].pos === cards[i]) {
                                return <IonText>Player1</IonText>
                            }
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