import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonApp, IonIcon, IonButton } from '@ionic/react';
import React from 'react';
import { personOutline } from 'ionicons/icons';
import { ROUTE_PROFILE } from '../nav/Routes';
import { ROUTE_PLATE } from '../nav/Routes'

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


        <IonButton size="large" expand="block" color="secondary" href={ROUTE_PLATE}>
          JOUER
          </IonButton>



      </IonContent>
    </IonApp>
  );
};

export default Home;
