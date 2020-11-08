import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonApp } from '@ionic/react';
import React from 'react';
import { ROUTE_HOME } from '../nav/Routes'

const Profiles: React.FC = () => {
    return (
        <IonApp>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Profile</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref={ROUTE_HOME} />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>


            </IonContent>
        </IonApp>
    );
};

export default Profiles;
