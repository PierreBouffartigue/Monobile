import {Dice} from "./Dice";
import {Card} from "./Card";
import {Plate} from "./Plate";

export class Player {
    public name: string;
    public pos: number;
    public money: number;
    public properties: Card[];
    public isJailed: boolean;

    constructor(name: string, isJailed: boolean) {
        this.name = name;
        this.pos = 1;
        this.money = 100;
        this.properties = [];
        this.isJailed = isJailed;
    }

    jail(player: Player) {
        if (this.pos == 7) {
            player.isJailed = true;
        }
    }

    removeJail(player: Player) {

    }

    move(player: Player, plate: Plate) {
        const dice = new Dice();
        if (dice.rollPrison()) {
            this.pos += dice.roll();
            if (this.pos > 24) {
                this.pos -= 24;
            }
        } else {
            plate.nextPlayer()
        }
        
    }

    buyCard(card: Card) {
        if (this.money >= card.price) {
            this.decreaseMoney(card.price);
            this.properties.push(card);
        }
    }

    giveMoneyPlayer(player: Player, nb: number) {
        player.increaseMoney(nb);
        this.decreaseMoney(nb);
    }

    increaseMoney(nb: number) {
        this.money += nb;
    }

    decreaseMoney(nb: number) {
        this.money -= nb;
        if (this.money < 0) {
            this.money = 0;
        }
    }
}
