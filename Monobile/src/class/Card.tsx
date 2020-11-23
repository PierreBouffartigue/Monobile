import {IonButton, IonText} from "@ionic/react";
import React from "react";

export class Card {
    public state: { name: string; color: string; price: number };

    constructor(name: string, color: string, price: number) {
        this.state = {name: name, color: color, price: price};
    }

    render() {
        return (
            <IonButton color="primary">
                <IonText>{this.state.name}</IonText>
                {this.state.price === 1000 ? (
                    <IonText>yes 1000</IonText>
                ) : (
                    <IonText>no</IonText>
                )}
            </IonButton>
        );
    }

    change() {
        this.state.price = 70
    }
}