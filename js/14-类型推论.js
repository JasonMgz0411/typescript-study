var a1 = 1; // 推断为number
var x = [0, 1, null]; // 推断为 (number | null)[] 类型
var Rhino = /** @class */ (function () {
    function Rhino() {
        this.name = "Rhino";
    }
    return Rhino;
}());
var Elephant = /** @class */ (function () {
    function Elephant() {
        this.name = "Elephant";
    }
    return Elephant;
}());
var Snake = /** @class */ (function () {
    function Snake() {
        this.name = "Snake";
    }
    return Snake;
}());
var zoo = [new Rhino(), new Snake(), new Elephant()];
var zoo1 = [new Rhino(), new Snake(), new Elephant()]; // 推断为 (Rhino | Snake | Elephant)[]
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button);
    // console.log(mouseEvent.kangaroo); // 报错 鼠标事件不包含kangaroo属性
};
window.onscroll = function (scrollEvent) {
    // console.log(scrollEvent.button); // 报错 滚动事件不包含button属性
};
var handler = function (handlerEvent) {
    console.log(handlerEvent.button);
};
// 显式为参数指定类型 覆盖上下文类型
window.onscroll = function (uiEvent) {
    console.log(uiEvent.button);
};
