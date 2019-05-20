#  Mysql基础
### 1.查看数据库
        show databases;
### 2.创建数据库
       create database 数据库名称(随意起名);
### 3.删除数据库
        drop database 数据库名称;
### 4.use 数据库名称
        访问进入数据库,(返回Database changed,说明进入成功)

___
## 报错纠正
    1.ERROR 1007 (HY000): Can't create database 'demo'; database exists
      当前名称得数据库已经存在，创建数据库失败。
    2.ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use ***near 'database' at line 1***
      near后面有用
    3.ERROR 1049 (42000): Unknown database 'sad'
      没有这个数据库
    3.ERROR 1008 (HY000): Can't drop database 'sad'; database doesn't exist
      不能删除这个数据库，因为这个数据库不存在
    4.ERROR 1265 (01000): Data truncated for column 'comm' at row 1
      插入的数据过长

___
## Mysql表的操作
### 表的别名
        别名 直接写 中文用引号
        select concat(ename,'的工资是',sal) saltable  from emp;
### 1.查看数据都有哪些表
        show tables;
### 2.创建一张数据库得表
        create table 表名(字段名称 字段的类型,字段名称 字段类型····)
### 3.查看表中所有数据
        select*from 表名;
### 4.如何查看一个表的结构
        desc 表名;
### 5.删除表
        drop table 表名;
### 6.对表数据进行增删改查
        增：alter table 表名 add 字段名称 字段类型
        删：alter table 表名 drop 字段名称 ;
        改：alter table 表名 modify 字段名称 字段类型;
        查：desc 表名;
### 7.不允许为空
        ERROR 1048 (23000): Column 'num' cannot be null
___
## 向表中插入数据
        insert into 表名(想插入的字段名称...) values(想插入的字段的值)
        insert into 表名 values(表中所有字段的值)
___
## 删除的sql中的数据
        1.清空表
            delete from 表名;
        2.删除哪几条记录
            delete from 表名 where 字段名='第几个';
___
## 修改表中的数据
        1.全部修改
            update 表名 set 字段名=新的字段值,(逗号隔开)··· where 字段名='第几个';
