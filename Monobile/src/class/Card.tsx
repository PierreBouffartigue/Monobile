import React from "react";
import {Player} from "./Player";

export class Card {
    /*public state: { name: string; color: string; price: number };
    constructor(name: string, color: string, price: number) {
        this.state = {name: name, color: color, price: price};
    }*/
    public plateId: number;
    public name: string;
    public color: string;
    public price: number;
    public owner: Player|null;


    constructor(plateId: number, name: string, color: string, price: number, owner: Player|null) {
        this.plateId = plateId;
        this.name = name;
        this.color = color;
        this.price = price;
        this.owner = owner;
    }

    
}