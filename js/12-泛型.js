var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类型变量 用来表示数据类型而非数据的值
// 以下例子入参与返回值类型相同 可是表示却是any无法明确指定类型相同
function identity(argus) {
    return argus;
}
// 使用类型变量
// 给identity1添加类型变量T  T帮我们捕获入参类型  之后便可以使用此类型表示返回值类型
// 此种函数即为泛型
function identity1(argus) {
    return argus;
}
// 两种使用方式 
// 1、明确指定类型变量的类型
var iden1 = identity1("1");
// 2、使用类型推论 自行推断出类型
var iden2 = identity1([1, 2, 3]);
// 使用泛型变量
// 假设我们想操作的是T类型的数组 想要获取变量的length属性 如果还是按照上述方法操作的话 其实T类型是任意类型 无法确认length的存在 如下
function identity2(arg) {
    // console.log(arg.length); // 报错
    return arg;
}
// 我们可以这样
function identity3(arg) {
    console.log(arg.length);
    return arg;
}
// 也可以
function identity4(arg) {
    console.log(arg.length);
    return arg;
}
// 泛型类型
function identity5(argus) {
    return argus;
}
// <T>(arg: T) => T 作为泛型类型
var myIdentity = identity5;
var myIdentity1 = identity5;
// 如果将泛型接口作为类型时 需要指定泛型变量的具体类型
var myIdentity2 = identity5;
// 泛型类
var GennerNumber = /** @class */ (function () {
    function GennerNumber() {
    }
    return GennerNumber;
}());
var genNum = new GennerNumber();
genNum.add = function (x, y) { return x + y; };
genNum.zeroVal = 1;
genNum.add(1, 2);
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
logLength({ length: 1 });
logLength([]);
// logLength(1);
// 在泛型约束中使用类型参数
var type = "a";
// 等同于
var type1 = "a";
function getProperty(obj, key) {
    return obj[key];
}
//在泛型约束中使用类类型
function create(a) {
    return new a();
}
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var AnimalZ = /** @class */ (function () {
    function AnimalZ() {
    }
    return AnimalZ;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(AnimalZ));
var Zoo = /** @class */ (function (_super) {
    __extends(Zoo, _super);
    function Zoo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Zoo;
}(AnimalZ));
function findKeeper(a) {
    return a.prototype.keeper;
}
findKeeper(Zoo).nametag;
