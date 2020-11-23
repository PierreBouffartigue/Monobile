import React from 'react';
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
    IonToolbar
} from '@ionic/react';
import {ROUTE_PROFILE} from "../nav/Routes";
import {personOutline} from "ionicons/icons";

export const Plate: React.FC = () => (
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
        <IonContent className="padding" color="new">
            <IonGrid>
                <IonRow className="ion-align-items-start">
                    <IonCol>
                        <button id="case_7" className="case_7"><img src="changetoplateimg.png" alt="7"/></button>
                    </IonCol>
                    <IonCol>
                        <button id="case_8" className="case_8"><img src="changetoplateimg.png" alt="8"/></button>
                    </IonCol>
                    <IonCol>
                        <button id="case_9" className="case_9"><img src="changetoplateimg.png" alt="9"/></button>
                    </IonCol>
                    <IonCol>
                        <button id="case_10" className="case_10"><img src="changetoplateimg.png" alt="10"/></button>
                    </IonCol>
                    <IonCol>
                        <button id="case_11" className="case_11"><img src="changetoplateimg.png" alt="11"/></button>
                    </IonCol>
                    <IonCol>
                        <button id="case_12" className="case_12"><img src="changetoplateimg.png" alt="12"/></button>
                    </IonCol>
                    <IonCol>
                        <button id="case_13" className="case_13"><img src="changetoplateimg.png" alt="13"/></button>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center">
                    <IonCol>
                        <button id="case_6" className="case_6"><img src="changetoplateimg.png" alt="6"/></button>
                    </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol>
                        <button id="case_14" className="case_14"><img src="changetoplateimg.png" alt="14"/></button>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center">
                    <IonCol>
                        <button id="case_5" className="case_5"><img src="changetoplateimg.png" alt="5"/></button>
                    </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol>
                        <button id="case_15" className="case_15"><img src="changetoplateimg.png" alt="15"/></button>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center">
                    <IonCol>
                        <button id="case_4" className="case_4"><img src="changetoplateimg.png" alt="4"/></button>
                    </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol><p>Monobile</p></IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol>
                        <button id="case_16" className="case_16"><img src="changetoplateimg.png" alt="16"/></button>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center">
                    <IonCol>
                        <button id="case_3" className="case_3"><img src="changetoplateimg.png" alt="3"/></button>
                    </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol>
                        <button id="case_17" className="case_17"><img src="changetoplateimg.png" alt="17"/></button>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center">
                    <IonCol>
                        <button id="case_2" className="case_2"><img src="changetoplateimg.png" alt="2"/></button>
                    </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol>
                        <button id="case_18" className="case_18"><img src="changetoplateimg.png" alt="18"/></button>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-end">
                    <IonCol>
                        <button id="case_1" className="case_1"><img src="changetoplateimg.png" alt="1"/></button>
                    </IonCol>
                    <IonCol>
                        <button id="case_24" className="case_24"><img src="changetoplateimg.png" alt="24"/></button>
                    </IonCol>
                    <IonCol>
                        <button id="case_23" className="case_23"><img src="changetoplateimg.png" alt="23"/></button>
                    </IonCol>
                    <IonCol>
                        <button id="case_22" className="case_22"><img src="changetoplateimg.png" alt="22"/></button>
                    </IonCol>
                    <IonCol>
                        <button id="case_21" className="case_21"><img src="changetoplateimg.png" alt="21"/></button>
                    </IonCol>
                    <IonCol>
                        <button id="case_20" className="case_20"><img src="changetoplateimg.png" alt="20"/></button>
                    </IonCol>
                    <IonCol>
                        <button id="case_19" className="case_19"><img src="changetoplateimg.png" alt="19"/></button>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonFooter>
                <IonToolbar>
                    <IonTitle>Footer - 2020</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonContent>

    </IonPage>
);