___
## 约束
    1.唯一约束
        unique
    2.非空约束
        not null
    3.同一个字段加多个约束(值于值不需要逗号
        1
    4.主键约束
        primary key
    5.自动增长策略
        primary key auto_increment
### mysql中的外键必须是另一个主键

```非空约束和唯一约束的一个组合我们称之为主键约束```

___
## Mysql查询
        select*from 表名 -查询出该表中的所有数据
* 了解查询语句的格式

        select[字段列表，表达式，函数]from 表名
        
        select 表达式[算术表达式]from 表名
        
        select字段列表[字段1，字段2，字段n]from 表名
  ```当我们需要将表中的所有字段数据都查询出来的时候 那么这个时候我们只需要将字段列表替换成*即可```

* 常用表

        emp
        dept
        salgrade
    
___
## mysql查询表
> select基本查询

    查询字段里所有东西
     select 字段名 from 表名;
    查询多个数据
     select 字段名,字段名 from 表名;
     当我们需要将表中的数据都查出来的时候，我们只需把字段名换成*即可
    进行运算
     select 表达式[算术表达式(加减乘除)] from 表名
    去重   
     select distinct 字段名 from 表名;
        
> where条件表达式

    等值比较
        筛选：select * from 表名 where 字段名 = 相同的值;
        查询名称：select * from 表名 where 字段名 = '属性名称'
     大于
        select * from 表名 where 字段名 > 数值;
     小于
        select * from 表名 where 字段名 < 数值;
     大于等于
        select * from 表名 where 字段名 >= 数值;
     小于等于
        select * from 表名 where 字段名 <= 数值;
     不等于
        select * from 表名 where 字段名 <> 数值;
> 多个条件查询
        
      并且 and
        如：select * from 表名 where 字段名 > 数值 and 字段名 <= 数值;  
      或者 or
        如：select * from 表名 where 字段名 > 数值 or 字段名 < 数值;
        如：select * from 表名 where 字段名 = 数值 or 字段名 = 数值 or 字段名 = 数值;
      in关键字
        代表在这个取值中只要有一个匹配就是符合条件
        select * from 表名 where 字段名 in(数值,数值,数值);
      not in
        取所有不再这个区间范围之内的值
        select * from 表名 where 字段名 not in(数值,数值,数值);
      between and(相当于大于等于)
        select * from 表名 where 字段名 between 数值 and 数值;
      空永远不等于空
        null 和 null做等值判断是错的,
      判断一个数值是否为空需要用到关键字is
        如：select * from 表名 where 字段名 is null;
      判断一个数值不为空需要用到关键字is not
        如：select * from 表名 where 字段名 is not null;
___
## Mysql函数
     常用数学函数
        1.圆周率函数
          select pi() from 表名;
        去重 
         selet pi() from 表名;
        2.返回小于x的最大整数(去掉小数取整)
         select floor(字段名) from 表名 where 字段名=要修改字段的值;
        3.返回大于x的最小整数(进一取整)
         select ceiling(字段名) from 表名 where 字段名=要修改字段的值;
        4.返回参数x的四舍五入的有y位小数的值(四舍五入)
         select round(字段名,1(取小数点后几位，1就是一位))from 表名 where 字段名=要修改的字段的值;
        5.
         select truncate(字段名,0(，保留小数点后0位,-1则使后一位为0))from 表名 where 字段名=要修改字段名的值；
       常用聚合函数
        1.返回指定的平均值
         select avg(字段名) from 表名;
        2.返回指定列中非null值/行的个数(当函数参数为*时不会忽略)
         select count(*)from 表名;
        3.返回指定列的最小值
         select min(字段名)from 表名;
        4.返回指定列的最大值
         select max(字段名)from 表名;
        5.返回指定列的所有值之和
         select sum(字段名)from 表名;
       常用聚合函数
        1.将s1,s2...,sn连接成字符串
         select concat(需要连接的字段名,'的工资是'(连接字符串可加文字),需要连接的字段名)from 表名;
        2.去掉字符串str开头的空格
         select ltrim(字段名)from 表名 where 字段名=需要修改的字段值;
        3.去掉字符串str尾部的空格
         select rtrim(字段名)from 表名 where 字段名=需要修改的字段值
        查询字符串长度
         select length(需要查询的字段名)from 表名 where 字段名 =需要查询的值;
        查询修改后的字符串长度
         select length(rtrim(需要查询的字段名))from 表名 where 字段名 =需要查询的值;
        4.去掉字符串首部和尾部的所有空格
         select trim(字段名)from 表名 where 字段名=需要修改的字段值
        5.截取字符串
         select substring(字段名,1,2(1是从第几个开始,2是截取到第几个，2可以不写意思是截取到结尾))from 表名 where 字段名=需要修改的字段值
       常用日期函数
        1.返回日期date的年份(1000-9999)
         select year(字段日期名) from 表名;
        2.返回date的月份值(1-12)
         select month(字段日期名) from 表名;
        3.返回date天数的部分
         select day(字段日期名) from 表名;
        4.返回time的小时值(0-23)
         select hour(字段日期名) from 表名;
        5.返回time的分钟值(0-59)
         select minute(字段日期名) from 表名;
        6.返回time的秒值(0-59)
         select second(字段日期名) from 表名;
        7.返回date的日期值
         select DATE(字段日期名) from 表名;
        8.返回datetime的时间值
         select TIME(字段日期名) from 表名;
___
### 分组函数
        select avg(字段名) from 表名 group by字段名
         group表示查询组,by表示查询哪个组

### 子查询
> 子查询就是一个查询的结果可以作为另一个查询的数据源或者条件
<!--插入图片-->
<!-- ![baidu](http://www.baidu.com/img/bdlogo.gif "百度logo")   -->

<!-- 插入链接 -->
<!-- [我的博客](http://blog.csdn.net/guodongxiaren "悬停显示")   -->
            