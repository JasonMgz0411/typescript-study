// 1、交叉类型  一种包含多种类型的特性 typeA & typeB
function extend<A, B>(first: A, second: B): A & B {
    const result: Partial<A & B> = {};
    for (let id in first) {
        (result as A)[id] = first[id];
    }
    for (let id in second) {
        (result as B)[id] = second[id];
    }
    return result as A & B;
}

class First {
    constructor(public name: string) { }
}

interface Loggable {
    log(name: string): void;
}

class Second implements Loggable {
    log(name: string) {
        console.log(`log ${name}`);
    }
}

const tomy = extend(new First("tomy"), new Second());
tomy.log(tomy.name);

// 2、联合类型 满足多种类型中的一种 typeA | typeB
let data: number | string | boolean;
data = 1;
data = "success";
data = true;
// data = new Date(); // 不包含 Date类型
// 在使用联合类型的变量时只能直接使用其公用的方法或者属性
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    run(): void;
    layEggs(): void;
}

function getEggs(animal: Bird | Fish) {
    animal.layEggs();
    // animal.run(); // 无法确认联合类型的具体类型
}

getEggs({ run() { }, layEggs() { } })

// 3、类型保护
// 自定义类型保护：函数签名 is 类型
function isBird(animal: Bird | Fish): animal is Bird {
    return (<Bird>animal).fly !== undefined;
}
function animalRun(animal: Bird | Fish) {
    if (isBird(animal)) {
        animal.fly();
    } else {
        animal.run();
    }
}

// 4、typeof类型保护  
// typeof类型保护只有两种形式可以识别  typeof value === ‘typename’ 和 typeof value !== 'typename'
// typename必须是string number boolean symbol 才可以被识别为typeof类型保护
// 当然ts并未强行要求不能为其他字符串  只是其他字符串不会被识别为typeof类型保护

function getPaddingLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        return `${Array(padding + 1).join(" ")}${value}`
    }
    if (typeof padding === 'string') {
        return `${padding}${value}`
    }
    throw new Error(`padding不是合法的参数类型`);
}

// 5、instanceof类型保护
interface Padder {
    getPaddingString(): string;
}

class SpaceRegisterPadder implements Padder {
    constructor(private value: number) { }
    getPaddingString(): string {
        return `${Array[this.value + 1].join(" ")}`;
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString(): string {
        return this.value;
    }
}

function getRandomPadder() {
    return Math.random() > 0.5 ? new SpaceRegisterPadder(4) : new StringPadder("");
}

let padder: Padder = getRandomPadder();
if (padder instanceof SpaceRegisterPadder) {
    console.log("SpaceRegisterPadder");
}
if (padder instanceof StringPadder) {
    console.log("StringPadder");
}

// 6、使用strictNullChecks标记时 当声明一个变量时 它不会自动的包含null或者undefined  可以使用联合类型包含它们
let str: string = "foo";
// str = null;

let str1: string | null = "foo";
str1 = null;
// str1 = undefined; 

let str3: string | undefined = "foo";
// str3 = null;
str3 = undefined;

let str2: string | null | undefined = "foo";
str2 = null;
str2 = undefined;

// 7、使用strictNullChecks标记时 可选参数与可选属性上会默认自动加上 undefined
// tag处理后的类型为 number | undefined
function getTag(tag?: number) { }
getTag(1);
getTag(undefined);
// getTag(null);

class TagsString {
    s?: number
}

let tags: TagsString = new TagsString();
tags.s = 1;
tags.s = undefined;
// tags.s = null;

// 8、类型保护与类型断言 value!可以从value的类型里去除null和undefined
let name1: string | null;
// console.log(name1.charAt(0) + "world");
console.log(name1!.charAt(0) + "world");

// 9、类型别名
// 给一个类型起个名字
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(name: NameOrResolver): Name {
    if (typeof name === "string") {
        return name;
    }
    return name();
}

// 类型别名也可以使泛型
type Container<T> = {
    value: T
};

// 也可以在属性里引用自己
type Select<T> = {
    value: T,
    id: string,
    parentId: string,
    childen: Array<Select<T>>
};

// 与交叉类型一起使用
type Droper<T> = T & { next: Droper<T> };
interface Ele {
    value: string,
    id: string,
    next: Ele
}

class Eleme implements Ele {
    value: string
    id: string
    next: Eleme
}

let droper: Droper<Ele> = new Eleme();
droper.value;
droper.next.value;
droper.next.next.value;
droper.next.next.next.value;

// 类型别名不能出现在声明右侧的任何地方
// type Yikes = Array<Yikes>;

// 10、接口与类型别名的区别
// 接口是创建了一个新的类型 而类型别名只是创建了个名字用来引用一个类型，只是一个类型的别名而已
// 接口可以被继承和实现 而类型别名不行
// 类型别名通常用来描述一个类型并且需要使用离岸和类型或者元组类型

type Alias = {
    name: number
}

interface InterfaceAlias {
    name: number
}
// 其实指定的返回值类型为对象字面量 Alias只是一个别名
declare function aliased(): Alias;
// 返回值类型为InterfaceAlias
declare function interfaced(): InterfaceAlias;

// 11、字符串字面量类型
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {

        }
        else if (easing === "ease-out") {

        }
        else if (easing === "ease-in-out") {

        }
        else {
            // 没必要加此else  编译阶段类型检查时候已经过滤
        }
    }
}
let button: UIElement = new UIElement();
button.animate(1, 1, "ease-in");
button.animate(1, 1, "ease-out");
button.animate(1, 1, "ease-in-out");
// button.animate(1, 1, "uneasy");
// 12、数字字面量类型 类似于上面的
type EnumType = 1 | 2 | 3 | 4 | 5;
function getEnum(): EnumType {
    // return 6;
    return 1;
}

