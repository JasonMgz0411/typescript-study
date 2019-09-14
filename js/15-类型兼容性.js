var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    return Person1;
}());
var store = new Person1();
// 变量之间进行赋值 必须满足 赋值者必须拥有被赋值者所必须的所有属性
var parentName;
var childName = { name: "child", age: 25 };
var childName1 = { age: 25 };
parentName = childName;
// parentName = childName1; // 报错 缺少name属性
// 比较两个函数: 
// 被赋值者的参数列表要比赋值者的参数要多或者一样 但是每个参数的类型规则  被赋值者为赋值者的父类型
// 被赋值者的返回值类型为赋值者返回值类型的父类型
// 比较函数参数列表
var x1 = function (x, y) { return 1; };
var x2 = function (x, y, z) { return 2; };
x2 = x1;
// x1 = x2; // 报错
// 类似于回调函数 参数可少不可多
var items = [1, 2, 3];
items.forEach(function (item, index, arr) {
    console.log(item);
});
// 当然也可以
items.forEach(function (item) {
    console.log(item);
});
// 比较函数返回值类型
var x3 = function () { return ({ name: "x3", age: 24 }); };
var x4 = function () { return ({ name: "x4" }); };
// x3 = x4; // 错误 缺少参数age
x4 = x3;
// 
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyboard"] = 1] = "Keyboard";
})(EventType || (EventType = {}));
function addEventListen(eventType, callback) { }
addEventListen(EventType.Mouse, function (e) {
    console.log("x: " + e.x + ";y: " + e.y);
});
addEventListen(EventType.Mouse, function (e) {
    console.log("x: " + e.x + ";y: " + e.y); // 参数使用时类型断言
});
addEventListen(EventType.Mouse, (function (event) {
    console.log("x: " + event.x + ";y: " + event.y + ";");
}));
// 可选参数与剩余参数
function invokeLater(argus, callback) { }
invokeLater([1, 2], function (x, y) {
    console.log(x + ',' + y);
});
invokeLater([1, 2], function (x, y) {
    console.log(x + ',' + y);
});
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Wating"] = 1] = "Wating";
})(Status || (Status = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
// 枚举类型与数字类型相互兼容 但是枚举类型之间不兼容
var ready = Status.Ready;
// ready = Color.Red; // 类型不兼容
ready = 2;
var wating = Status.Wating;
// 类类型的比较与对象字面量或者接口相似 在比较两个类类型的对象的时候 只会对实例部分进行类型检查
var Apple = /** @class */ (function () {
    function Apple() {
    }
    return Apple;
}());
var HuaWei = /** @class */ (function () {
    function HuaWei(x, y) {
    }
    return HuaWei;
}());
var s = new Apple();
var t = new HuaWei(1, 2);
s = t;
t = s;
var Father = /** @class */ (function () {
    function Father() {
    }
    return Father;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Son;
}(Father));
var Dauctor = /** @class */ (function (_super) {
    __extends(Dauctor, _super);
    function Dauctor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dauctor;
}(Father));
var father = new Father();
var son = new Son();
var dauctor = new Dauctor();
father = son;
father = dauctor;
// dauctor = son; // 错误 私有成员 必须来源于同一个父类 才可进行赋值
// 泛型 比较的只是作为类型的部分
var Empty = /** @class */ (function () {
    function Empty() {
    }
    return Empty;
}());
var x150 = new Empty();
var x151 = new Empty();
x150 = x151;
// 如果存在成员 可以明显看出区别
var Empty1 = /** @class */ (function () {
    function Empty1() {
    }
    return Empty1;
}());
var x152 = new Empty1();
var x153 = new Empty1();
// x152 = x153; //报错 成员data的类型不匹配
// 未指定泛型类型的泛型参数时会把泛型参数作为any比较
var indentity = function (x) { return x; };
var reverse = function (y) { return y; };
indentity = reverse;
