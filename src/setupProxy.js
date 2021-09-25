//CJS语法 React找到setupProxy.js加载到webpack
// 初始化脚手架就已经有http-proxy-middleware了

const proxy = require('http-proxy-middleware')

module.exports = function(app){//收到服务对象
    app.use(
        proxy('/api1',{        //配置代理地址端口的前缀，只要是包含api1就代理转发
            target:"http://localhost:5000",
            changeOrigin:true, //true代表使用代理地址端口，false代表使用客户端的地址
            pathRewrite:{'^/api1':''}  //先识别代理标识api1,识别完了再代理前把api1替换
        }),
        proxy('/api2',{        
            target:"http://localhost:5001",
            changeOrigin:true,
            pathRewrite:{'^/api2':''}  
        }),
    )
}