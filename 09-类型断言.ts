
interface Animal {
    eat(): void;
    run(): void;
    name: string;
}
// 两种断言表示方式
let dog = <Animal>{};
let pig = {} as Animal;
dog.name = "dog";
pig.name = "pig";
dog.eat = () => {
    console.log("dog eat");
};
pig.eat = () => {
    console.log("pig eat");
};
dog.run = () => {
    console.log("dog run");
};
pig.run = () => {
    console.log("pig run");
};