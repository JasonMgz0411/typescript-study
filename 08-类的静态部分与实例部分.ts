// TS中的静态部分指的是类本身
// TS中的实例部分指的是实例化出来的对象

interface ClockInterface {
    tick(): void;
    n: number;
}

class DigitalClock implements ClockInterface {
    constructor(hour: number, minute: number) {}
    static n: number = 1;
    static tick() {
        console.log("digital static tick", this.n);
    }
    n:number = 2;
    tick() {
        console.log("digital new tick", this.n);
    }
}

DigitalClock.n;
DigitalClock.tick();
new DigitalClock(12, 14).tick()