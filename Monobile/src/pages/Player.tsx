import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonGrid, IonRow, IonCol} from '@ionic/react';
import React, { useState } from 'react';

export const Player: React.FC = () => {
    const [dice1, setDice1] = useState<number>()
    const [dice2, setDice2] = useState<number>()
    const [dices, setDices] = useState<number>()
    const [player, setPlayer] = useState<number>()
    const [money, setMoney] = useState<number>()
    const roll = () => {
        const d1 = Math.floor(Math.random() * 6) + 1
        const d2 = Math.floor(Math.random() * 6) + 1
        setDice1(d1)
        setDice2(d2)
        setDices(d1 + d2)
        if (player)
            setPlayer(d1 + d2)
        else
            setPlayer(d1 + d2)
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
                <IonButton onClick={roll}>Roll</IonButton>
                {
                    dices &&
                    <IonText>{dice1} & {dice2} = {dices}</IonText>
                }
                <IonGrid>
                    <IonRow>
                        <IonCol>0 {player === 0 && "Player"}</IonCol>
                        <IonCol>1 {player === 1 && "Player"}</IonCol>
                        <IonCol>2 {player === 2 && "Player"}</IonCol>
                        <IonCol>3 {player === 3 && "Player"}</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>4 {player === 4 && "Player"}</IonCol>
                        <IonCol>5 {player === 5 && "Player"}</IonCol>
                        <IonCol>6 {player === 6 && "Player"}</IonCol>
                        <IonCol>7 {player === 7 && "Player"}</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>8 {player === 8 && "Player"}</IonCol>
                        <IonCol>9 {player === 9 && "Player"}</IonCol>
                        <IonCol>10 {player === 10 && "Player"}</IonCol>
                        <IonCol>11 {player === 11 && "Player"}</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>12 {player === 12 && "Player"}</IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    <IonRow>
                        <IonText>Money : {money}</IonText>
                        <IonButton onClick={increaseMoney}>Increase</IonButton>
                        <IonButton onClick={decreaseMoney}>Decrease</IonButton>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
