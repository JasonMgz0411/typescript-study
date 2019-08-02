let nums: number[] = [1, 2, 3, 4, 5];
// let nums1: number[] = [1, "2"]; // 不能包含其他类型的数据
nums.push(8);
// nums.push("8"); // 数组元素增加或者改变时 也不能传人其他类型的数据

// 使用数组泛型表示数组
let datas: Array<string> = ["1", "j"];

// 只读类型的数组
let arr: Array<number> = [1,2,3,4,5];
let readArr: ReadonlyArray<number> = arr;
// readArr.length = 1;
// readArr.push(6);
// readArr[0] = 2;

// arr = readArr; // 只读类型的数组也无法赋值给正常类型的数组  需要使用类型断言
arr = readArr as Array<number>; // 类型断言