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

let card: Card = {
    suit: "1",
    card: 1
};
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card; // createCardPicker返回值是个返回值是Card类型的函数
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
        return (): Card => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

class Handler {
    info: string = "";
    /**
     * 函数声明：挂载到原型链上的函数 Handler.prototype.onClickBad
     */
    onClickBad(this: Handler, e: Event) { // 指定this必须为Handler的实例
        this.info = e.toString();
    }
    onClickBad1(this: void, e: Event) {
        console.log("clicked"); // 无法使用this调用Handler实例的属性 例如this.info
    }
    /**
     * 函数表达式：挂载到构造器内部this上的函数 同this.info的挂载方式
     */
    onClickBad2 = (e: Event) => {
        this.info = e.toString();
    }
}

interface UIElement {
    addClickEvent(onclick: (this: void, e: Event) => void): void;
}

class UIElementClass implements UIElement {
    addClickEvent(onclick: (this: void, e: Event) => void) {
        onclick(new Event("click"));
    }
}

let uiEle: UIElement = new UIElementClass();
let h = new Handler();
// uiEle.addClickEvent(h.onClickBad); // 作为回调函数 this被替换成void报错
uiEle.addClickEvent(h.onClickBad1);
uiEle.addClickEvent(h.onClickBad2);

// 重载 
// 场景：根据不同类型的入参返回不同类型的数据
function pickData(x: number): Array<number>;
function pickData(x: Array<any>): number;
function pickData(x: any): any {
    if(typeof x == "object") {
        return x.length;
    } else {
        return [x];
    }
}
pickData(1);
pickData([1]);
// pickData({}); // 不在定义的重载列表中 报错