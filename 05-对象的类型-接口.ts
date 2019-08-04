interface Person {
    readonly id: number; // 只读属性  只能创建时赋值
    name: string;
    age?: number; // 可选属性 不一定需要实现  必选的属性必须要实现
    [propName: string]: any; // 只要定义了任意属性 确定属性的值类型必须是任意属性的值类型的子集
}

let tom: Person = {
    id: 11,
    name: "Tom",
    gender: "male"
};

// tom.id = 12; // id为只读属性

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue): void {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
let myObj0 = {};
// printLabel(myObj0); // 缺少属性label
printLabel(myObj0 as LabelledValue); // 类型断言
// printLabel({size: 10, label: "Size 10 Object"}); // 使用对象字面量直接传递的话 会进行属性检查

//对象字面量传递可以使用类型断言绕过属性检查
printLabel({ size: 10, label: "" } as LabelledValue);

// printLabel();

// 函数类型
interface Animal {
    (source: string, subString: string): boolean
}

let jason: Animal;
jason = function (source: string, subString: string): boolean {
    return !!(source.search(subString) + 1);
}

let tomsen: Animal;
tomsen = function(sou: string, sub: string): boolean {
    return !!(sou.search(sub) + 1);
}

let stensen: Animal;
stensen = function(sou, sub): boolean {
    return !!(sou.search(sub) + 1);
}

// 可索引的类型
interface PriArray {
    [index: number]: string,
    // [index: string]: number // 数字的索引其实也会转成字符串的索引
}

let arr0: PriArray = {
    0: "1",
    "1": "2",
    // "2": 3,
    // 1: 1
};

arr0 = ["1"];
// arr0 = [1];


// 也可以使用两种类型的索引  但是数字类型的索引的返回值必须是字符串类型索引返回值的子类型
// 由于数字的索引其实也会转成字符串的索引 所以数字类型的索引的返回值必须是字符串类型索引返回值的子类型
// 原理等同于下面的例子
let arr1: Array<number> = [1,2,3,4];
let obj: Object = arr1; // 可行因为Object为Array的父类  Array有Object的所有属性与方法
// arr1 = obj; // 不行
class Dog {
    name: string
}

class SmallDog extends Dog{
    color: string
}

interface ddd {
    [index: number]: SmallDog,
    [index: string]: Dog
}

let xiaod: ddd = {
    0: new SmallDog(),
    // "1": new Dog(), 
    "test": new Dog()
}

let ddog: Dog = new Dog();
let samlldog: SmallDog = new SmallDog();
ddog = samlldog; // 可行
// samlldog = ddog; // 不行 缺少color
samlldog = ddog as SmallDog; // 类型断言

interface NumberDictionary {
    [index: string]: number,
    length: number,
    // name: string // 不是number类型的子类型
}

interface ArrayDictionary {
    [index: string]: Array<Object>,
    // name: Object // 不是Array<number>类型的子类型
    name: Array<number>
}

// 设置索引签名为只读 防止给索引赋值
interface ReadonlyStringArray {
    readonly [index: number]: string
}

let arr2: ReadonlyStringArray = ["1", "2", "3"];
// arr2[0] = "3";

// 类类型
// 实现接口 接口描述了一个类的公共部分 而不是公共和私有两部分 他不会检查一个类是否具有某些私有部分
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}

// 类静态部分和实例部分的区别
// 类是具有两个类型的：静态部分的类型和实例的类型
// 当用一个构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个报错
interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock0 implements ClockConstructor {
    currentTime: Date;
    constructor(hour: number, minute: number) {}
}