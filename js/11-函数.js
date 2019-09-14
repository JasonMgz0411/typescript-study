// 为函数定义类型
// 完整的函数类型定义
var myAdd = function (x, y) {
    return x + y;
};
// 省略函数类型
var myAdd1 = function (x, y) {
    return x + y;
};
// 省略实现函数的参数类型
var myAdd2 = function (x, y) {
    return x + y;
};
// 以上两种Typescript会自动识别类型，称之为“上下文归类”，属于类型推论的一种
// Typescript里函数传递参数的个数必须与定义时函数期望的参数个数一致
// example
function incrementNumber(base, incre) {
    return base + incre;
}
incrementNumber(1, 2); // right
// incrementNumber(1); // 缺少参数
// incrementNumber(1,2,3); // 参数过多
// 可选参数 使用 ？标示
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return "" + firstName;
    }
}
buildName("Jason");
// 默认值 赋值了默认值的情况可以不指定数据类型 TS会做类型推论
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = "Stensen"; }
    return firstName + " " + lastName;
}
buildName1("Jason", "Bill");
buildName1("Jason");
// 未知个数参数
function getAllName(firstName) {
    var otherName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherName[_i - 1] = arguments[_i];
    }
    return firstName + " " + otherName.join(" ");
}
getAllName("Jason", "Kangkang", "Lee");
// 用于函数定义上
var buildNameFunc = getAllName;
var card = {
    suit: "1",
    card: 1
};
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        this.info = "";
        /**
         * 函数表达式：挂载到构造器内部this上的函数 同this.info的挂载方式
         */
        this.onClickBad2 = function (e) {
            _this.info = e.toString();
        };
    }
    /**
     * 函数声明：挂载到原型链上的函数 Handler.prototype.onClickBad
     */
    Handler.prototype.onClickBad = function (e) {
        this.info = e.toString();
    };
    Handler.prototype.onClickBad1 = function (e) {
        console.log("clicked"); // 无法使用this调用Handler实例的属性 例如this.info
    };
    return Handler;
}());
var UIElementClass = /** @class */ (function () {
    function UIElementClass() {
    }
    UIElementClass.prototype.addClickEvent = function (onclick) {
        onclick(new Event("click"));
    };
    return UIElementClass;
}());
var uiEle = new UIElementClass();
var h = new Handler();
// uiEle.addClickEvent(h.onClickBad); // 作为回调函数 this被替换成void报错
uiEle.addClickEvent(h.onClickBad1);
uiEle.addClickEvent(h.onClickBad2);
function pickData(x) {
    if (typeof x == "object") {
        return x.length;
    }
    else {
        return [x];
    }
}
pickData(1);
pickData([1]);
// pickData({}); // 不在定义的重载列表中 报错
