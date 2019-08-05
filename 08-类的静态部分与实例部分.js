// TS中的静态部分指的是类本身
// TS中的实例部分指的是实例化出来的对象
var DigitalClock = /** @class */ (function () {
    function DigitalClock(hour, minute) {
        this.n = 2;
    }
    DigitalClock.tick = function () {
        console.log("digital static tick", this.n);
    };
    DigitalClock.prototype.tick = function () {
        console.log("digital new tick", this.n);
    };
    DigitalClock.n = 1;
    return DigitalClock;
}());
DigitalClock.n;
DigitalClock.tick();
new DigitalClock(12, 14).tick();
