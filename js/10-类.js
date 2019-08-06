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
// 1、private声明的变量或者方法 不能在声明他的类的外部进行访问
// 2、protected与private类似 但是protected声明的变量或者方法可以在其声明的类或者派生类中访问
// 3、同样的如果构造器是protected的 那么这个类是无法实例化的 但是可以被继承(private声明的constructor无法实例话也无法被继承)
var Animal = /** @class */ (function () {
    function Animal(name, age, home) {
        this.name = name;
        this.age = age;
        this.home = home;
    }
    Animal.prototype.move = function (dis) {
        console.log(this.name + "\u79FB\u52A8\u4E86" + dis + "m");
    };
    return Animal;
}());
var dog = new Animal("dog", 1, 'CN');
// console.log(dog.age); // 私有的外部无法访问
var Pig = /** @class */ (function (_super) {
    __extends(Pig, _super);
    function Pig(name, age, home) {
        var _this = _super.call(this, name, age, home) || this;
        // console.log(this.age); // age为私有的  在派生类中无法访问
        console.log(_this.home); // home为protected  在派生类中可以访问
        return _this;
    }
    return Pig;
}(Animal));
var Employ = /** @class */ (function () {
    function Employ(name, age) {
        this.name = name;
        this.age = age;
    }
    Employ.prototype.move = function (dis) {
        console.log(this.name + "\u79FB\u52A8\u4E86" + dis + "m");
    };
    return Employ;
}());
var animal = new Animal("1", 1, "CN");
// private与protected类型的数据不可在类外进行访问
// animal.age;
// animal.home;
var pig = new Pig("1", 1, "CN");
var employ = new Employ("1", 1);
animal = pig;
// animal = employ; // private与protected声明的变量  必须来源于同一处我们才认为是兼容的
var AnimalConstructorPri = /** @class */ (function () {
    function AnimalConstructorPri() {
    }
    return AnimalConstructorPri;
}());
// private声明的构造器无法实例化 无法被继承
// new AnimalConstructorPri();
// class PersonConstructorPri extends AnimalConstructorPri {
//     constructor() {
//         super();
//     }
// }
var AnimalConstructorPro = /** @class */ (function () {
    function AnimalConstructorPro() {
    }
    return AnimalConstructorPro;
}());
// protected声明的构造器无法实例化  但是可以被继承
// new AnimalConstructorPri();
var PersonConstructorPro = /** @class */ (function (_super) {
    __extends(PersonConstructorPro, _super);
    function PersonConstructorPro() {
        return _super.call(this) || this;
    }
    return PersonConstructorPro;
}(AnimalConstructorPro));
// readonly修饰符 只能在属性定义或者类实例化的时候进行赋值
var ReadonlyAnimal = /** @class */ (function () {
    function ReadonlyAnimal(name) {
        this.name = name;
    }
    return ReadonlyAnimal;
}());
// new ReadonlyAnimal("").name = "2";  // readonly只读类型无法再次赋值
var ReadonlyAnimal0 = /** @class */ (function () {
    function ReadonlyAnimal0() {
        this.name = "1";
    }
    return ReadonlyAnimal0;
}());
// new ReadonlyAnimal0().name = "2"; // readonly只读无法再次赋值
// 参数属性
var ParamAnimal = /** @class */ (function () {
    // public不能省略
    function ParamAnimal(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    return ParamAnimal;
}());
var pa = new ParamAnimal("", 1, 50);
// pa.name; // 私有的 只能在定义的类中进行访问
pa.age;
// pa.weight; // 只能在定义的类和此类的派生类中进行访问
