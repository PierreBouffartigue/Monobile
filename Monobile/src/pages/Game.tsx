import React, {useState} from "react";
import {
    IonButton, IonApp,
    IonButtons,
    IonCol,
    IonContent,
    IonHeader,
    IonIcon,
    IonRow,
    IonTitle,
    IonToolbar, IonBadge,
    IonGrid, IonPage, IonAlert, IonFooter,
} from "@ionic/react";
import {ROUTE_PROFILE} from "../nav/Routes";
import {personOutline} from "ionicons/icons";
import { ROUTE_HOME } from '../nav/Routes'

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

    caseRender(cases: number[]) {
        const col = [];
        for (let i = 0; i < cases.length; i++) {
            if (cases[i] === 0) {
                col.push(<IonCol><b>Monobile</b></IonCol>);
            }
            else if (cases[i] !== -1) {
                let classCol = "case_"+cases[i]
                if (this.cards.find((x) => x.pos === cases[i])) {
                    classCol += " card";
                }
                if (cases[i] === 3 || cases[i] === 9 || cases[i] === 15 || cases[i] === 21) {
                    classCol += "luckCard"
                }
                col.push(
                    <IonCol id={"case_"+cases[i]} className={classCol}>
                        <button className={"case_"+cases[i]}><img
                            src={ this.images[cases[i]-1] }
                            alt={cases[i].toString()}/></button>
                        <IonGrid>
                            <IonRow className={"pawns case_"+cases[i]}>

                            </IonRow>
                        </IonGrid>
                    </IonCol>
                );
            }
            else {
                col.push(<IonCol></IonCol>);
            }
        }
        return col;
    }

    nextPlayer() {
        this.playerTurn++
        if (this.playerTurn > this.players.length - 1) {
            this.playerTurn = 0;
        }
        // Ia turn
        if (this.playerTurn !== 0) {
            this.playerBtn(false, false, false);
            // Ia action
            if (!this.players[this.playerTurn].lost) {
                setTimeout(() => {
                    this.players[this.playerTurn].move(this);
                }, 2000);
            }
            else {
                this.nextPlayer();
            }
        }
        // Player turn
        if (this.playerTurn === 0) {
            this.playerBtn(true, false, false);
        }
    }

    playerBtn(btnRollB: boolean, btnActionsB: boolean, btnEndTurnB: boolean) {
        const btnRoll = document.getElementById("btnRoll");
        const btnActions = document.getElementById("btnActions");
        const btnEndTurn = document.getElementById("btnEndTurn");
        if (btnRoll && btnActions && btnEndTurn) {
            if (btnRollB)
                btnRoll.setAttribute("disabled", "false");
            else
                btnRoll.setAttribute("disabled", "true");
            if (btnActionsB)
                btnActions.setAttribute("disabled", "false");
            else
                btnActions.setAttribute("disabled", "true");
            if (btnEndTurnB)
                btnEndTurn.setAttribute("disabled", "false");
            else
                btnEndTurn.setAttribute("disabled", "true");
        }
    }

    luckCard(player :Player) {
        const fun1 = () => {
            player.money += 20;
        }
        const fun2 = () => {
            player.money -= 20;
        }
        const fun = [fun1(), fun2()]
        return fun[Math.floor(Math.random()*fun.length)];
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
        const btnRoll = document.getElementById("btnRoll");
        const btnEndTurn = document.getElementById("btnEndTurn");
        if (btnRoll) {
            btnRoll.setAttribute("disabled", "true");
        }
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
            // Double
            if (dice.d1 === dice.d2) {
                this.doubleCount++;
                // Go to jail
                if (this.doubleCount === 3) {
                    this.pos = 7;
                    this.isJailed = true;
                    this.pawn(document.querySelector(".pawns.case_"+this.pos));
                    this.doubleCount = 0;
                    plate.nextPlayer();
                }
                else {
                    this.pos += diceRoll;
                    if (this.pos > 24) {
                        this.pos -= 24;
                        this.money += 50;
                    }
                    this.pawn(document.querySelector(".pawns.case_"+this.pos));
                    // Player
                    if (this.playerId === 1) {
                        if (plate.cards.find(x => x.pos === this.pos)) {
                            plate.playerBtn(true, true, false)
                        }
                        else {
                            plate.playerBtn(true, false, false)
                        }
                    }
                    // Ia
                    else if (this.playerId !== 1) {
                        //Buy

                        // Ia move again
                        setTimeout(() => {
                            this.move(plate)
                        }, 2000);
                    }

                }
            }
            else {
                // Move
                this.pos += diceRoll;
                if (this.pos > 24) {
                    this.pos -= 24;
                    this.money += 50;
                }
                this.pawn(document.querySelector(".pawns.case_"+this.pos));
                this.doubleCount = 0;
                // Player
                if (this.playerId === 1) {
                    if (plate.cards.find(x => x.pos === this.pos)) {
                        plate.playerBtn(false, true, true)
                    }
                    else {
                        plate.playerBtn(false, false, true)
                    }
                }
                // Ia
                else if (this.playerId !== 1) {
                    plate.nextPlayer();
                }
            }
        }
    }

    pawn(el: Element | null) {
        // Delete previous pawn
        const pawnDel = document.getElementById("pawn_player"+this.playerId);
        if (pawnDel) { pawnDel.remove() }
        if (el) {
            // Create pawn
            let pawn = document.createElement("ion-badge");
            pawn.id = "pawn_player"+this.playerId;
            pawn.color = "dark";
            if (this.isJailed) {
                pawn.style.color = "red";
            }
            else {
                pawn.style.color = "white";
            }
            pawn.textContent = this.playerId.toString();
            // Add pawn
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
    const [plate, setPlate] = useState<Plate>(new Plate())
    const [showBegin, setShowBegin] = useState(true);
    const [showCard, setShowCard] = useState(false);
    const [showLuckCard, setShowLuckCard] = useState(false);
    const [showTour, setShowTour] = useState(false);
    const [change, setChange] = useState<boolean>(false);

    const visible = () => {
        let doc = document.getElementById("tabBar");
        doc!.style.visibility = "visible";
    }

    const hidden = () => {
        let doc = document.getElementById("tabBar");
        doc!.style.visibility = "hidden";
    }

    window.onload = visible;
    const text = "< Back"

    return (
        <IonApp>
            <IonHeader>
                <IonToolbar color="primary">
                <IonButtons slot="start">
                        <IonButton href={(ROUTE_HOME)} onClick={() => {
                            hidden()
                        }}>
                            {text}
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Monobile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow className="ion-align-items-start">
                        { (() => {
                            return plate.caseRender([7, 8, 9, 10, 11, 12, 13]);
                        }) ()}
                    </IonRow>

                    <IonRow className="ion-align-items-center">
                        { (() => {
                            return plate.caseRender([6, -1, -1, -1, -1, -1, 14]);
                        }) ()}
                    </IonRow>

                    <IonRow className="ion-align-items-center">
                        { (() => {
                            return plate.caseRender([5, -1, -1, -1, -1, -1, 15]);
                        }) ()}
                    </IonRow>

                    <IonRow className="ion-align-items-center">
                        { (() => {
                            return plate.caseRender([4, -1, -1, 0, -1, -1, 16]);
                        }) ()}
                    </IonRow>

                    <IonRow className="ion-align-items-center">
                        { (() => {
                            return plate.caseRender([3, -1, -1, -1, -1, -1, 17]);
                        }) ()}
                    </IonRow>

                    <IonRow className="ion-align-items-center">
                        { (() => {
                            return plate.caseRender([2, -1, -1, -1, -1, -1, 18]);
                        }) ()}
                    </IonRow>

                    <IonRow className="ion-align-items-end">
                        { (() => {
                            return plate.caseRender([1, 24, 23, 22, 21, 20, 19]);
                        }) ()}
                    </IonRow>
                </IonGrid>

                <div id="playerBtn">
                    { (() => {
                        let btn = []
                        btn.push(
                            <IonButton id="btnRoll" onClick={() => {
                                plate.players[0].move(plate);
                            }}>Roll</IonButton>
                        );
                        btn.push(
                            <IonButton id="btnActions" onClick={() => {
                                setShowCard(true);
                            }}>Actions</IonButton>
                        )
                        btn.push(
                            <IonButton id="btnEndTurn" onClick={() => {
                                plate.players[0].doubleCount = 0;
                                plate.nextPlayer();
                            }}>End turn</IonButton>
                        );
                        return btn;
                    }) ()}

                    <IonAlert
                        isOpen={showBegin}
                        onDidDismiss={() => setShowBegin(false)}
                        header={'Monobile'}
                        buttons={[
                            {
                                text: 'Begin',
                                handler: () => {
                                    plate.playerBtn(true, false, false);
                                    for (let i = 0; i < plate.players.length; i++) {
                                        plate.players[i].pawn(document.querySelector(".pawns.case_"+plate.players[i].pos))
                                    }
                                    setChange(!change)
                                }
                            }

                        ]}
                    />

                    <IonAlert
                        isOpen={showCard}
                        onDidDismiss={() => setShowCard(false)}
                        header={'Choose what to do :'}
                        buttons={[
                            {
                                text: 'Buy',
                                handler: () => {

                                }
                            },
                            {
                                text: 'Cancel',
                                handler: () => {

                                }
                            }

                        ]}
                    />

                    <IonAlert
                        isOpen={showTour}
                        onDidDismiss={() => setShowTour(false)}
                        header={'Where do you go ?'}
                        inputs={[
                            {
                                name: 'pos',
                                type: 'number',
                                min: 1,
                                max: 24,
                                placeholder: '19'
                            }
                        ]}
                        buttons={[
                            {
                                text: 'Go',
                                handler: data => {
                                    if (parseInt(data.pos) < 19) {
                                        plate.players[0].money += 50
                                    }
                                    plate.players[0].pos = parseInt(data.pos)
                                    plate.players[0].pawn(document.querySelector(".pawns.case_"+plate.players[0].pos));
                                }
                            },
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: () => {
                                }
                            }


                        ]}
                    />

                </div>
                <IonFooter>
                    <IonToolbar>
                        <p><b>Pseudonyme:</b> Player1</p>
                        <p><b>Mon argent:</b> {plate.players[0].money}</p>
                        <p><b>Argent Player2:</b> {plate.players[1].money}</p>
                        <p><b>Argent Player3:</b> {plate.players[2].money}</p>
                        <p><b>Argent Player4:</b> {plate.players[3].money}</p>
                    </IonToolbar>
                </IonFooter>
            </IonContent>
        </IonApp>
    )
}
export default Game;