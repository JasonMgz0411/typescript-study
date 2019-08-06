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
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var AlarmDoor = /** @class */ (function (_super) {
    __extends(AlarmDoor, _super);
    function AlarmDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlarmDoor.prototype.alert = function () {
        console.log("防盗门报警");
    };
    return AlarmDoor;
}(Door));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log("车辆报警");
    };
    return Car;
}());
var Car0 = /** @class */ (function () {
    function Car0() {
    }
    Car0.prototype.alert = function () {
        console.log("Car0 报警了");
    };
    Car0.prototype.turnOn = function () {
        console.log("Car0 开灯了");
    };
    Car0.prototype.turnOff = function () {
        console.log("Car0 关灯了");
    };
    return Car0;
}());
var Car1 = /** @class */ (function () {
    function Car1() {
    }
    Car1.prototype.alert = function () {
        console.log("Car1 报警了");
    };
    Car1.prototype.turnOn = function () {
        console.log("Car1 开灯了");
    };
    Car1.prototype.turnOff = function () {
        console.log("Car1 关灯了");
    };
    return Car1;
}());
// 接口继承类
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var position = { x: 1, y: 1, z: 1 };
var pos = {};
pos.x = 1;
pos.y = 2;
pos.z = 3;
var mySearch = function (source, subString) {
    return !!source.search(subString);
};
