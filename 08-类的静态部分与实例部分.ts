// 当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型
// 当类实现一个接口时只对实例部分进行类型检查
interface ClockConstructor {
    new(hour: number, minute: number): ClockMethodInterface;
    a: number;
}


interface ClockMethodInterface {
    tick(): void;
}

// class Clock implements ClockConstructor {
//     constructor(hour: number, minute: number) { }
//     a: number = 1;
// }

// 报错原因：当类实现一个接口时只对实例部分进行类型检查，而constructor位于静态部分，所以不在检查范围内

class DigitalClock implements ClockMethodInterface {
    constructor() { }
    static a: number = 1;
    tick() {
        console.log("digital new tick");
    }
}

// 变量clock指定ClockConstructor 赋值时会检查变量是否符合构造函数签名
function createClock(clock: ClockConstructor, hour: number, minute: number): ClockMethodInterface {
    return new clock(hour, minute);
}

createClock(DigitalClock, 12, 12)

// 使用接口定义一个函数需要符合的形状
interface TimeClock {
    (hour: number, minute: number): boolean;
    getTime(): string;
}


let CurrentTime: TimeClock = (() => {
    function s(hour:number, minute: number): boolean {
        return hour > minute;
    }
    s.getTime = function() {
        return "";
    }
    return s;
})();
// CurrentTime(TimeClass, 1, 1);