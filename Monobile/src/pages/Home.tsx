import {
    IonApp,
    IonButton,
    IonButtons,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent
} from '@ionic/react';
import React from 'react';
import { personOutline } from 'ionicons/icons';
import { ROUTE_PLATE, ROUTE_PROFILE } from '../nav/Routes';

const Home: React.FC = () => {
    return (
        <IonApp>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Monobile</IonTitle>
                    <IonButtons slot="end">
                        <IonButton href={ROUTE_PROFILE}>
                            <IonIcon icon={personOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardContent>
                        <p><b>Monobile </b> est un Monopoly like, vous devrez vous déplacer sur le plateau et bâtir un empire
                    financier pour ruiner vos adversaires !</p>
                    </IonCardContent>
                </IonCard>
                <IonFooter>
                    <IonToolbar>
                        <IonButton size="large" expand="block" color="secondary" href={ROUTE_PLATE}>
                            JOUER
                        </IonButton>
                    </IonToolbar>
                </IonFooter>


            </IonContent>
        </IonApp>
    );
};

export default Home;
