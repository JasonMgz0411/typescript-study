// Typescript里的类型兼容性是基于结构子类型的  属于一种根据成员来描述类型的方式 如下
interface Named {
    name: string;
}

class Person1 {
    name: string;
}

let store: Named = new Person1();

// 变量之间进行赋值 必须满足 赋值者必须拥有被赋值者所必须的所有属性
let parentName: Named;
let childName = { name: "child", age: 25 };
let childName1 = { age: 25 };
parentName = childName;
// parentName = childName1; // 报错 缺少name属性

let x1 = (x: number, y: number) => 1;
let x2 = (x: number, y: number, z: number) => 2;
x2 = x1;
// x1 = x2;