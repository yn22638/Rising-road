一、ES6中得let
ES5中只有var能定义变量，作用域是在function中
ES6中可以用let来定义变量，定义是块级作用域变量
```js
{
    let a = 10;
    var b = 20;
}
console.log(a);//报错
console.log(b);//20
```
let得声明范围就是{}内，


不变量声明提升：
```js
console.log(a)
let a = 10 //报错
```

let会引发暂时性死区(面试常考)
在代码块中，使用let命令声明变量之前，该变量都是不可用得。这在语法上，称为“暂时性死区，temporal dead zone，简称TDZ”
```js
var m = 10;
function fun() {
    m = 20 ;//报错，函数在预解析阶段会读取所有得语句，发现了let语句，所以就将这个函数变为了一个m得暂时性死区，此时m不允许在let前被赋值。
    let  m; 
    console.log(m)
}
```
