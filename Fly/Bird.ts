
class Bird implements IFly {

    birdType: string;
    private _age: number;

    set age(age) {
        this._age = age >= 0 ? age : 0;
    }
    get age(): number {
        return this._age;
    }
    color: string;
    fly(speed: number) {
        document.write(`The bird ${this.birdType} which is ${this.age} years old and color ${this.color} is flying at the speed of ${speed}<br/>`);
    }
    land(): boolean {
        document.write(`The bird ${this.birdType} had landed successfuly<br/>`)
        return true;
    }
    constructor(birdtype: string, age: number, color: string ) {
        this.birdType = "Robin";
        this.age = 3;
        this.color = "white&orange";
        
        
    }
}