import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonGrid, IonRow, IonCol} from '@ionic/react';
import React, { useState } from 'react';
import {Plate} from "../class/Plate";

export const PlayerTest: React.FC = () => {
    const [change, setChange] = useState<boolean>(false)
    const [dice1, setDice1] = useState<number>()
    const [dice2, setDice2] = useState<number>()
    const [dices, setDices] = useState<number>()
    const [plate, setPlate] = useState<Plate>(new Plate())

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
                    plate.players[0].move();
                    setChange(!change)
                }}>Player1 Roll {plate.players[0].pos}</IonButton>

            </IonContent>
        </IonPage>
    );
};
