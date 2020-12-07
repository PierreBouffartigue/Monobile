import { IonContent, IonHeader, IonCard, IonIcon, IonCardContent, IonCardHeader, IonCardTitle, IonTitle, IonToolbar, IonButtons, IonAlert, IonBackButton, IonApp, IonGrid, IonRow, IonCol, IonButton, } from '@ionic/react';
import React, { useState, useContext } from 'react';
import { ROUTE_HOME } from '../nav/Routes'
import { pencilOutline } from 'ionicons/icons';
import AppContext from '../data/app-context';
import '../theme/Profile.css'
import '../theme/variables.css'

const Profiles: React.FC = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [showErrorLong, setShowErrorLong] = useState(false)
  const [showErrorEmpty, setShowErrorEmpty] = useState(false)
  const appCtx = useContext(AppContext)

  const updateUsername = (newUsername: string) => {
    if (newUsername.length <= 20 && newUsername.length > 0) {
      let updatedProfile = { ...appCtx.profile }
      updatedProfile.username = newUsername;
      appCtx.updateProfile(updatedProfile);
    }
    else if (newUsername.length == 0) {
      setShowErrorEmpty(true)
    }
    else {
      setShowErrorLong(true)
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

  const reset = () => {
    let profileReset = { ...appCtx.profile }
    profileReset.game = 0
    profileReset.win = 0
    appCtx.updateProfile(profileReset)
  }



  return (
    <IonApp id="Profile">

      <IonHeader class="Responsive-header">

        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref={(ROUTE_HOME)} />
          </IonButtons>
          <IonTitle>Monobile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        <IonCard style={{ top: "25%" }}>
          <IonCardHeader class="ion-text-center Responsive-card">
            <IonCardTitle class="Responsive-username" onClick={() => setShowAlert(true)}>{appCtx.profile.username} <IonIcon icon={pencilOutline}></IonIcon></IonCardTitle>

          </IonCardHeader>

          <IonCardContent >
            <IonGrid >

              <IonCol class="ion-text-center Responsive-stat">
                <IonRow>
                  VICTOIRES {appCtx.profile.win}
                </IonRow>
                <IonRow>
                  DEFAITES {appCtx.profile.game - appCtx.profile.win}
                </IonRow>
                <IonRow>
                  TOTAL {appCtx.profile.game}
                </IonRow>
              </IonCol>

              <IonRow class="ion-align-items-center">
                <IonCol>
                <IonButton onClick={win}> victoire </IonButton>
                <IonButton onClick={lose}> defaite </IonButton>
                  <IonButton onClick={reset}> reset </IonButton>
                </IonCol>

              </IonRow>

            </IonGrid>
          </IonCardContent>
        </IonCard>







      </IonContent>
      <IonAlert
        isOpen={showErrorLong}
        onDidDismiss={() => setShowErrorLong(false)}
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

        isOpen={showErrorEmpty}
        onDidDismiss={() => setShowErrorEmpty(false)}
        header={'Username Vide'}
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
