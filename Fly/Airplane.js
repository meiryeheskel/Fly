var Airplane = /** @class */ (function () {
    function Airplane(pilotname, airline, destination) {
        this.pilotName = pilotname;
        this.airline = airline;
        this.destination = destination;
    }
    Airplane.prototype.fly = function (speed) {
        document.write("The airplane is flying at a speed of: " + speed + "<br/>");
    };
    Airplane.prototype.land = function () {
        document.write("The " + this.airline + " pilot " + this.pilotName + " had landed in " + this.destination + " successfuly<br/>");
        return true;
    };
    return Airplane;
}());
//# sourceMappingURL=Airplane.js.map