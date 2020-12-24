//	第一个参数就是要读取的文件路径
//	第二个参数就是一个回调函数
//	成功
//  data  数据
//	error null
//	失败
//	data null
//	error 错误对象
var fs=require('fs')
fs.readFile('./data/db.json','utf-8',function(error,data){
console.log(data)//显示16进制
//console.log(data.toString())
if(error)
	return console.log('文件读取失败')
var students = JSON.parse(data).students
var students1 = JSON.parse(data).students1
//	console.log(dataFile)
var dataFile1 = JSON.stringify({
			students : students.id,
			students1 : students1
		})
fs.writeFile('./data/dbjsonTemp',dataFile1,function (err) {
	if (err){
		console.log('写入失败')
	}
	else{
	console.log('文件写入成功')
	}
})
})