// 类型变量 用来表示数据类型而非数据的值
// 以下例子入参与返回值类型相同 可是表示却是any无法明确指定类型相同
function identity(argus: any): any {
    return argus;
}

// 使用类型变量
// 给identity1添加类型变量T  T帮我们捕获入参类型  之后便可以使用此类型表示返回值类型
// 此种函数即为泛型
function identity1<T>(argus: T): T {
    return argus;
}

// 两种使用方式 
// 1、明确指定类型变量的类型
let iden1 = identity1<string>("1");
// 2、使用类型推论 自行推断出类型
let iden2 = identity1([1, 2, 3]);

// 使用泛型变量
// 假设我们想操作的是T类型的数组 想要获取变量的length属性 如果还是按照上述方法操作的话 其实T类型是任意类型 无法确认length的存在 如下
function identity2<T>(arg: T): T {
    // console.log(arg.length); // 报错
    return arg;
}

// 我们可以这样

function identity3<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

// 也可以

function identity4<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

// 泛型类型
function identity5<T>(argus: T): T {
    return argus;
}
// <T>(arg: T) => T 作为泛型类型
let myIdentity: <T>(arg: T) => T = identity5;

// 泛型接口
// 下面这个接口可以用来表示函数需要符合的形状
interface GenIdenfifyFun {
    <T>(arg: T): T
}

let myIdentity1: GenIdenfifyFun = identity5;

// 如果我们想将泛型参数当作整个接口的一个参数 这个接口里的其他成员也能知道这个参数的类型了
interface GenIdenfifyFun1<T> {
    (arg: T): T;
}
// 如果将泛型接口作为类型时 需要指定泛型变量的具体类型
let myIdentity2: GenIdenfifyFun1<number> = identity5;
// 泛型类
class GennerNumber<T> {
    zeroVal: T;
    add: (x: T, y: T) => T
}

let genNum = new GennerNumber<number>();
genNum.add = function (x, y) { return x + y };
genNum.zeroVal = 1;
genNum.add(1, 2);
// 类有两部分：静态部分与实例部分 泛型类指的是对实例部分的类型 类的静态属性不能使用泛型类型

// 泛型约束
// 当我们想要获取某种类型的指定属性时 但又不确定具体类型 我们可以使用接口制定约束条件 确保参数都是满足此条件的
interface WishLength {
    length: number;
}

function logLength<T extends WishLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

logLength({ length: 1 });
logLength([]);
// logLength(1);

// 在泛型约束中使用类型参数

let type: keyof { a: 1, b: 2, c: 3 } = "a";
// 等同于
let type1: "a" | "b" | "c" = "a";

function getProperty<S, U extends keyof S>(obj: S, key: U): S[U] {
    return obj[key];
}

//在泛型约束中使用类类型
function create<T>(a: { new(): T }): T {
    return new a();
}

class BeeKeeper {
    hasMask: boolean
}

class ZooKeeper {
    nametag: string;
}

class AnimalZ {
    numLegs: number;
}

class Bee extends AnimalZ {
    keeper: BeeKeeper
}

class Zoo extends AnimalZ {
    keeper: ZooKeeper
}

function findKeeper<T extends AnimalZ, U>(a: {
    new(): T,
    prototype: {
        keeper: U
    }
}): U {
    return a.prototype.keeper;
}

findKeeper(Zoo).nametag;