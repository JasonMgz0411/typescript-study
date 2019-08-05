// 当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型
// 当类实现一个接口时只对实例部分进行类型检查
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface;
    a: number;
}


interface ClockInterface {
    tick(): void;
}

// class Clock implements ClockConstructor {
//     constructor(hour: number, minute: number) { }
//     a: number = 1;
// }

// 报错原因：当类实现一个接口时只对实例部分进行类型检查，而constructor位于静态部分，所以不在检查范围内

class DigitalClock implements ClockInterface {
    constructor() { }
    static a: number = 1;
    tick() {
        console.log("digital new tick");
    }
}

// 变量clock指定ClockConstructor构造器类型检查
function createClock(clock: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new clock(hour, minute);
}

createClock(DigitalClock, 12, 12)