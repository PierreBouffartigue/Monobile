import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonAlert, IonBackButton, IonApp, IonButton, IonGrid, IonRow, IonCol, IonList, IonListHeader, IonItem, } from '@ionic/react';
import React, { useState, useEffect, useContext } from 'react';
import { ROUTE_HOME } from '../nav/Routes'
import { Plugins, App } from '@capacitor/core'
import AppContext from '../data/app-context';

const Profiles: React.FC = () => {

  const [showAlert, setShowAlert] = useState(false);
  const appCtx = useContext(AppContext)

  const updateUsername = (newUsername: string) => {
    let updatedProfile = { ...appCtx.profile }
    updatedProfile.username = newUsername;
    appCtx.updateProfile(updatedProfile);
  }

  const win = () => {
    let profileWinner = { ...appCtx.profile }
    profileWinner.win += 1
    profileWinner.game += 1
    appCtx.updateProfile(profileWinner)
  }

  const lose = () => {
    let profileLoser = { ...appCtx.profile }
    profileLoser.game += 1
    appCtx.updateProfile(profileLoser)
  }



  return (
    <IonApp id="Profile">
      
      <IonContent>
        <IonGrid className="ion-no-padding">
          <IonRow id="headerRow" className="ion-justify-content-around ion-align-items-center">

            <IonCol size="12" onClick={() => setShowAlert(true)} className="ion-text-center ion-padding-bottom">{appCtx.profile.username}</IonCol>
          </IonRow>
          <IonRow class="ion-text-center">
            <IonCol>
              VICTOIRES
            </IonCol>
            <IonCol>
              DEFAITES
            </IonCol>
            <IonCol>
              TOTAL
            </IonCol>
          </IonRow>
          <IonRow class="ion-text-center">
            <IonCol>
              {appCtx.profile.win}
            </IonCol>
            <IonCol>
              {appCtx.profile.game - appCtx.profile.win}
            </IonCol>
            <IonCol>
              {appCtx.profile.game}
            </IonCol>
          </IonRow>
          <IonRow class="ion-text-center">
            <IonCol>
              <IonButton onClick={win}>VICTOIRE</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={lose}>DEFAITE</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Username'}
        inputs={[
          {
            name: 'usernameInput',
            type: 'text',
            id: 'profile-username',
            value: appCtx.profile.username,
            placeholder: 'Your username'
          }
        ]}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Confirm Cancel');
            }
          },
          {
            text: 'Ok',
            handler: (alertData) => updateUsername(alertData.usernameInput)
          }
        ]}
      />

    </IonApp>
  );
};
export default Profiles;
