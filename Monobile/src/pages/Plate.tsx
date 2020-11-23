import React from 'react';
import {IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar} from '@ionic/react';

export const Plate: React.FC = () => (
    <IonPage>
        <IonHeader>
            <IonToolbar border-color="new" mode="ios">
                <IonTitle color="new">Plate</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="padding" color="new">
            <IonGrid>
                <IonRow className="ion-align-items-start">
                    <IonCol>case 7</IonCol>
                    <IonCol>case 8</IonCol>
                    <IonCol>case 9</IonCol>
                    <IonCol>case 10</IonCol>
                    <IonCol>case 11</IonCol>
                    <IonCol>case 12</IonCol>
                    <IonCol>case 13</IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center">
                    <IonCol>case 6</IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol>case 14</IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center">
                    <IonCol>case 5</IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol>case 15</IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center">
                    <IonCol>case 4</IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol>case 16</IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center">
                    <IonCol>case 3</IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol>case 17</IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center">
                    <IonCol>case 2</IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol> </IonCol>
                    <IonCol>case 18</IonCol>
                </IonRow>
                <IonRow className="ion-align-items-end">
                    <IonCol>case 1</IonCol>
                    <IonCol>case 24</IonCol>
                    <IonCol>case 23</IonCol>
                    <IonCol>case 22</IonCol>
                    <IonCol>case 21</IonCol>
                    <IonCol>case 20</IonCol>
                    <IonCol>case 19</IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
);