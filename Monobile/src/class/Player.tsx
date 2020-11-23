import {Dice} from "./Dice";

export class Player {
    public name: string;
    public pos: number;
    public money: number;
    public properties: [];

    constructor(name: string) {
        this.name = name;
        this.pos = 1;
        this.money = 100;
        this.properties = [];
    }

    move() {
        const dice = new Dice();
        this.pos += dice.roll();
        if (this.pos > 24) {
            this.pos -= 24;
        }
    }
}
