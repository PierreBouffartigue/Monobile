import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonGrid, IonRow, IonCol, IonLabel} from '@ionic/react';
import React, { useState } from 'react';
import {Player} from "../class/Player";
import {Plate} from "../class/Plate";

export const CaseSpe: React.FC = () => {
    const [player, setPlayer] = useState<Player>(new Player("player2",false))
    const [plate, setTest] = useState<Plate>(new Plate()) 
    const [change, setChange] = useState<boolean>(false)
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Monobile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonButton onClick={() => {
                        plate?.depart(player);
                        setChange(!change)
                    }}>testFunc</IonButton>
                    <IonLabel>{player.money}</IonLabel>
                    <IonButton onClick={() => {
                    plate.players[plate.playerTurn].move(player,plate);
                    plate.nextPlayer();
                    setChange(!change)
                }}>Player1 Roll </IonButton>
                </IonGrid> 
                <IonButton style={{visibility:"hidden"}}>
                    test
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

