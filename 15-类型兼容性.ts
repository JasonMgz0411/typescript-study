// Typescript里的类型兼容性是基于结构子类型的  属于一种根据成员来描述类型的方式 如下
interface Named {
    name: string;
}

class Person1 {
    name: string;
}

let store: Named = new Person1();

// 变量之间进行赋值 必须满足 赋值者必须拥有被赋值者所必须的所有属性
let parentName: Named;
let childName = { name: "child", age: 25 };
let childName1 = { age: 25 };
parentName = childName;
// parentName = childName1; // 报错 缺少name属性

// 比较两个函数: 
// 被赋值者的参数列表要比赋值者的参数要多或者一样 但是每个参数的类型规则  被赋值者为赋值者的父类型
// 被赋值者的返回值类型为赋值者返回值类型的父类型
// 比较函数参数列表
let x1 = (x: number, y: number) => 1;
let x2 = (x: number, y: number, z: number) => 2;
x2 = x1;
// x1 = x2; // 报错
// 类似于回调函数 参数可少不可多
let items: Array<number> = [1, 2, 3];
items.forEach((item, index, arr) => {
    console.log(item);
});

// 当然也可以
items.forEach((item) => {
    console.log(item);
})

// 比较函数返回值类型
let x3 = () => ({ name: "x3", age: 24 });
let x4 = () => ({ name: "x4" });
// x3 = x4; // 错误 缺少参数age
x4 = x3;

// 
enum EventType {
    Mouse,
    Keyboard
}

interface Events {
    timestramp: number
}

interface MouseEvents extends Events {
    x: number;
    y: number
}

interface KeyboardEvents extends Events {
    keyword: number
}

function addEventListen(eventType: EventType, callback: (event: Events) => void) { }

addEventListen(EventType.Mouse, (e: MouseEvents) => {
    console.log(`x: ${e.x};y: ${e.y}`);
})

addEventListen(EventType.Mouse, (e: Events) => {
    console.log(`x: ${(<MouseEvents>e).x};y: ${(<MouseEvents>e).y}`); // 参数使用时类型断言
})

addEventListen(EventType.Mouse, <(e: Events) => void>((event: MouseEvents) => { // 函数类型断言
    console.log(`x: ${event.x};y: ${event.y};`);
}))

// 可选参数与剩余参数
function invokeLater(argus: any[], callback: (...argus: any[]) => void) { }
invokeLater([1, 2], (x, y) => {
    console.log(x + ',' + y);
});

invokeLater([1, 2], (x?, y?) => {
    console.log(x + ',' + y);
})

enum Status {
    Ready,
    Wating
}

enum Color {
    Red,
    Blue,
    Green
}
// 枚举类型与数字类型相互兼容 但是枚举类型之间不兼容
let ready = Status.Ready;
// ready = Color.Red; // 类型不兼容
ready = 2;
let wating: number = Status.Wating;

// 类类型的比较与对象字面量或者接口相似 在比较两个类类型的对象的时候 只会对实例部分进行类型检查

class Apple {
    country: string;
    static Position: string;
    constructor() { }
}

class HuaWei {
    country: string;
    static Position: Array<number>;
    constructor(x: number, y: number) { }
}

let s: Apple = new Apple();
let t: HuaWei = new HuaWei(1, 2);
s = t;
t = s;

class Father {
    name: string;
}

class Son extends Father {
    private age: number;
}
class Dauctor extends Father {
    private age: number;
}
let father: Father = new Father();
let son: Son = new Son();
let dauctor: Dauctor = new Dauctor();
father = son;
father = dauctor;
// dauctor = son; // 错误 私有成员 必须来源于同一个父类 才可进行赋值

// 泛型 比较的只是作为类型的部分
class Empty<T> { }
let x150: Empty<number> = new Empty<number>();
let x151: Empty<string> = new Empty<string>();
x150 = x151;
// 如果存在成员 可以明显看出区别
class Empty1<T> {
    data: T
}
let x152: Empty1<number> = new Empty1<number>();
let x153: Empty1<string> = new Empty1<string>();
// x152 = x153; //报错 成员data的类型不匹配

// 未指定泛型类型的泛型参数时会把泛型参数作为any比较
let indentity = function <T>(x: T): T { return x }
let reverse = function <U>(y: U): U { return y }
indentity = reverse;