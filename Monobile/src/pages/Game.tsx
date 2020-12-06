import React from "react";
import {
    IonButton, IonApp,
    IonButtons,
    IonCol,
    IonContent,
    IonHeader,
    IonIcon,
    IonRow,
    IonTitle,
    IonToolbar,
    IonGrid, IonPage,
} from "@ionic/react";
import {ROUTE_PROFILE} from "../nav/Routes";
import {personOutline} from "ionicons/icons";

class Plate {
    public players: Player[] = [new Player(1, "player1", false), new Player(2, "player2", false), new Player(3, "player3",false), new Player(4,"player4",false)];
    public cards: Card[] = [
        new Card("red1", "red",2),
        new Card("red2", "red", 3),
        new Card("red3", "red", 5),
        new Card("red4", "red", 6),
        new Card("green1", "green", 8),
        new Card("green2", "green", 9),
        new Card("green3", "green", 11),
        new Card("green4", "green", 12),
        new Card("blue1", "blue", 14),
        new Card("blue2", "blue", 15),
        new Card("blue3", "blue", 17),
        new Card("blue4", "blue", 18),
        new Card("yellow1", "yellow", 20),
        new Card("yellow2", "yellow", 21),
        new Card("yellow3", "yellow", 23),
        new Card("yellow4", "yellow", 24),
    ];
    public playerTurn: number = 0;
    public images: string[] = [
        "https://cdn.discordapp.com/attachments/415509967253274635/784894301669818378/depart.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897742421753886/red.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897747542474752/red2.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784893339304067092/interrogation.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897833810657280/red3.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897736985149440/red4.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784894348641828894/jail.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897745156440064/green.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897749892071514/green2.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784893339304067092/interrogation.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897837062160414/green3.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897740219613224/green4.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784895293363454002/trophy-pngrepo-com.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897743885566033/blue.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897748591837234/blue2.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784893339304067092/interrogation.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897835492573184/blue3.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897738135437322/blue4.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784894952076869712/plane.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897746020073483/yellow.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897751296376872/yellow2.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784893339304067092/interrogation.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897838601338921/yellow3.png",
        "https://cdn.discordapp.com/attachments/415509967253274635/784897741326385152/yellow4.png"
    ]

    nextPlayer() {
        this.playerTurn++
        if (this.playerTurn > this.players.length - 1) {
            this.playerTurn = 0;
        }
        if (this.playerTurn !== 0) {
            if (!this.players[this.playerTurn].lost) {
                setTimeout(() => {
                    this.players[this.playerTurn].move(this);
                }, 2000);
            }
            else {
                this.nextPlayer();
            }
        }
    }

    playerButton(rollBool: boolean, detailBool: boolean, endTurnBool: boolean) {
        const divBtn = document.getElementById("playerBtn");
        if (divBtn) {
            const rollBtn = document.getElementById("rollBtn");
            if (rollBtn) { rollBtn.remove() }
            if (rollBool) {
                let roll = document.createElement("button");
                roll.id = "rollBtn";
                roll.onclick = () => {
                    const double = this.players[this.playerTurn].move(this);
                    if (double) {
                        this.playerButton(true, true, false);
                    }
                    else if (this.players[this.playerTurn].isJailed) {
                        this.playerButton(false, false, true);
                    }
                    else {
                        this.playerButton(false, true, true);
                    }
                }
                roll.textContent = "Roll";
                divBtn.append(roll);
            }

            const detailBtn = document.getElementById("detailBtn");
            if (detailBtn) { detailBtn.remove() }
            if (detailBool) {
                let detail = document.createElement("button");
                detail.id = "detailBtn";
                detail.onclick = () => {
                }
                detail.textContent = "Detail";
                divBtn.append(detail);
            }

            const endTurnBtn = document.getElementById("endTurnBtn");
            if (endTurnBtn) { endTurnBtn.remove() }
            if (endTurnBool) {
                let endTurn = document.createElement("button");
                endTurn.id = "endTurnBtn";
                endTurn.onclick = () => {
                    this.players[0].doubleCount = 0;
                    this.nextPlayer();
                    this.playerButton(true, false, false);
                }
                endTurn.textContent = "End turn";
                divBtn.append(endTurn);
            }
        }
    }

