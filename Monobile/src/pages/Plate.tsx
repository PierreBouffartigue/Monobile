import { Dice } from "../class/Dice";
import { Player } from "../class/Player";
import React, { useState, useContext } from 'react';
import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonApp
} from '@ionic/react';
import { ROUTE_PROFILE } from "../nav/Routes";
import { ROUTE_HOME } from '../nav/Routes'
import { personOutline } from "ionicons/icons";
import AppContext from '../data/app-context';

export const Plate: React.FC = () => {
    const [player] = useState<Player>(new Player("Player", false))
    const [enemy] = useState<Player>(new Player("Enemy", false))
    const dice = new Dice();
    const appCtx = useContext(AppContext)
    player.money = 50
    enemy.money = 60

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
                            console.log("test")
                        }}>
                            {text}
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Monobile</IonTitle>
                    
                </IonToolbar>
            </IonHeader>
            <IonContent className="padding" color="new">
                <IonGrid>
                    <IonRow className="ion-align-items-start">
                        <IonCol>
                            <button id="case_7" className="case_7"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784894348641828894/jail.png"
                                alt="7" /></button>
                        </IonCol>
                        <IonCol>
                            <button id="case_8" className="case_8"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897745156440064/green.png"
                                alt="8" /></button>
                        </IonCol>
                        <IonCol>
                            <button id="case_9" className="case_9"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897749892071514/green2.png"
                                alt="9" /></button>
                        </IonCol>
                        <IonCol>
                            <button id="case_10" className="case_10"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784893339304067092/interrogation.png"
                                alt="10" /></button>
                        </IonCol>
                        <IonCol>
                            <button id="case_11" className="case_11"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897837062160414/green3.png"
                                alt="11" /></button>
                        </IonCol>
                        <IonCol>
                            <button id="case_12" className="case_12"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897740219613224/green4.png"
                                alt="12" /></button>
                        </IonCol>
                        <IonCol>
                            <button id="case_13" className="case_13"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784895293363454002/trophy-pngrepo-com.png"
                                alt="13" /></button>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-align-items-center">
                        <IonCol>
                            <button id="case_6" className="case_6"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897736985149440/red4.png"
                                alt="6" /></button>
                        </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol>
                            <button id="case_14" className="case_14"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897743885566033/blue.png"
                                alt="14" /></button>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-align-items-center">
                        <IonCol>
                            <button id="case_5" className="case_5"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897833810657280/red3.png"
                                alt="5" /></button>
                        </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol>
                            <button id="case_15" className="case_15"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897748591837234/blue2.png"
                                alt="15" /></button>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-align-items-center">
                        <IonCol>
                            <button id="case_4" className="case_4"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784893339304067092/interrogation.png"
                                alt="4" /></button>
                        </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol><b>Monobile</b></IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol>
                            <button id="case_16" className="case_16"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784893339304067092/interrogation.png"
                                alt="16" /></button>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-align-items-center">
                        <IonCol>
                            <button id="case_3" className="case_3"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897747542474752/red2.png"
                                alt="3" /></button>
                        </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol>
                            <button id="case_17" className="case_17"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897835492573184/blue3.png"
                                alt="17" /></button>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-align-items-center">
                        <IonCol>
                            <button id="case_2" className="case_2"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897742421753886/red.png"
                                alt="2" /></button>
                        </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol> </IonCol>
                        <IonCol>
                            <button id="case_18" className="case_18"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897738135437322/blue4.png"
                                alt="18" /></button>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-align-items-end">
                        <IonCol>
                            <button id="case_1" className="case_1"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784894301669818378/depart.png"
                                alt="1" /></button>
                        </IonCol>
                        <IonCol>
                            <button id="case_24" className="case_24"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897741326385152/yellow4.png"
                                alt="24" /></button>
                        </IonCol>
                        <IonCol>
                            <button id="case_23" className="case_23"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897838601338921/yellow3.png"
                                alt="23" /></button>
                        </IonCol>
                        <IonCol>
                            <button id="case_22" className="case_22"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784893339304067092/interrogation.png"
                                alt="22" /></button>
                        </IonCol>
                        <IonCol>
                            <button id="case_21" className="case_21"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897751296376872/yellow2.png"
                                alt="21" /></button>
                        </IonCol>
                        <IonCol>
                            <button id="case_20" className="case_20"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784897746020073483/yellow.png"
                                alt="20" /></button>
                        </IonCol>
                        <IonCol>
                            <button id="case_19" className="case_19"><img
                                src="https://cdn.discordapp.com/attachments/415509967253274635/784894952076869712/plane.png"
                                alt="19" /></button>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonFooter>
                    <IonToolbar>
                        <IonButton expand="block" color="secondary" onClick={dice.roll}>Lancer les dès</IonButton>
                        <p><b>Dernier lancé:</b> {dice.result}</p>
                        <p><b>Pseudonyme:</b> {appCtx.profile.username}</p>
                        <p><b>Mon argent:</b> {player.money}</p>
                        <p><b>Argent Adversaire:</b> {enemy.money}</p>
                    </IonToolbar>
                </IonFooter>
            </IonContent>

        </IonApp>
    );
}

export default Plate;