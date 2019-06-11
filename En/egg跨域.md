# web端访问服务器，存在跨域请求问题，egg作为服务端，需要开放请求域，方法如下：
1、安装egg-cors

    npm i egg-cors -S
2、在config/plugin.js声明

    exports.cors = {
        enable: true,
        package: 'egg-cors',
    };
3、在config/config.default.js配置


    //跨域配置
    config.security = {
        csrf: {
        enable: false,
        ignoreJSON: true
        },
        domainWhiteList: ['http://www.baidu.com', 'http://localhost:8080'], //配置白名单
    };
  
    config.cors = {
        // origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };
