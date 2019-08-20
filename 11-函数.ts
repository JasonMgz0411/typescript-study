// 为函数定义类型

// 完整的函数类型定义
let myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
    return x + y;
}

// 省略函数类型
let myAdd1 = function (x: number, y: number): number {
    return x + y;
}

// 省略实现函数的参数类型
let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
    return x + y;
}

// 以上两种Typescript会自动识别类型，称之为“上下文归类”，属于类型推论的一种

// Typescript里函数传递参数的个数必须与定义时函数期望的参数个数一致

// example
function incrementNumber(base: number, incre: number): number {
    return base + incre;
}

incrementNumber(1, 2); // right
// incrementNumber(1); // 缺少参数
// incrementNumber(1,2,3); // 参数过多

// 可选参数 使用 ？标示
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return `${firstName} ${lastName}`;
    } else {
        return `${firstName}`;
    }
}

buildName("Jason");
// 默认值 赋值了默认值的情况可以不指定数据类型 TS会做类型推论
function buildName1(firstName: string, lastName: string = "Stensen") {
    return `${firstName} ${lastName}`;
}
buildName1("Jason", "Bill");
buildName1("Jason");

// 未知个数参数
function getAllName(firstName: string, ...otherName: string[]): string {
    return `${firstName} ${otherName.join(" ")}`
}

getAllName("Jason", "Kangkang", "Lee");
// 用于函数定义上
let buildNameFunc: (firstName: string, ...reset: string[]) => string = getAllName;

// this
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);