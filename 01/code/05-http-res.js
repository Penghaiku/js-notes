//	接下来，我们要干一件使用node很有成就感的一件事儿
//	你可以使用Node非常轻松的构建一个web服务器
//	在Node中专门提供了一个核心模块：http
//	http在这个模块的职责就是帮你创建编写服务器的
//	1.加载http核心模块
var http=require('http')
//	2.使用http.createServer()方法创建一个Web服务器
//	返回一个Server实例
var server=http.createServer()
//request 请求事件处理函数，需要接受两个参数
//	requset 请求对象
//     请求对象可以用来获取客服端的一些请求信息，例如请求路径
//	response  响应对象
//     响应对象可以给客服端发送响应信息
server.on('request',function(request,response){
	console.log('收到客服端的请求了,	请求路径是: '+request.url)
	//获取对方ipresponse.socket.remoteAddress对方端口response.socket.remotePort
	console.log('请求我的客户端的浏览器的地址是： ',response.socket.remoteAddress,response.socket.remotePort)
//	 response对象有一个方法：write可以用来给客服端发送响应数据
//	 write可以使用多次，但是最后一定要使用end来结束响应，否则客服端会一直等待下去
var str=request.url
response.setHeader("Content-type", "text/plain;charset=UTF-8")
if(str==='/')
 	response.end('首页')
 	else if(str==='/login')
  		response.end('登录')
	else if(str==='/register')
		response.end('注册')
	else if(str==='/haha')
		response.end('哈哈哈')
	else if(str==='/products'){
	var products=[
		{
			name:  '苹果X',
			price: 8888
		},
		{
			name:  '菠萝X',
			price: 5000
		},
		{
			name:  '小辣椒',
			price: 1999
		}

	]
	response.end(JSON.stringify(products))
}
else
	response.end('404 Not Find')

//告诉客服端，我的话说完了，可以呈递给客户
//response.end()
	/*
	1、这个函数功能：将字符串转换成数组
		JSON.parse('[]')
		[]
	2、这个函数功能：将数组转换成字符串
		JSON.stringify([])
		"[]"
	*/
	//响应内容只能是二进制数据或字符串
	//数字
	//数组
	//对象或者布尔值都不行
})

//由于现在我们的服务器的能力还非常有限，无论是什么请求，都只会回复hello who are you I am nodejs
//思考
//我希望当请求不同的路径的时候响应不同的结果
//例如：
// /index
// /login 登录
// /register 注册
// /haha   哈哈哈

//	 4.绑定端口号，启动服务器
server.listen(3000,function(){

	console.log('服务器启动成功了，可以通过  来进行访问')
})
