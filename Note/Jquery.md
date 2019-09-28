1. 点击隐藏！

```js

    <p>点击我就消失</p>
    <p>继续？</p>
    <P>再来？</P>
    <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            $('p').click(function () {
                $(this).hide();//$(this)	选取当前 HTML 元素
            })
        })
    </script>

```


2. 通过 id 选取元素语法如下：``$(#"test")class`` 选区元素 ``$(".test")``

```js

    <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
    <p id="p1">鼠标指针进入此处，会看到弹窗。</p>
    <script>
        $(document).ready(function () {
            $("#p1").mouseenter(function () {
                alert('您的鼠标移到了 id="p1" 的元素上!');
            });
            $("#p1").mouseleave(function () {
                alert("再见，您的鼠标离开了该段落。");
            });
            $("#p1").mousedown(function () {
                alert("鼠标在该段落上按下！");
            });
        });
    </script>

```

3. Jquery hover

```js
    <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
    <p id="p1">移动aaaa</p>
    <script>
        $(document).ready(function () {
            $("#p1").hover(
                function () {
                    alert("你进入了 p1!");
                },
                function () {
                    alert("拜拜! 现在你离开了 p1!");
                }
            )
        });
    </script>

```

4. Hide Or Show

```js
    <p>歪特 猪腻扣嗯</p>
    <button class="hide">Hide</button> <!-- 显示 -->
    <button class="show">Show</button> <!-- 隐藏 -->
    <script>
        $(document).ready(function () {
            $(".hide").click(function () {
                $('p').hide()
            });
            $(".show").click(function () {
                $("p").show()
            })
        })
    </script>
```

4.1 Toggle （Hide Or Show）

```js
    $(document).ready(function() {
        $(".toggle").click(function() {
            $('p').toggle()
        });
    })

 ```

5. 淡入淡出

```js
    <p>以下实例演示了 fadeIn() 使用了不同参数的效果。</p>
    <button class="hide">点击淡出 div 元素。</button>
    <button class="show">点击淡入 div 元素。</button>
    <br><br>
    <div id="div1" style="width:80px;height:80px;display:none;background-color:red;"></div><br>
    <div id="div2" style="width:80px;height:80px;display:none;background-color:green;"></div><br>
    <div id="div3" style="width:80px;height:80px;display:none;background-color:blue;"></div>
    <script>
        $(document).ready(function () {
            $(".hide").click(function () {
                $("#div1").fadeIn();
                $("#div2").fadeIn("slow");
                $("#div3").fadeIn(3000);
            });
            $(".show").click(function () {
                $("#div1").fadeOut();
                $("#div2").fadeOut("slow");
                $("#div3").fadeOut(3000);
            });
        });
    </script>
 ```

5.1 既淡入又淡出

```js
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
```

6. 滑动 上滑下滑、

```js
    <div class="flip">点我下滑/上拉面板</div>
    <div class="panel">Hello Word!</div>
    <script>
        $(document).ready(function () {
            $(".flip").click(function () {
                $(".panel").slideDown("slow");
            });
            $(".flip").click(function () {
                $(".panel").slideUp("slow");
            });

        })
    </script>

    <style>
        .panel,
        .flip {
            padding: 5px;
            text-align: center;
            background-color: #e5eecc;
            border: solid 1px #c3c3c3;
        }

        .panel {
            padding: 50px;
            display: none;
        }
    </style>

```


6.1 上拉 下滑

```js
    $(".flip").click(function() {
    $(".panel").slideToggle("slow");
    });
```

7. animation动画

```js
    <button>开始动画</button>
    <p>默认情况下，所有的 HTML 元素有一个静态的位置，且是不可移动的。
        如果需要改变为，我们需要将元素的 position 属性设置为 relative, fixed, 或 absolute!</p>
    <div style="background:#98bf21;height:100px;width:100px;position:absolute;">
    $(document).ready(function(){
        $("button").click(function(){
            $("div").animate({left:'250px'});
        });
    });
```

7.1 animate() - 操作多个属性

```js
    $(document).ready(function(){
        $("button").click(function(){
            $("div").animate({
                left:'250px',
                opacity:'0.5',
                height:'150px',
                width:'150px'
            });
        });
    });
```

7.2 animate() - 使用相对值

```js
    $(document).ready(function(){
        $("button").click(function(){
            $("div").animate({
                left:'250px',
                height:'+=150px',
                width:'+=150px'
            });
        });
    });
```

7.3 animate() - 使用预定义的值

```js

    $("button").click(function(){
        $("div").animate({
            height:'toggle'
        });
    });
```

7.4 animate() - 使用队列功能
```js
    案例1

        $("button").click(function(){
            var div=$("div");
            div.animate({height:'300px',opacity:'0.4'},"slow");
            div.animate({width:'300px',opacity:'0.8'},"slow");
            div.animate({height:'100px',opacity:'0.4'},"slow");
            div.animate({width:'100px',opacity:'0.8'},"slow");
        });

    案例2

        $("button").click(function(){
            var div=$("div");
        })
```

8. jQuery 方法链接

```js
    //下面的例子把 css()、slideUp() 和 slideDown() 链接在一起。"p1" 元素首先会变为红色，然后向上滑动，再然后向下滑动：
    <p id="p1">菜鸟教程!!</p>
    <button>点我</button>
    $(document).ready(function(){
        $("button").click(function(){
            $("#p1").css("color","red").slideUp(2000).slideDown(2000);
        });
        div.animate({left:'100px'},"slow");
        div.animate({fontSize:'3em'},"slow");
    });
```

9. Jquery Dom 操作

    获得内容 - text()、html() 以及 val()三个简单实用的用于 DOM 操作的 jQuery 方法：
        text() - 设置或返回所选元素的文本内容
        html() - 设置或返回所选元素的内容（包括 HTML 标记）
        val() - 设置或返回表单字段的值

```js
    Text HTML
        <p id="test">这是段落中的 <b>粗体</b> 文本。</p>
        <button id="btn1">显示文本</button>
        <button id="btn2">显示 HTML</button>

        <script>
            $(document).ready(function () {
                $("#btn1").click(function () {
                 alert("Text: " + $("#test").text());
                });
                $("#btn2").click(function () {
                    alert("HTML: " + $("#test").html());
                });
            });
        </script>

    Val.
        <p>名称: <input type="text" id="test" value="菜鸟教程"></p>
        <button>显示值</button>
        <script>
            $(document).ready(function(){
                $("button").click(function(){
                    alert("值为: " + $("#test").val());
                });
            });
        </script>

    Attr.
        <p><a href="//www.runoob.com" id="runoob">菜鸟教程</a></p>
        <button>显示 href 属性的值</button>

        $(document).ready(function(){
            $("button").click(function(){
                alert($("#runoob").attr("href"));
            });
        });

    回调函数

        <p><a href="//www.runoob.com" id="runoob">菜鸟教程</a></p>

        <button>修改 href 值</button>

        <p>点击按钮修改后，可以点击链接查看 href 属性是否变化。</p>

        <script>
            $(document).ready(function(){
                $("button").click(function(){
                    $("#runoob").attr("href", function(i, origValue){
                    return origValue + "/jquery";
                    });
                });
            });
</script>

 ``` 

 9.1 jQuery - 添加元素

    添加新的 HTML 内容
    我们将学习用于添加新内容的四个 jQuery 方法：
        append() - 在被选元素的结尾插入内容
        prepend() - 在被选元素的开头插入内容
        after() - 在被选元素之后插入内容
        before() - 在被选元素之前插入内容

```js

    jQuery append() 方法
    jQuery append() 方法在被选元素的结尾插入内容（仍然该元素的内部）。
    <p>这是一个段落。</p>
    <p>这是另外一个段落。</p>
    <ol>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ol>
    <button id="btn1">添加文本</button>
    <button id="btn2">添加列表项</button>

    <script>
    $(document).ready(function(){
        $("#btn1").click(function(){
        $("p").append(" <b>追加文本</b>。");
        });

        $("#btn2").click(function(){
            $("ol").append("<li>追加列表项</li>");
        });
    });
    </script>


    jQuery prepend() 方法
    jQuery prepend() 方法在被选元素的开头插入内容。

    $(document).ready(function(){
	    $("#btn1").click(function(){
	    	$("p").prepend("<b>在开头追加文本</b>。 ");
	    });
	    $("#btn2").click(function(){
		    $("ol").prepend("<li>在开头添加列表项</li>");
	    });
    });

    jQuery after() 和 before() 方法
    jQuery after() 方法在被选元素之后插入内容。
    jQuery before() 方法在被选元素之前插入内容。

    <img src="/images/logo.png" >
    <br><br>
    <button id="btn1">之前插入</button>
        <button id="btn2">之后插入</button>

    <script>
        $(document).ready(function(){
            $("#btn1").click(function(){
                 $("img").before("<b>之前</b>");
            });

            $("#btn2").click(function(){
                $("img").after("<i>之后</i>");
            });
        });
    </script>
```

10. jQuery - 删除元素
    通过 jQuery，可以很容易地删除已有的 HTML 元素。

    删除元素/内容
    如需删除元素和内容，一般可使用以下两个 jQuery 方法：

* remove() - 删除被选元素（及其子元素）
* empty() - 从被选元素中删除子元素


```JS
REMOVE
    <div id="div1" style="height:100px;width:300px;border:1px solid black;background-color:yellow;">

    这是 div 中的一些文本。
    <p>这是在 div 中的一个段落。</p>
    <p>这是在 div 中的另外一个段落。</p>
    
    <script>
        $(document).ready(function(){
            $("button").click(function(){
                $("#div1").remove();
            });
        });
    </script>

EMPTY
    $(document).ready(function(){
        $("button").click(function(){
            $("#div1").empty();
        });
    });

过滤被删除的元素
jQuery remove() 方法也可接受一个参数，允许您对被删元素进行过滤。

该参数可以是任何 jQuery 选择器的语法。

下面的例子删除 class="italic" 的所有 <p> 元素：

    <p>这是一个段落。</p>
    <p class="italic"><i>这是另外一个段落。</i></p>
    <p class="italic"><i>这是另外一个段落。</i></p>
    <button>移除所有  class="italic" 的 p 元素。</button>


    $(document).ready(function(){
        $("button").click(function(){
            $("p").remove(".italic");
        });
    });
```

11. jQuery - 获取并设置 CSS 类
    通过 jQuery，可以很容易地对 CSS 元素进行操作。 切换 CSS 类

    jQuery 操作 CSS
    jQuery 拥有若干进行 CSS 操作的方法。我们将学习下面这些：

*   addClass() - 向被选元素添加一个或多个类
*   removeClass() - 从被选元素删除一个或多个类
*   toggleClass() - 对被选元素进行添加/删除类的切换操作
*   css() - 设置或返回样式属性

```js
jQuery addClass() 方法
下面的例子展示如何向不同的元素添加 class 属性。当然，在添加类时，您也可以选取多个元素：
    <h1>标题 1</h1>
    <h2>标题 2</h2>
    <p>这是一个段落。</p>
    <p>这是另外一个段落。</p>
    <div>这是一些重要的文本!</div>
    <br>
    <button>为元素添加 class</button>

    <script>
    $(document).ready(function(){
    $("button").click(function(){
        $("h1,h2,p").addClass("blue");
        $("div").addClass("important");
    });
    });
    </script>   
    <style type="text/css">
    .important
    {
	    font-weight:bold;
	    font-size:xx-large; 
    }
    .blue
    {
	    color:blue;
    }
    </style>


jQuery toggleClass() 方法
下面的例子将展示如何使用 jQuery toggleClass() 方法。该方法对被选元素进行添加/删除类的切换操作：
    <h1 class="blue">标题 1</h1>
    <h2 class="blue">标题 2</h2>
    <p class="blue">这是一个段落。</p>
    <p>这是另外一个段落。</p>
    <br>
    <button>切换 class</button>

    <script>
        $(document).ready(function(){
            $("button").click(function(){
                $("h1,h2,p").toggleClass("blue");
            });
        });
    </script>
    <style type="text/css">
        .blue{
            color:blue;
        }       
    </style>
```

12. jQuery css() 方法
    css() 方法设置或返回被选元素的一个或多个样式属性。

    返回 CSS 属性
    如需返回指定的 CSS 属性的值，请使用如下语法：

```JS
返回 CSS 属性
    <h2>这是一个标题</h2>
    <p style="background-color:#ff0000">这是一个段落。</p>
    <p style="background-color:#00ff00">这是一个段落。</p>
    <p style="background-color:#0000ff">这是一个段落。</p>
    <button>返回第一个 p 元素的 background-color </button>

    <script>
        $(document).ready(function(){
            $("button").click(function(){
                alert("背景颜色 = " + $("p").css("background-color"));
            });
        });
    </script>

设置 CSS 属性

    $(document).ready(function(){
        $("button").click(function(){
             $("p").css("background-color","yellow");
        });
    });

设置多个 CSS 属性
    $("p").css({"background-color":"yellow","font-size":"200%"});
```


13. jQuery 尺寸方法
    jQuery 提供多个处理尺寸的重要方法：

*   width()
*   height()
*   innerWidth()
*   innerHeight()
*   outerWidth()
*   outerHeight()

```js

jQuery width() 和 height() 方法
width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。
height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。
    <div id="div1" style="height:100px;width:300px;padding:10px;margin:3px;border:1px solid blue;background-color:lightblue;"></div>
    <br>
    <button>显示 div 元素的尺寸</button>
    <p>width() - 返回元素的宽度</p>
    <p>height() - 返回元素的高度</p>


    <script>
        $(document).ready(function(){
            $("button").click(function(){
                var txt="";
                txt+="div 的宽度是: " + $("#div1").width() + "</br>";
                txt+="div 的高度是: " + $("#div1").height();
                $("#div1").html(txt);
            });
        });
    </script>
jQuery innerWidth() 和 innerHeight() 方法
innerWidth() 方法返回元素的宽度（包括内边距）。
innerHeight() 方法返回元素的高度（包括内边距）

    <script>
        $(document).ready(function(){
            $("button").click(function(){
                var txt="";
                txt+="div 宽度: " + $("#div1").width() + "</br>";
                txt+="div 高度: " + $("#div1").height() + "</br>";
                txt+="div 宽度，包含内边距: " + $("#div1").innerWidth() + "</br>";
                txt+="div 高度，包含内边距: " + $("#div1").innerHeight();
                $("#div1").html(txt);
            });
        });
    </script>

jQuery outerWidth() 和 outerHeight() 方法
outerWidth() 方法返回元素的宽度（包括内边距和边框）。

outerHeight() 方法返回元素的高度（包括内边距和边框）。

    <script>
        $(document).ready(function(){
            $("button").click(function(){
                var txt="";
                txt+="div 宽度: " + $("#div1").width() + "</br>";
                txt+="div 高度: " + $("#div1").height() + "</br>";
                txt+="div 宽度，包含内边距和边框: " + $("#div1").outerWidth() + "</br>";
                txt+="div 高度，包含内边距和边框: " + $ ("#div1").outerHeight();
                 $("#div1").html(txt);
            });
        });
    </script>
```
