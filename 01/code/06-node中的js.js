/*核心模块
Node为JavaScript提供了很多服务器级别的API,这些API绝大多数被包装到了一个具名的核心模块中了。
例如文件操作的fs核心模块，http服务购建的http模块，Path路径操作模块，os操作系统信息模块......
以后只要我说这个模块是一个核心模块，你就要马上想到如果想要使用它，就必须：
1 var fs=require('fs')
2 var http=require('require')
3 var path=require('path')
4 var os=require('os')
*/
//os操作系统
var os=require('os')
console.log(os.cpus())
console.log(os.totalmem())
//path操作文件相关
var path=require('path')
//此函数功能主要是找出文件名的后缀，汝.txt,.js,.md等等  
console.log(path.extname('c:/a/b/d/hello.js'))