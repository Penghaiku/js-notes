//require 方法有两个作用：
//		1.加载文件模块并执行里面的代码
//		2.拿到被加载文件模块导出的接口对象,就是下面这个举例的bExports
//		
//		在每一个文件模块中都提供了一个对象：exports
//		exports默认是一个空对象
//      你要做的就是把所有需要被外部访问的成员挂载到这个exports对象中
//require('./b.js')
//console.log(foo)
var bExports=require('./b.js')
console.log(bExports.foo)
console.log(bExports.add(10,30))
console.log(bExports)
bExports.readFile('./a.js')
var fs=require('fs')
fs.readFile('./a.js',function(err,data){
	if(err){
		console.log('文件读取失败')
	}
	else
		console.log(data.toString())
})