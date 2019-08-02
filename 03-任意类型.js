// 任意数据类型any
// 赋值过程中允许被赋予任意类型
var any0 = 0;
any0 = "";
any0 = true;
// 任意类型的定义的数据 编译阶段编译器不会做check
var notSure = 4;
notSure.getName().getSize();
// Object类型的数据拥有类似的功能  但是只可以赋给任意值  却不能调用任何方法即便赋值的类型数据本身具有这个方法  依然会报错
var prettySure = 4;
// prettySure.toFixed(2);
// 变量声明时未指明数据类型并且未赋值 会被识别为任意值类型
var something;
something = "seven";
something = true;
something = 7;
// 但是未指明类型时  在赋值时ts会做一次类型推论
// 未指定类型时但是又默认赋值会推算出变量为string类型  再赋值其他类型会报错
var noTypeThing = "seven";
// noTypeThing = 7; // 报错  跨类型赋值报错
