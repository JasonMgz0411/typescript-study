// 数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 1] = "UP";
    Direction[Direction["DOWN"] = 2] = "DOWN";
    Direction[Direction["LEFT"] = 3] = "LEFT";
    Direction[Direction["RIGHT"] = 4] = "RIGHT";
})(Direction || (Direction = {}));
// 如上数字枚举 UP初始值为1 后面的成员会依次增加1
// UP 1 DOWN 2 LEFT 3 RIGHT 4
// 如果不存在初始值 第一个成员默认为0 并依次增1
var Direction1;
(function (Direction1) {
    Direction1[Direction1["UP"] = 0] = "UP";
    Direction1[Direction1["DOWN"] = 1] = "DOWN";
    Direction1[Direction1["LEFT"] = 2] = "LEFT";
    Direction1[Direction1["RIGHT"] = 3] = "RIGHT";
})(Direction1 || (Direction1 = {}));
Direction.UP; // 通过枚举的属性访问枚举成员
var up = Direction.DOWN; // 通过枚举的名字访问枚举类型
// 字符串枚举 在一个字符串枚举中 每个成员都必须使用字符串字面量或者另一个字符串枚举成员进行初始化
var Direction2;
(function (Direction2) {
    Direction2["UP"] = "UP";
    Direction2["DOWN"] = "DOWN";
    Direction2["LEFT"] = "LEFT";
    Direction2["RIGHT"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
// 异构枚举(不建议使用)
// 混合字符串和数字成员
var BooleanStatus;
(function (BooleanStatus) {
    BooleanStatus[BooleanStatus["Yes"] = 1] = "Yes";
    BooleanStatus["No"] = "No";
})(BooleanStatus || (BooleanStatus = {}));
// 枚举成员成为了类型
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var circle = {
    // kind: ShapeKind.Square, // 报错类型不同
    kind: ShapeKind.Circle,
    radius: 10
};
var E;
(function (E) {
    E[E["Foo"] = 0] = "Foo";
    E[E["Bar"] = 1] = "Bar";
})(E || (E = {}));
function getType(x) {
    // 报错 因为E枚举类型不存在既不是Foo也不是Bar的类型 编译报错
    // if(x !== E.Bar || x !== E.Foo) {
    // }
}
// 反向映射
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
Enum[a]; // "A"
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
