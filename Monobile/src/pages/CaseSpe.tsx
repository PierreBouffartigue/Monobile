import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonGrid, IonRow, IonCol, IonLabel, IonModal, IonAlert} from '@ionic/react';
import React, { useState } from 'react';
import {Player} from "../class/Player";
import {Plate} from "../class/Plate";
import { pricetagsOutline } from 'ionicons/icons';

export const CaseSpe: React.FC = () => {
    const [player, setPlayer] = useState<Player>(new Player("player2",false))
    const [plate, setTest] = useState<Plate>(new Plate()) 
    const [change, setChange] = useState<boolean>(false)
    const [showAlert, setShowAlert] = useState(false);
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Monobile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonLabel>{player.money}</IonLabel>
                    <IonButton onClick={() => {
                        if (player.isJailed) {
                            if (player.turnJailed == 3) {
                                player.isJailed = false;
                                plate.players[plate.playerTurn].move(player,plate);
                                player.turnJailed = 0;
                                plate.nextPlayer();
                                setChange(!change)
                            } else {
                                setShowAlert(true)
                            }
                        } else {
                            plate.players[plate.playerTurn].move(player,plate);
                            plate.nextPlayer();
                            setChange(!change)
                        }
                }}>Player1 Roll </IonButton>
                </IonGrid> 
            </IonContent>
            <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Choose what to do'}
        buttons={[
          {
            text: 'Do nothing',
            handler: () => {
                plate.nextPlayer();
                player.turnJailed += 1;
                setChange(!change)
            }
          },
          {
            text: 'Roll for double',
            handler: () => {
                if (plate.players[plate.playerTurn].removeJail(player)) {
                    plate.players[plate.playerTurn].move(player,plate);
                    plate.nextPlayer();
                    setChange(!change)
                } else {
                    plate.nextPlayer();
                    player.turnJailed += 1;
                    setChange(!change)
                }
            }
          },
          {
            text: 'Pay 50',
            handler: () => {
                if (player.money >= 50) {
                    player.money -= 50;
                    player.isJailed = false;
                    plate.players[plate.playerTurn].move(player,plate);
                    plate.nextPlayer();
                    setChange(!change)
                }
            }
          }

        ]}
      />
        </IonPage>
    );
};

