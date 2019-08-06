
interface Animal {
    eat(): void;
    run(): void;
    name: string;
}
// 两种断言表示方式
let dog09 = <Animal>{};
let pig09 = {} as Animal;
dog09.name = "dog09";
pig09.name = "pig09";
dog09.eat = () => {
    console.log("dog09 eat");
};
pig09.eat = () => {
    console.log("pig09 eat");
};
dog09.run = () => {
    console.log("dog09 run");
};
pig09.run = () => {
    console.log("pig09 run");
};