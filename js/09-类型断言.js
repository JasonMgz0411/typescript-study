"use strict";
// 两种断言表示方式
var dog = {};
var pig = {};
dog.name = "dog";
pig.name = "pig";
dog.eat = function () {
    console.log("dog eat");
};
pig.eat = function () {
    console.log("pig eat");
};
dog.run = function () {
    console.log("dog run");
};
pig.run = function () {
    console.log("pig run");
};
