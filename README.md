# egg-syllabus-framework

## 快速开始
下载egg模板，并安装依赖
```
$ npm i egg-init -g
$ egg-init <文件夹名字> --type=simple
$ cd <文件夹名字>
$ npm i
```
安装`egg-syllabus-framework`
```
$ npm install egg-syllabus-framework --save
```
修改package.json，在JSON最外层（与name同级）新增如下内容：
```
// package.json
"egg": {
  "framework": "egg-syllabus-framework"
},
```
启动框架
```
$ npm run dev
```
打开 `http://127.0.0.1:7001` 体验


## 特性
###  默认关闭CSRF校验
对于小程序来说，小程序没有cookie，不会出现CSRF，并且由于没有cookie，无法通过CSRF校验
如果客户端为浏览器，应该开启CSRF校验。开启方式如下
```
// config/config.default.js
config.security = {
    csrf: false
}
```

### 日志记录

#### 请求响应日志
自动打印所有请求的参数和响应结果到日志文件中

##### 屏蔽
对于部分不必要的日志记录，可以屏蔽。
例如页面的响应结果，必定为页面的HTML代码，不需要输出，输出到日志中反而会占用过多的日志行数，淹没正常日志
屏蔽方式如下，ignore填写需要屏蔽的请求的url，支持字符串、正则、函数，函数需要返回true 或false
```
// config/config.default.js
config.response = {
  ignore:[
      '/favicon.ico'
  ]
}
```

#### 请求链路日志
当`Controller`、`Service`的方法被调用时，能够自动打印出日志
注意：经过的中间件链路不会打印日志

#### 请求ID
待完善

### 错误返回
我们约定了统一的错误返回格式
```
{
	code: "01020304",
	message: "error message"
}
```
当code为0时代表没有错误

#### 错误码格式
我们约定了如下的错误码格式：

+ 1-2位 —— 代表发生错误的后台，在线上服务中，我们的后台服务可能不止一个
+ 3-4位 —— 01 代表 错误发生在`Controller`，02 代表错误发生在`service`，03代表错误发生在`Middleware`，04相关数据库相关的错误，其他待补充
+ 5-6位 —— 具体的业务错误码

如果某一错误码片段为全0，则代表该部分的错误码没有被登记

#### 配置
在使用错误码前需要进行配置，登记错误码的映射规则，需要在全局配置文件下新增如下配置
```
// config/config.default.js
config.errCode = {
    APP_ERROR_CODE: '01',   // 应用错误码，错误码1-2位，其他为3-6位
    NOT_REGISTER_ERROR: '0000', // 未登记默认错误码
}
```

#### 抛出错误
我们封装了一个方法`ctx.helper.createError()`，用来生成带有错误码信息的Error对象
```
/**
 * 创建一个带有错误码的Error对象
 * @param msg 错误信息
 * @param code 5-8位错误码
 * @param arg_props 其他混入到Error对象的属性
 * @returns {Error} 返回带错误码的Error对象
 */
createError(msg, code, arg_props) {}
```
我们只需要这样调用即可抛出一个带有错误码的Error对象，如果该对象没有被手动捕获，将会被框架捕获并返回给用户
```
throw ctx.helper.createError('error message', ctx.config.errCode.YOUR_ERROR)
```

#### 给客户端返回错误信息
默认不发送错误信息说明到客户端
可以通过在配置里设置`showErrorMsg`为`true`，将`ctx.helper.createError()`创建的错误对象的错误信息返回到客户端
```
config.showErrorMsg = true
```

### 代码风格

#### 变量名

+ 对象和数组不同单词用驼峰
+ 其他使用下不同单词用下划线分割
+ 常量需要大写

---
### 待完善文档
+ 小程序登录服务
+ 工具包，加密解密，带错误码的错误对象

### 待完成功能
+ 静态页面中间件，改善HTML的请求日志