// 1、交叉类型  一种包含多种类型的特性 typeA & typeB
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        result[id] = second[id];
    }
    return result;
}
var First = /** @class */ (function () {
    function First(name) {
        this.name = name;
    }
    return First;
}());
var Second = /** @class */ (function () {
    function Second() {
    }
    Second.prototype.log = function (name) {
        console.log("log " + name);
    };
    return Second;
}());
var tomy = extend(new First("tomy"), new Second());
tomy.log(tomy.name);
// 2、联合类型 满足多种类型中的一种 typeA | typeB
var data;
data = 1;
data = "success";
data = true;
function getEggs(animal) {
    animal.layEggs();
    // animal.run(); // 无法确认联合类型的具体类型
}
getEggs({ run: function () { }, layEggs: function () { } });
// 3、类型保护
// 自定义类型保护：函数签名 is 类型
function isBird(animal) {
    return animal.fly !== undefined;
}
function animalRun(animal) {
    if (isBird(animal)) {
        animal.fly();
    }
    else {
        animal.run();
    }
}
