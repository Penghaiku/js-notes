var fs = require('fs')
fs.readdir('D:/BaiduNetdiskDownload/www',function (err,files) {
	if (err) {
		return console.log('文件目录不存在')
	}
	console.log(files)


})