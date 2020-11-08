import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonApp, IonIcon, IonButton } from '@ionic/react';
import React from 'react';
import { personOutline } from 'ionicons/icons';
import {ROUTE_PROFILE} from '../nav/Routes'

const Home: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Monobile</IonTitle>
          <IonButtons slot="end">
            <IonButton href={ROUTE_PROFILE}>
              <IonIcon icon={personOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>


      </IonContent>
    </IonApp>
  );
};

export default Home;
