// 接口的一种用途：对类的部分行为进行抽象
// 接口用来提取不同类之间的共有属性与方法
// 例如防盗门继承了门的所有属性与方法 多出了一个报警能力；同样车也具有报警能力；可以提取报警能力为接口供他们进行功能实现 
interface Alarm {
    alert(): void;
}

class Door { }

class AlarmDoor extends Door implements Alarm {
    alert() {
        console.log("防盗门报警");
    }
}

class Car implements Alarm {
    alert() {
        console.log("车辆报警");
    }
}

// 一个类可以实现多个接口
// 例如车辆具有报警 开关灯的能力

interface TurnLight {
    turnOn(): void;
    turnOff(): void;
}

class Car0 implements Alarm, TurnLight {
    alert() {
        console.log("Car0 报警了");
    }
    turnOn() {
        console.log("Car0 开灯了");
    }
    turnOff() {
        console.log("Car0 关灯了");
    }
}

// 接口与接口之间也可以有继承关系
interface LightAlarm extends Alarm, TurnLight {

}

class Car1 implements LightAlarm {
    alert() {
        console.log("Car1 报警了");
    }
    turnOn() {
        console.log("Car1 开灯了");
    }
    turnOff() {
        console.log("Car1 关灯了");
    }
}

// 接口继承类

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let position: Point3d = {x: 1, y: 1, z: 1};
let pos = <Point3d>{};
pos.x = 1;
pos.y = 2;
pos.z = 3;

// 使用接口定义一个函数需要符合的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(source: string, subString: string): boolean {
    return !!source.search(subString)
}
