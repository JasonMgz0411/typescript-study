// 数字枚举
enum Direction {
    UP = 1,
    DOWN,
    LEFT,
    RIGHT
}

// 如上数字枚举 UP初始值为1 后面的成员会依次增加1
// UP 1 DOWN 2 LEFT 3 RIGHT 4
// 如果不存在初始值 第一个成员默认为0 并依次增1
enum Direction1 {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

Direction.UP // 通过枚举的属性访问枚举成员
let up: Direction = Direction.DOWN;// 通过枚举的名字访问枚举类型

// 字符串枚举 在一个字符串枚举中 每个成员都必须使用字符串字面量或者另一个字符串枚举成员进行初始化
enum Direction2 {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

// 异构枚举(不建议使用)
// 混合字符串和数字成员
enum BooleanStatus {
    Yes = 1,
    No = "No"
}

// 枚举成员成为了类型

enum ShapeKind {
    Circle,
    Square
}

interface Circle {
    kind: ShapeKind.Circle,
    radius: number
}

let circle: Circle = {
    // kind: ShapeKind.Square, // 报错类型不同
    kind: ShapeKind.Circle,
    radius: 10
};

enum E {
    Foo,
    Bar
}

function getType(x: E) {
    // 报错 因为E枚举类型不存在既不是Foo也不是Bar的类型 编译报错
    // if(x !== E.Bar || x !== E.Foo) {

    // }
}

// 反向映射
enum Enum {
    A
}

let a = Enum.A;
Enum[a] // "A"
// 枚举类型被编译后其实包含了正向映射和反向映射 但是并不会为字符串枚举成员生成反向映射

// const枚举
// 避免额外生成代码的开销和额外的非直接的对枚举成员的访问
// 不同于常规的枚举 他们会在编译阶段进行删除 枚举成员会在使用的地方被内联起来
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// 编译后为 var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

// 外部枚举 外部枚举用来描述已经存在的枚举类型的形状 没明白
declare enum Enums {
    A = 1,
    B,
    C = 2
}