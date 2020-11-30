import { IonContent, IonHeader, IonCard,IonIcon, IonCardContent, IonCardHeader, IonCardTitle, IonTitle, IonToolbar, IonButtons, IonAlert, IonLabel, IonBackButton, IonApp, IonButton, IonGrid, IonRow, IonCol, IonList, IonListHeader, IonItem, } from '@ionic/react';
import React, { useState, useEffect, useContext } from 'react';
import { ROUTE_HOME } from '../nav/Routes'
import { Plugins, App } from '@capacitor/core'
import {pencilOutline, text} from 'ionicons/icons';
import AppContext from '../data/app-context';

const Profiles: React.FC = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false)
  const appCtx = useContext(AppContext)

  const updateUsername = (newUsername: string) => {
    if (newUsername.length <= 20){
      let updatedProfile = { ...appCtx.profile }
    updatedProfile.username = newUsername;
    appCtx.updateProfile(updatedProfile);
    }
    else{
      setShowError(true)
    }
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

      <IonHeader>

        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref={(ROUTE_HOME)} />
          </IonButtons>
          <IonTitle>Monobile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonCardHeader class="ion-text-center">
            <IonCardTitle onClick={() => setShowAlert(true)}>{appCtx.profile.username} <IonIcon icon={pencilOutline}></IonIcon></IonCardTitle>
            
          </IonCardHeader>

          <IonCardContent>
            <IonGrid className="">

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
          </IonCardContent>
        </IonCard>


      </IonContent>
      <IonAlert
      isOpen={showError}
      onDidDismiss={() => setShowError(false)}
      header={'Trop long'}
      buttons={[
        {
          text: 'OK',
          role: 'OK',
          handler: () => {
            setShowAlert(true)
          }
        }
      ]}
      />

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
