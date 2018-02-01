
class Kyte implements IFly {
    color: string;
    private _price: number;

    set price(price: number){
        this._price=price >= 0 ? price : 0;

    }
    get price(): number {
        return this._price;
    }

    fly(speed: number) {
        document.write(`The kyte is flying at the speed of: ${speed}<br/>`);
    }
    land(): boolean {
        document.write(`The kyte had landed successfuly<br/>`)

        return true;
    }
    constructor(color: string, price: number) {
        this.color = color;
        this.price = price;
    }
}