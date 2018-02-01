var Bird = /** @class */ (function () {
    function Bird(birdtype, age, color) {
        this.birdType = "Robin";
        this.age = 3;
        this.color = "white&orange";
    }
    Object.defineProperty(Bird.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age >= 0 ? age : 0;
        },
        enumerable: true,
        configurable: true
    });
    Bird.prototype.fly = function (speed) {
        document.write("The bird " + this.birdType + " which is " + this.age + " years old and color " + this.color + " is flying at the speed of " + speed + "<br/>");
    };
    Bird.prototype.land = function () {
        document.write("The bird " + this.birdType + " had landed successfuly<br/>");
        return true;
    };
    return Bird;
}());
//# sourceMappingURL=Bird.js.map