var Kyte = /** @class */ (function () {
    function Kyte(color, price) {
        this.color = color;
        this.price = price;
    }
    Object.defineProperty(Kyte.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price >= 0 ? price : 0;
        },
        enumerable: true,
        configurable: true
    });
    Kyte.prototype.fly = function (speed) {
        document.write("The kyte is flying at the speed of: " + speed + "<br/>");
    };
    Kyte.prototype.land = function () {
        document.write("The kyte had landed successfuly<br/>");
        return true;
    };
    return Kyte;
}());
//# sourceMappingURL=Kyte.js.map