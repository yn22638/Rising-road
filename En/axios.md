1.安装axios 

    npm install --save axios
2.在入口main.js中导入axios 并将axios写入vue的原型，这样就能更简单的使用。

    import axios from 'axios'
    import Qs from 'qs'
    //QS是axios库中带的，不需要我们再npm安装一个
 
    Vue.prototype.axios = axios;
    Vue.prototype.qs = Qs;
3.在项目里愉快的使用axios啦

    this.axios.post('/api/test',this.qs.stringify({'name':'xiaoming','sex':'nan'}),{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function(res){
            console.log(res.data)
                  //控制台打印请求成功时返回的数据
               //bind(this)可以不用
          }.bind(this))
          .catch(function(err){
            if(err.response) {
              console.log(err.response)
                //控制台打印错误返回的内容
            }
                //bind(this)可以不用
          }.bind(this))