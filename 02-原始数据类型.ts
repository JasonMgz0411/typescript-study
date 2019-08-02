// 布尔类型
let boolA: boolean = Boolean(0);
let boolB: boolean = Boolean(1);
let boolObj: Boolean = new Boolean();
console.log(boolA, boolB, boolObj);

// 数字类型
// 十进制
let numA: number = 6;
// 二进制
let numB: number = 0b0101;
// 八进制
let numC: number = 0o701;
// 十六进制
let numD: number = 0xf1d1;

isNaN(NaN) == true; // true
typeof NaN == "number"; // true
let numNaN: number = NaN;
let numInfinity: number = Infinity;

// 空值类型
// void类型的变量只能被赋值 undefined或者null 实际操作严格模式下赋值null是报错的 issue地址如下
// https://github.com/microsoft/TypeScript-Handbook/issues/468
// 官方解释如下
/**
 * Do not use void for a type of a variable. use undefined. the only place void makes sense is in the return type of a function to indicate that it returns nothing.
 * 不要使用void类型定义变量 可以使用undefined类型 void类型唯一有意义的地方在于函数的返回类型  void代表什么都不返回
 */
// let unusable: void = null;
let unusableA: void = undefined;
// 下面的复制操作报错
// let unusableB: void = 1;

// null 和 undefined类型  是所有类型的子类型
// 非严格检查模式下可以赋值给全类型
// 在启用严格检查模式时 null和undefined只能赋值给void和自身对应的类型变量
let undefinedA: undefined = undefined;
// let undefinedA1: undefined = null;
// let nullA: null = undefined;
let nullA1: null = null;
// let undefinedB: number = undefined;
// let undefinedB1: number = null;

// void类型变量不能赋值给其他类型
// let voidA: void = undefined;
// let numE: number = voidA;
// let stringA: string = voidA;
// let undefinedC: undefined = voidA;
// let nullB: null = voidA;

// 普通数据类型在赋值过程中是不允许改变数据类型的