//require是一个方法
//它的作用就是用来加载模块的
//在Node中，模块有三种：
//	具名的核心模块，例如 fs、http
//  用户自己编写的文件系统
//	相对路径必须加./
//	在Node中没有全局作用域，只有模块作用域
//	外部无法访问内部
//	内部无法访问外部
//	既然是模块作用域，那如何让模块与模块之间进行通信
//	有时候，我们加载文件模块的目的不是为了简简单单的执行里面的代码，更重要的是为了使用里面的某个方法
var foo='aaaa'
console.log('a start')
function add(x,y){
	return x+y
}
//可以省略后缀名,千万不能省略./,推荐使用这种
require('./b')
console.log('a end')
console.log('foo的值是:'+foo)