    render() {
        const fun = (cases: number[]) => {
            const col = [];
            for (let i = 0; i < cases.length; i++) {
                if (cases[i] !== -1) {
                    col.push(
                        <IonCol id={"case_"+cases[i]} className={"case_"+cases[i]}>
                            <button className={"case_"+cases[i]}><img
                                src={ this.images[cases[i]-1] }
                                alt={cases[i].toString()}/></button>
                            <IonGrid>
                                <IonRow className={"pawns case_"+cases[i]}></IonRow>
                            </IonGrid>
                        </IonCol>
                    );
                }
                else
                    col.push(<IonCol></IonCol>);
            }
            return col;
        }
        return(
            <div>
                <IonGrid>
                    <IonRow className="ion-align-items-start">
                        { (() => {
                            return fun([7, 8, 9, 10, 11, 12, 13]);
                        }) ()}
                    </IonRow>

                    <IonRow className="ion-align-items-center">
                        { (() => {
                            return fun([6, -1, -1, -1, -1, -1, 14]);
                        }) ()}
                    </IonRow>

                    <IonRow className="ion-align-items-center">
                        { (() => {
                            return fun([5, -1, -1, -1, -1, -1, 15]);
                        }) ()}
                    </IonRow>

                    <IonRow className="ion-align-items-center">
                        { (() => {
                            return fun([4, -1, -1, -1, -1, -1, 16]);
                        }) ()}
                    </IonRow>

                    <IonRow className="ion-align-items-center">
                        { (() => {
                            return fun([3, -1, -1, -1, -1, -1, 17]);
                        }) ()}
                    </IonRow>

                    <IonRow className="ion-align-items-center">
                        { (() => {
                            return fun([2, -1, -1, -1, -1, -1, 18]);
                        }) ()}
                    </IonRow>

                    <IonRow className="ion-align-items-end">
                        { (() => {
                            return fun([1, 24, 23, 22, 21, 20, 19]);
                        }) ()}
                    </IonRow>
                </IonGrid>

                { (() => {
                    let playerPawn;
                    playerPawn = document.querySelector(".pawns.case_1");
                    for (let p = 0; p < this.players.length; p++) {
                        if (this.players[p].pos === 1 && playerPawn) {
                            this.players[p].pawn(playerPawn);
                        }
                    }
                }) ()}
                <div id="playerBtn"></div>
                { (() => { this.playerButton(true, false, false) }) ()}
            </div>
        );
    }
}

class Player {
    public playerId: number;
    public name: string;
    public lost: boolean;
    public pos: number;
    public money: number;
    public properties: Card[];
    public isJailed: boolean;
    public turnJailed: number;
    public doubleCount: number;

    constructor(playerId: number, name: string, isJailed: boolean) {
        this.playerId = playerId;
        this.name = name;
        this.lost = false;
        this.pos = 1;
        this.money = 100;
        this.properties = [];
        this.isJailed = isJailed;
        this.turnJailed = 0;
        this.doubleCount = 0;
    }

    move(plate: Plate) {
        const dice = new Dice();
        // In jail
        if (this.isJailed) {
            const diceRoll = dice.rollPrison();
            console.log(this.playerId+" dice="+dice.d1+"+"+dice.d2+"="+diceRoll)
            if (diceRoll) {
                this.isJailed = false;
                this.turnJailed = 0;
                this.pos += dice.d1 + dice.d2;
                this.pawn(document.querySelector(".pawns.case_"+this.pos));
                plate.nextPlayer();
            }
            else {
                this.turnJailed++;
                plate.nextPlayer();
            }
        }
        // Move
        else {
            const diceRoll = dice.roll()
            console.log(this.playerId+" dice="+dice.d1+"+"+dice.d2+"="+diceRoll)
            if (dice.d1 === dice.d2) {
                this.doubleCount++;
            }
            // Go to jail
            if (this.doubleCount === 3) {
                this.pos = 7;
                this.isJailed = true;
                this.pawn(document.querySelector(".pawns.case_"+this.pos));
                this.doubleCount = 0;
                plate.nextPlayer();
                return false;
            }
            else {
                this.pos += diceRoll;
                if (this.pos > 24) {
                    this.pos -= 24;
                }
                this.pawn(document.querySelector(".pawns.case_"+this.pos))
                // Ia
                if (this.playerId !== 1) {
                    if (dice.d1 === dice.d2) {
                        setTimeout(() => {
                            this.move(plate)
                        }, 2000);
                    }
                    else {
                        this.doubleCount = 0;
                        plate.nextPlayer();
                    }
                }
                return dice.d1 === dice.d2;
            }
        }
    }

    pawn(el: Element | null) {
        const pawnDel = document.getElementById("pawn_player"+this.playerId);
        if (pawnDel) { pawnDel.remove() }
        if (el) {
            let pawn = document.createElement("div");
            pawn.id = "pawn_player"+this.playerId;
            if (this.isJailed) {
                pawn.style.color = "red";
            }
            else {
                pawn.style.color = "black";
            }
            pawn.textContent = this.playerId.toString();
            el.append(pawn);
        }
    }
}

class Dice {
    public d1: number = 0;
    public d2: number = 0;

    roll() {
        this.d1 = Math.floor(Math.random() * 6) + 1;
        this.d2 = Math.floor(Math.random() * 6) + 1;
        return this.d1 + this.d2;
    }

    rollPrison() {
        this.d1 = Math.floor(Math.random() * 6) + 1;
        this.d2 = Math.floor(Math.random() * 6) + 1;
        return this.d1 === this.d2;
    }
}

class Card {
    public cardId: string;
    public color: string;
    public pos: number;
    public owner: Player | null;
    public priceBuy: number;
    public tax: number;


    constructor(cardId: string, color: string, pos: number) {
        this.cardId = cardId;
        this.color = color;
        this.pos = pos;
        this.owner = null;
        this.priceBuy = 10;
        this.tax = 10;
        this.render();
    }

    render() {
        const caseCard = document.getElementById("case_"+this.pos);
        if (caseCard) {
            caseCard.classList.add("card")
        }
    }

    detail() {

    }
}

export const Game: React.FC = () => {
    const plate = new Plate();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Monobile</IonTitle>
                    <IonButtons slot="end">
                        <IonButton href={ROUTE_PROFILE}>
                            <IonIcon icon={personOutline}/>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {plate.render()}
            </IonContent>
        </IonPage>
    )
}