## 判断后台接口是否正在重启的chrome插件
* 由于在项目实践中，后台测试环境经常重启，有时写着写着后台就重启了，我们也不知道，然后默默找项目bug...然后，又自己好了....
* 该插件每隔3秒去请求一次后台接口，出现500的话，会通知，当后台重启完毕后，通知自动消失
* ![demo](./demo.png)
