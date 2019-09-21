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
    if(isBird(animal)) {
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
    if(typeof padding === 'number') {
        return `${Array(padding + 1).join(" ")}${value}`
    }
    if(typeof padding === 'string') {
        return `${padding}${value}`
    }
    throw new Error(`padding不是合法的参数类型`);
}

// 5、instanceof类型保护
interface Padder {
    getPaddingString(): string;
}

class SpaceRegisterPadder implements Padder {
    constructor(private value: number) {}
    getPaddingString(): string {
        return `${Array[this.value + 1].join(" ")}`;
    }
}

class StringPadder implements Padder {
    constructor(private value: string) {}
    getPaddingString(): string {
        return this.value;
    }
}

function getRandomPadder() {
    return Math.random() > 0.5 ? new SpaceRegisterPadder(4) : new StringPadder("");
}

let padder: Padder = getRandomPadder();
if(padder instanceof SpaceRegisterPadder) {
    console.log("SpaceRegisterPadder");
}
if(padder instanceof StringPadder) {
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
function getTag(tag?: number) {}
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
    if(typeof name === "string") {
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
type Droper<T> = T & {next: Droper<T>};
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

// 11、字符串字面量类型