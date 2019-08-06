// 修饰符 public（默认）private protected
// 1、private声明的变量或者方法 不能在声明他的类的外部进行访问
// 2、protected与private类似 但是protected声明的变量或者方法可以在其声明的类或者派生类中访问
// 3、同样的如果构造器是protected的 那么这个类是无法实例化的 但是可以被继承(private声明的constructor无法实例话也无法被继承)
class Animal {
    public name: string;
    private age: number;
    protected home: string;
    public constructor(name: string, age: number, home: string) {
        this.name = name;
        this.age = age;
        this.home = home;
    }
    public move(dis: number) {
        console.log(`${this.name}移动了${dis}m`);
    }
}

let dog = new Animal("dog", 1, 'CN');
// console.log(dog.age); // 私有的外部无法访问

class Pig extends Animal {
    constructor(name: string, age: number, home: string) {
        super(name, age, home);
        // console.log(this.age); // age为私有的  在派生类中无法访问
        console.log(this.home); // home为protected  在派生类中可以访问
    }
}

class Employ {
    public name: string;
    private age: number;
    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public move(dis: number) {
        console.log(`${this.name}移动了${dis}m`);
    }
}

let animal = new Animal("1", 1, "CN");
// private与protected类型的数据不可在类外进行访问
// animal.age;
// animal.home;
let pig = new Pig("1", 1, "CN");
let employ = new Employ("1", 1);

animal = pig;
// animal = employ; // private与protected声明的变量  必须来源于同一处我们才认为是兼容的

class AnimalConstructorPri {
    private constructor() {
        
    }
}
// private声明的构造器无法实例化 无法被继承
// new AnimalConstructorPri();
// class PersonConstructorPri extends AnimalConstructorPri {
//     constructor() {
//         super();
//     }
// }

class AnimalConstructorPro {
    protected constructor() {}
}

// protected声明的构造器无法实例化  但是可以被继承
// new AnimalConstructorPri();

class PersonConstructorPro extends AnimalConstructorPro{
    constructor() {
        super();
    }
}

// readonly修饰符 只能在属性定义或者类实例化的时候进行赋值
class ReadonlyAnimal {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// new ReadonlyAnimal("").name = "2";  // readonly只读类型无法再次赋值
class ReadonlyAnimal0 {
    readonly name: string = "1";
}

// new ReadonlyAnimal0().name = "2"; // readonly只读无法再次赋值

// 参数属性
class ParamAnimal {
    // public不能省略
    constructor(private name: string,public age: number, protected weight: number) {}
}

let pa = new ParamAnimal("", 1, 50);
// pa.name; // 私有的 只能在定义的类中进行访问
pa.age;
// pa.weight; // 只能在定义的类和此类的派生类中进行访问