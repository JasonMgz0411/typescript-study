let a1 = 1; // 推断为number
let x = [0, 1, null]; // 推断为 (number | null)[] 类型
interface ZooPar {
    name: String
}

class Rhino implements ZooPar {
    name: String = "Rhino";
}

class Elephant implements ZooPar {
    name: String = "Elephant";
}

class Snake implements ZooPar {
    name: String = "Snake";
}

let zoo: ZooPar[] = [new Rhino(), new Snake(), new Elephant()];
let zoo1 = [new Rhino(), new Snake(), new Elephant()]; // 推断为 (Rhino | Snake | Elephant)[]
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);
    // console.log(mouseEvent.kangaroo); // 报错 鼠标事件不包含kangaroo属性
}

window.onscroll = function(scrollEvent) {
    // console.log(scrollEvent.button); // 报错 滚动事件不包含button属性
}

const handler = function(handlerEvent) { // 函数参数将隐式具有类型any
    console.log(handlerEvent.button);
}

// 显式为参数指定类型 覆盖上下文类型
window.onscroll = function(uiEvent: any) {
    console.log(uiEvent.button);
}