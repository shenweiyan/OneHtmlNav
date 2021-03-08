# OneHtmlNav

OneHtmlNav 是基于小呆导航的超级精简版本。在接触 OneHtmlNav 之前个人一直使用百度自带的导航，百度自带的导航整体是非常棒的，但更换电脑或浏览器时需要重新登陆账号密码，不够方便。

于是从满足自身最基本的导航功能出发，对 OneHtmlNav 的源码进行了一点点精简优化，由于定的是这个目标所以界面美化什么的就不要追求了，我前端代码能勉强看懂就不错了，所以各位如果有精力可以自己琢磨或者参考官网美化一下。

访问小呆导航源项目: [github](https://github.com/xiaodai945/WEBJIKE)

访问 OneHtmlNav 源项目: [github](https://github.com/bituplink/OneHtmlNav)



### 修改说明

基于 OneHtmlNav 项目优化，原项目增减导航地址都要修改 html 代码，不够直观，非常麻烦，容易出错。所以提取出一个 config.js 文件，使用 js 对象配置页面。

基于小呆导航源码，本人对 config.js 和导航的 HTML 代码做了一点点更改，包括：

1. 自动获取 copyright 的年份；
2. 调整部分静态资源的链接，如 js、背景图片；
3. 增加左侧目录（风格一）和不带左侧目录（风格二）的两种示例；


### 捐助
请我喝瓶冰可乐~

方式一: 支付宝捐助
* ![alipay](assets/alipay.png)

方式二: 微信捐助
* ![wxpay](assets/weixin.png)

### license
这是基于小呆导航MIT协议的代码进行开发的，为了遵守协议规定，license 文件和界面声明我都保留了，使用的时候建议大家也遵守协议规定。
