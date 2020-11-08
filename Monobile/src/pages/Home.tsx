import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonApp, IonIcon, IonButton } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Monobile</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon name="person-outline"></IonIcon>
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
