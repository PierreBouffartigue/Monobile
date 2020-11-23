import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonGrid, IonRow, IonCol} from '@ionic/react';
import React, { useState } from 'react';

class Plate {
    public card1: Card = new Card("Test","blue", 2);
    public player1: Player = new Player("player1");
    change() {
        this.card1.state.price = 50;
    }
    render() {
        const fun = (cards: number[]) => {
            const col = [];
            for (let i = 0; i < 6; i++) {
                if (cards[i] !== -1)
                    col.push(<IonCol>
                        <IonButton color="primary">{cards[i]}</IonButton>
                        {(() => {
                            if (this.player1.pos === cards[i]) {
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
                        return fun([0, 1, 2, 3, 4, 5]);
                    }) ()}
                </IonRow>

                <IonRow>
                    { (() => {
                        return fun([24, -1, -1, -1, -1, 6]);
                    }) ()}
                </IonRow>

                <IonRow>
                    { (() => {
                        return fun([23, -1, -1, -1, -1, 7]);
                    }) ()}
                </IonRow>

                <IonRow>
                    { (() => {
                        return fun([22, -1, -1, -1, -1, 8]);
                    }) ()}
                </IonRow>

                <IonRow>
                    { (() => {
                        return fun([21, -1, -1, -1, -1, 9]);
                    }) ()}
                </IonRow>

                <IonRow>
                    { (() => {
                        return fun([20, -1, -1, -1, -1, 10]);
                    }) ()}
                </IonRow>

                <IonRow>
                    { (() => {
                        return fun([19, -1, -1, -1, -1, 11]);
                    }) ()}
                </IonRow>

                <IonRow>
                    { (() => {
                        return fun([18, 17, 16, 15, 14, 13, 12]);
                    }) ()}
                </IonRow>
            </IonGrid>
        );
    }
}

class Card {
    public state: { name: string; color: string; price: number };

    constructor(name: string, color: string, price: number) {
        this.state = {name: name, color: color, price: price};
    }

    render() {
        return (
            <IonButton color="primary">
                <IonText>{this.state.name}</IonText>
                {this.state.price === 1000 ? (
                    <IonText>yes 1000</IonText>
                ) : (
                    <IonText>no</IonText>
                )}
            </IonButton>
        );
    }

    change() {
        this.state.price = 70
    }
}

class Player {
    public name: string;
    public pos: number;
    public money: number;
    public properties: [];

    constructor(name: string) {
        this.name = name;
        this.pos = 0;
        this.money = 100;
        this.properties = [];
    }

    move() {
        const dice = new Dice();
        this.pos += dice.roll();
        if (this.pos > 24) {
            this.pos -= 25;
        }
    }
}

class Dice {
    public d1: number = 0;
    public d2: number = 0;
    public result: number = 0;

    roll() {
        const d1 = Math.floor(Math.random() * 6) + 1;
        const d2 = Math.floor(Math.random() * 6) + 1;
        this.result = d1 + d2;
        return d1 + d2;
    }
}

export const PlayerTest: React.FC = () => {
    const [change, setChange] = useState<boolean>(false)
    const [dice1, setDice1] = useState<number>()
    const [dice2, setDice2] = useState<number>()
    const [dices, setDices] = useState<number>()
    const [plate, setPlate] = useState<Plate>(new Plate())
    const [dice, setDice] = useState<Dice>(new Dice())

    const [rollTest, setRollTest] = useState<number>(0)

    const [money, setMoney] = useState<number>(0)

    const rollDice = () => {
        const d1 = Math.floor(Math.random() * 6) + 1
        const d2 = Math.floor(Math.random() * 6) + 1
        setDice1(d1)
        setDice2(d2)
        setDices(d1 + d2)
        if (rollTest)
            setRollTest(d1 + d2)
        else
            setRollTest(d1 + d2)
    }

    const increaseMoney = () => {
        if (money) {
            setMoney(money + 10)
        }
        else {
            setMoney(10)
        }
    }
    const decreaseMoney = () => {
        if (money) {
            setMoney(money - 10)
        }
        else {
            setMoney(0)
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Monobile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonButton onClick={rollDice}>Roll</IonButton>
                    {
                        dices &&
                        <IonText>{dice1} & {dice2} = {dices}</IonText>
                    }
                    <IonGrid>
                        <IonRow>
                            <IonCol>0 {rollTest === 0 && "Player"}</IonCol>
                            <IonCol>1 {rollTest === 1 && "Player"}</IonCol>
                            <IonCol>2 {rollTest === 2 && "Player"}</IonCol>
                            <IonCol>3 {rollTest === 3 && "Player"}</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>4 {rollTest === 4 && "Player"}</IonCol>
                            <IonCol>5 {rollTest === 5 && "Player"}</IonCol>
                            <IonCol>6 {rollTest === 6 && "Player"}</IonCol>
                            <IonCol>7 {rollTest === 7 && "Player"}</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>8 {rollTest === 8 && "Player"}</IonCol>
                            <IonCol>9 {rollTest === 9 && "Player"}</IonCol>
                            <IonCol>10 {rollTest === 10 && "Player"}</IonCol>
                            <IonCol>11 {rollTest === 11 && "Player"}</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>12 {rollTest === 12 && "Player"}</IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonGrid>
                        <IonRow>
                            <IonText>Money : {money}</IonText>
                            <IonButton onClick={increaseMoney}>Increase</IonButton>
                            <IonButton onClick={decreaseMoney}>Decrease</IonButton>
                        </IonRow>
                    </IonGrid>
                </IonGrid>

                {plate.render()}

                <IonButton onClick={() => {
                    dice.roll();
                    setChange(!change)
                }}>Roll {dice.result}</IonButton>

                <IonButton onClick={() => {
                    plate.player1.move();
                    setChange(!change)
                }}>Player1 Roll {plate.player1.pos}</IonButton>

            </IonContent>
        </IonPage>
    );
};
