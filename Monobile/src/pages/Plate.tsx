import React from 'react';
import {IonButton, IonCol, IonContent, IonGrid, IonRow} from '@ionic/react';

export const Plate: React.FC = () => (
    <IonContent>
        <IonGrid>
            <IonRow>
                <IonCol><IonButton color="primary">Primary</IonButton></IonCol>
                <IonCol><IonButton color="primary">Primary</IonButton></IonCol>
                <IonCol><IonButton color="primary">Primary</IonButton></IonCol>
                <IonCol><IonButton color="primary">Primary</IonButton></IonCol>
                <IonCol><IonButton color="primary">Primary</IonButton></IonCol>
                <IonCol><IonButton color="primary">Primary</IonButton></IonCol>
                <IonCol><IonButton color="primary">Primary</IonButton></IonCol>
            </IonRow>

            <IonRow>
                <IonCol size="12" size-md>
                    <IonButton color="primary">Primary</IonButton>
                </IonCol>
                <IonCol size="12" size-md>
                    <IonButton color="primary">Primary</IonButton>
                </IonCol>
                <IonCol size="12" size-md>
                    <IonButton color="primary">Primary</IonButton>
                </IonCol>
                <IonCol size="12" size-md>
                    <IonButton color="primary">Primary</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton color="primary">Primary</IonButton>
                </IonCol>
                <IonCol size="12" size-md>
                    <IonButton color="primary">Primary</IonButton>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol><IonButton color="primary">Primary</IonButton></IonCol>
                <IonCol><IonButton color="primary">Primary</IonButton></IonCol>
                <IonCol><IonButton color="primary">Primary</IonButton></IonCol>
                <IonCol><IonButton color="primary">Primary</IonButton></IonCol>
                <IonCol><IonButton color="primary">Primary</IonButton></IonCol>
                <IonCol><IonButton color="primary">Primary</IonButton></IonCol>
                <IonCol><IonButton color="primary">Primary</IonButton></IonCol>
            </IonRow>
        </IonGrid>
    </IonContent>
);