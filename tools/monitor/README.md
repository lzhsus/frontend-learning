监控系统
========

## 数据指标

- 访问

    - PV/UV
    - 页面来源
    - 操作系统
    - 浏览器
    - 分辨率
    - 登录率
    - 地域分布
    - 网络类型
    - 访问时段
    - 停留时长
    - 到达深度

- 点击

    - 页面总点击量
    - 人均点击量
    - 流出 url
    - 点击时间
    - 首次点击时间
    - 点击热力图

- 性能

    - 白屏时间
    - 首屏时间
    - 用户可操作时间
    - 页面总下载时间

- 异常

    - 异常的提示信息
    - JS 文件名
    - 异常所在行
    - 发生异常的浏览器
    - 堆栈信息

参考文献

- [前端数据之美 -- 基础篇](http://fex.baidu.com/blog/2014/05/front_end-data/)

## 功能特性

- 数据统计
- 性能分析
- 错误监控

## 开源工具

- [Sentry](https://sentry.io)
- [fex-team/alogs](https://github.com/fex-team/alogs)

## 商业产品

| 产品\特性 | 支持平台 | 功能特性 | 
| --- | --- | --- |
| [Bugsnag](https://www.bugsnag.com) | JavaScript | 错误监控 |
| [FrontJS](https://www.frontjs.com/) | JavaScript、微信小程序 | 性能监控、错误监控 |
| [FunDebug](https://www.fundebug.com) | JavaScript、Nodejs、RN、微信小程序、微信小游戏、支付宝小程序、Nodejs | 错误监控 |
| [Sentry](https://sentry.io) | JavaScript | 错误监控 |

小程序专用

- 微信小程序助手
- 阿拉丁小程序统计平台
- 阿里云 ARMS 前端监控

### FrontJS

- dns: DNS 查询时间

    `performance.timing.domainLookupEnd - performance.timing.domainLookupStart`

- connect: HTTP 连接时间

    `performance.timing.connectEnd` - `e.performance.timing.connectStart`

- request: 服务端响应时间

    `performance.timing.responseStart` - `performance.timing.requestStart,`

- response: 响应下载时间

    `performance.timing.responseEnd` - `performance.timing.responseStart`
    
- dom: DOM 解析时间

    `performance.timing.domInteractive` - `performance.timing.domLoading`

- domContent: 资源下载执行时间

    `performance.timing.domComplete` - `performance.timing.domInteractive`

- load: 加载完成总耗时

    `performance.timing.domComplete` - `performance.timing.domainLookupStart`

## 参考文献

- [支持多种小程序！阿里云 ARMS 推出小程序监控](https://www.infoq.cn/article/3QHswJd*3g5Q0t1GdmCP)
- [7 天打造前端性能监控系统](http://fex.baidu.com/blog/2014/05/build-performance-monitor-in-7-days/)
- [百度前端性能监控与优化实践](https://www.slideshare.net/welefen/ss-13579027)
- [The Google Analytics Setup I Use on Every Site I Build](https://philipwalton.com/articles/the-google-analytics-setup-i-use-on-every-site-i-build/)

---

- [点击量统计的两种方案的优劣？](https://www.zhihu.com/question/34810604)
- [页面跳转时，统计数据丢失问题探讨](https://www.barretlee.com/blog/2016/02/20/navigator-beacon-api/)
- [user-tracking-demos](https://github.com/ruanyf/user-tracking-demos)
- [如何计算网站访问的有效PV量](http://www.sunnyu.com/?p=155)
- [几种常见WEB日志分析方法中被统计的用户访问量差异产生原因分析](http://www.sunnyu.com/?p=134)
- [为什么你统计 PV 的方式是错的？](https://juejin.im/post/58ef1fcc570c3500561c2e89#heading-5)
- [淘宝客网站为什么使用中间跳转页面间接转向淘宝店铺？](https://www.zhihu.com/question/21222345)
- [当你点击百度结果链接后，都发生了什么？](https://maxket.com/what-happened-after-clicking-baidu-result/)
- [Improved tracking with the `<a ping>` attribute - HTML5](https://deanhume.com/improved-tracking-with-the-a-ping-attribute-html5/)
- [Some thoughts on anchor ping](https://lapcatsoftware.com/articles/Safari-link-tracking2.html)
- https://caniuse.com/#feat=ping
