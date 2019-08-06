"use strict";
// 布尔类型
var boolA = Boolean(0);
var boolB = Boolean(1);
var boolObj = new Boolean();
console.log(boolA, boolB, boolObj);
// 数字类型
// 十进制
var numA = 6;
// 二进制
var numB = 5;
// 八进制
var numC = 449;
// 十六进制
var numD = 0xf1d1;
isNaN(NaN) == true; // true
typeof NaN == "number"; // true
var numNaN = NaN;
var numInfinity = Infinity;
// 空值类型
// void类型的变量只能被赋值 undefined或者null 实际操作严格模式下赋值null是报错的 issue地址如下
// https://github.com/microsoft/TypeScript-Handbook/issues/468
// 官方解释如下
/**
 * Do not use void for a type of a variable. use undefined. the only place void makes sense is in the return type of a function to indicate that it returns nothing.
 * 不要使用void类型定义变量 可以使用undefined类型 void类型唯一有意义的地方在于函数的返回类型  void代表什么都不返回
 */
// let unusable: void = null;
var unusableA = undefined;
// 下面的复制操作报错
// let unusableB: void = 1;
// null 和 undefined类型  是所有类型的子类型
// 非严格检查模式下可以赋值给全类型
// 在启用严格检查模式时 null和undefined只能赋值给void和自身对应的类型变量
var undefinedA = undefined;
// let undefinedA1: undefined = null;
// let nullA: null = undefined;
var nullA1 = null;
// let undefinedB: number = undefined;
// let undefinedB1: number = null;
// void类型变量不能赋值给其他类型
// let voidA: void = undefined;
// let numE: number = voidA;
// let stringA: string = voidA;
// let undefinedC: undefined = voidA;
// let nullB: null = voidA;
// 普通数据类型在赋值过程中是不允许改变数据类型的
