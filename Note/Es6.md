一、ES6中得let和const关键字

let与const好处
* 不可以重复声明
* let-变量可以修改、const常量不可以修改。
* 块级作用域  
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

const
const命令表示定义一个常量,不能被更改得量，
```js
const pi = 3.14;
console.log(pi);
pi = 3.1415;//报错
```

但是可以指向一个引用类型值，对这个引用类型得值得操作是允许得，但是不能允许指向别得值；
```js
const arr = ["一","二","三",];
arr.push("四");
console.log(arr);


arr = ["王","王","2","2","2","2",]//报错，因为arr是常量

```

冻结对象，用Object.freeze();只能冻结一层
```js
const arr = Object.freeze(["一","二","三",]);//可以使用，不可以更改
```

Object.freeze();只能冻结一层
```js
var obj =Object.freeze({"a" : 1 , "b" : 2 , "c" :["J","Q","K"]);
obj.a = 44;  //没有修改成功
obj.c.push("A");//A成功推入了数组，因为freeze只能冻结一层，
console.log(obj);//{"a" : 1 , "b" : 2 , "c" :["J","Q","K","A"}
```

解构赋值
```js
    let arr = [1,4,2,'ccc',flase,'啦啦啦']

    let[a,b,c,d,e,f] = arr;//取用全部
    console.log(a,b,c,d,e,f);

let[,,,a,b] = arr;//取ccc flaser;
console.log(a,b);
```


对象简写
```js
    let username = 'java';
    let password = '123';
    let obj = {
        username,
        password,
    }
    console.log(obj.username,obj.password);

let username = 'java';
    let password = '123';
    let obj = {
        username,
        password,
        getUserName(){
            return this.username;
        }
    }
    console.log('es6',obj.getUserName());//es6获取方法


```


模板字符串
```js
let obj = {name : "jack" , age : 20 ,}
console.log(`es6:我的名字是:${obj.name},年龄是${obj.age}`)
```


箭头函数及this
```js
    //普通调用参数
    let funcl = function(){
        console.log("普通无参匿名函数")
    }
    funcl();


    //箭头
    let func2 = () =>{
        console.log("箭头函数")
    }
    func2();


```
This特性
```js
let people = {
    name:"Zz",
    age:17,
    getName:function(){
        console.log("xxx",this);
        return this.name;
    },
    
    //箭头
    getName2:()=>{
        console.log('YYY'+this)
    }

}
console.log(obj.getName())
console.log(obj.getName2())

```


Map与Set

```js
    //map基本使用
    let map = new Map();
    map.set('name':'张三');
    map.set('age':11);
    map.set('已婚':flase);

    console.log(map.get('name'))
    console.log(map.get('age'))
    console.log(map.get('已婚'))


    //key是函数
    let obj = {};
    map.set(obj,'对象');
    console.log(map.set(obj));


    //key是函数
    let func =function(){};
    map.set(func,'函数')；
    console.log(map.get(func));


    //key是NaN
    map.set(NaN,'NaN');
    console.log(map.get(NaN))
    
    console.log(map.get(Number("aaa")));

    //Map迭代
    //for..of
    for(let[key,value] of map){
        console.log(key,value)
    }


    //forEach

    map.forEach(function(value,key){
        console.log(value,key)
    });

    console.log("所有得ktey");
    for(let value of map.keys()){
        console.log(key)
    }

    console.log("所有得值");
    for(let value of map.values()){
        console.log(value);


        //Map对象操作
        //Map与Array转换
        //数组转Map
        let arr = [['k1','v1'],['k2','v2']];
        let map2 = new Map(arr);
        console.log(map2);


        //map转数组
        let arr2 = Arrat.from(map2);
        console.log(arr2);



        //Map和并
        let map3 = new Map({...map...map2});
        console.log(map3);



        //Set对象
        //Set里得value值是唯一得
        let myMap = new Map();
        mySet.add("张三")
        mySet.add("李四")
        mySet.add("张三")
        console.log(mySet);

        //Set遍历
        //for ...of
        for(let value of mySet.values()){
            console.log(value);
        }


        mySet
    }
```