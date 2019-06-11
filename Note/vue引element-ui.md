1.安装框架

    npm i element-ui -S

2.安装好，在项目中【src】目录下找到【main.js】,在一下位置添加

    【import ElementUI from 'element-ui';】
    【import 'element-ui/lib/theme-chalk/index.css';】，
3.引入后，在【main.js】下面写多以下代码 

    【Vue.use(ElementUI);】，
意思是，vue使用了element-ui,

4.可以使用element-ui里面的组件了，在element-ui官网随便找一个按钮的样式，复制代码进去页面就可以使用了，