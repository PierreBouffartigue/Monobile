import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonGrid, IonRow, IonCol, IonLabel} from '@ionic/react';
import React, { useState } from 'react';
import {Player} from "../class/Player";
import {Plate} from "../class/Plate";

export const CaseSpe: React.FC = () => {
    const [player, setPlayer] = useState<Player>(new Player("player2"))
    const [test, setTest] = useState<Plate>(new Plate()) 
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
                        test?.depart(player);
                        setChange(!change)
                    }}>testFunc</IonButton>
                    <IonLabel>{player.money}</IonLabel>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

