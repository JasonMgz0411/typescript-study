"use strict";
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
var tom = {
    id: 11,
    name: "Tom",
    gender: "male"
};
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
var myObj0 = {};
// printLabel(myObj0); // 缺少属性label
printLabel(myObj0); // 类型断言
// printLabel({size: 10, label: "Size 10 Object"}); // 使用对象字面量直接传递的话 会进行属性检查
//对象字面量传递可以使用类型断言绕过属性检查
printLabel({ size: 10, label: "" });
var jason;
jason = function (source, subString) {
    return !!(source.search(subString) + 1);
};
var tomsen;
tomsen = function (sou, sub) {
    return !!(sou.search(sub) + 1);
};
var stensen;
stensen = function (sou, sub) {
    return !!(sou.search(sub) + 1);
};
var arr0 = {
    0: "1",
    "1": "2",
};
arr0 = ["1"];
// arr0 = [1];
// 也可以使用两种类型的索引  但是数字类型的索引的返回值必须是字符串类型索引返回值的子类型
// 由于数字的索引其实也会转成字符串的索引 所以数字类型的索引的返回值必须是字符串类型索引返回值的子类型
// 原理等同于下面的例子
var arr1 = [1, 2, 3, 4];
var obj = arr1; // 可行因为Object为Array的父类  Array有Object的所有属性与方法
// arr1 = obj; // 不行
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    return Dog;
}());
var SmallDog = /** @class */ (function (_super) {
    __extends(SmallDog, _super);
    function SmallDog(color, name) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        return _this;
    }
    return SmallDog;
}(Dog));
var xiaod = {
    0: new SmallDog('black', "sd"),
    // "1": new Dog(), 
    "test": new Dog("d")
};
var ddog = new Dog("d");
var samlldog = new SmallDog("block", "sd");
ddog = samlldog; // 可行
// samlldog = ddog; // 不行 缺少color
samlldog = ddog; // 类型断言
var arr2 = ["1", "2", "3"];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var Clock0 = /** @class */ (function () {
    function Clock0(hour, minute) {
    }
    return Clock0;
}());
