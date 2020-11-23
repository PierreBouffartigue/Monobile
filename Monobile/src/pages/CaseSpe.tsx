import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonGrid, IonRow, IonCol, IonLabel} from '@ionic/react';
import React, { useState } from 'react';

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
    
    depart() {
        this.money += 50
    }
}

export const CaseSpe: React.FC = () => {
    const [player, setPlayer] = useState<Player>(new Player("player2"))
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
                    player.depart();
                    setChange(!change)
                    }}>testFunc</IonButton>
                    <IonLabel>{player.money+50}</IonLabel>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

