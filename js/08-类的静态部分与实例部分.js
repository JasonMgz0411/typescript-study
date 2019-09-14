// class Clock implements ClockConstructor {
//     constructor(hour: number, minute: number) { }
//     a: number = 1;
// }
// 报错原因：当类实现一个接口时只对实例部分进行类型检查，而constructor位于静态部分，所以不在检查范围内
var DigitalClock = /** @class */ (function () {
    function DigitalClock() {
    }
    DigitalClock.prototype.tick = function () {
        console.log("digital new tick");
    };
    DigitalClock.a = 1;
    return DigitalClock;
}());
// 变量clock指定ClockConstructor 赋值时会检查变量是否符合构造函数签名
function createClock(clock, hour, minute) {
    return new clock(hour, minute);
}
createClock(DigitalClock, 12, 12);
var CurrentTime = (function () {
    function s(hour, minute) {
        return hour > minute;
    }
    s.getTime = function () {
        return "";
    };
    return s;
})();
// CurrentTime(TimeClass, 1, 1);
