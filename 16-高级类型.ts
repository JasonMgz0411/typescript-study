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

