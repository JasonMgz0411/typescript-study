// 联合类型
// 在未确认变量具体类型时只能调用共有的属性或者方法
var togetherData;
togetherData.toString();
// togetherData.length;  // 报错
// 赋值后会做一次类型推论  使用对应类型的数据的方法与属性
togetherData = "1";
togetherData.length;
togetherData = 1;
// togetherData.length; // number类型无length属性
togetherData.toFixed(2);
// togetherData = true; // 赋值类型报错
