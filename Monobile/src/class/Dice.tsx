export class Dice {
    public d1: number = 0;
    public d2: number = 0;
    public result: number = 0;

    roll() {
        const d1 = Math.floor(Math.random() * 6) + 1;
        const d2 = Math.floor(Math.random() * 6) + 1;
        this.result = d1 + d2;
        return d1 + d2;
    }
}