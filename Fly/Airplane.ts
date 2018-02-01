
class Airplane implements IFly {
    pilotName: string;
    airline: string;
    destination: string;

    fly(speed: number):void {
        document.write(`The airplane is flying at a speed of: ${speed}<br/>`);
    }
    land(): boolean {
        document.write(`The ${this.airline} pilot ${this.pilotName} had landed in ${this.destination} successfuly<br/>`)
        return true;
    }
    constructor(pilotname:string,airline:string,destination:string) {
        this.pilotName = pilotname;
        this.airline = airline;
        this.destination = destination;
    }
}