// 13、可辨识联合
// 三个要素
/**
 * 1、具有普通的单例类型属性 - 可辨识
 * 2、一个类型别名包含了那些类型的联合 - 联合
 * 3、此属性上的类型保护
 */

interface Square {
    kind: "square",
    size: number
}

interface ReactAngle {
    kind: "reactangle",
    width: number,
    height: number
}

interface Circles {
    kind: "circles",
    radius: number
}

type Shape = Square | ReactAngle | Circles;

function getArae(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size ** 2;
        case "reactangle":
            return shape.height * shape.width;
        case "circles":
            return Math.PI * shape.radius ** 2;
    }
}

// 报错 switch未包含所有情况 返回值会有undefined情况
function getArae1(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size ** 2;
        case "reactangle":
            return shape.height * shape.width;
    }
}

function assertNever(param: never): never {
    throw new Error(`Unexpected object: ${param} `);
}

// 提供个函数进行完整性检查 如果是完整的并不会走到default  可将注释代码放开即可
function getArae2(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size ** 2;
        case "reactangle":
            return shape.height * shape.width;
        // case "circles":
        //     return Math.PI * shape.radius ** 2;
        default:
            return assertNever(shape);
    }
}

// 14、索引类型
// 普通js代码 从对象中选取属性的自己 
function getPluck(obj, nameArr) {
    return nameArr.map(name => obj[name]);
}

// 在TS中实现此函数  使用索引类型查询操作符 keyof T 和索引访问操作符 T[K]
function pluck<T, K extends keyof T>(obj: T, nameArr: K[]): T[K][] {
    return nameArr.map(name => obj[name])
}

interface Person16 {
    name: string,
    age: number
}

let person: Person16 = {
    name: "Jason",
    age: 25
}

pluck(person, ["name"]);

// 索引类型与字符串索引签名
interface Map<T> {
    [key: string]: T
}

let keys: keyof Map<number>; // string | number 例如：obj["42"]可以使用 obj[42]替代
let val: Map<number>["foo"]; // number
// 如果类型带有数字类型索引签名
interface Directory<T> {
    [key: number]: T
}

let dirKeys: keyof Directory<string>; // number
let dirVal: Directory<string>[40]; // string
// let dirVal: Directory<string>["40"]; // 错误 "40"不在索引类型中

// 映射类型
interface PartialPerson {
    name?: string
    age?: number
}

interface ReadonlyPerson {
    readonly name: string
    readonly age: number
}

// 可以令每个属性都为可选的或只读的
type Partial1<T> = {
    [K in keyof T]?: T[K];
}

type Readonly1<T> = {
    readonly [K in keyof T]: T[K]
}

// 使用

type PartialPerson1 = Partial1<Person16>;
type ReadonlyPerson1 = Readonly1<Person16>;

// 此语法描述的只是类型而非成员 若要添加成员 需要使用交集类型
type PartialPerson2<T> = {
    [K in keyof T]?: T[K]
} & {
    newMember: boolean
}

// 以下是最简单的映射类型和其组成部分
type Keys = "option1" | "option2";
type Flags = {
    [K in Keys]: boolean
}