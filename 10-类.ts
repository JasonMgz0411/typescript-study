// 修饰符 public（默认）private protected
class Animal {
    public name: string;
    private age: number;
    public constructor(name: string) {
        this.name = name;
    }
    public move(dis: number) {
        console.log(`${this.name}移动了${dis}m`);
    }
}

let dog = new Animal("dog");
console.log(dog.age); // 私有的外部无法访问

class Pig extends Animal {
    constructor(name: string) {
        super(name);
    }
}

class Employ {
    public name: string;
    private age: number;
    public constructor(name: string) {
        this.name = name;
    }
    public move(dis: number) {
        console.log(`${this.name}移动了${dis}m`);
    }
}

let animal = new Animal("1");
let pig = new Pig("1");
let employ = new Employ("1");

animal = pig;
animal = employ; // private与protected声明的变量  必须来源于同一处我们才认为是兼容的