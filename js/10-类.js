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
// 修饰符 public（默认）private protected
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (dis) {
        console.log(this.name + "\u79FB\u52A8\u4E86" + dis + "m");
    };
    return Animal;
}());
var dog = new Animal("dog");
console.log(dog.age); // 私有的外部无法访问
var Pig = /** @class */ (function (_super) {
    __extends(Pig, _super);
    function Pig(name) {
        return _super.call(this, name) || this;
    }
    return Pig;
}(Animal));
var Employ = /** @class */ (function () {
    function Employ(name) {
        this.name = name;
    }
    Employ.prototype.move = function (dis) {
        console.log(this.name + "\u79FB\u52A8\u4E86" + dis + "m");
    };
    return Employ;
}());
var animal = new Animal("1");
var pig = new Pig("1");
var employ = new Employ("1");
animal = pig;
animal = employ; // private与protected声明的变量  必须来源于同一处我们才认为是兼容的
