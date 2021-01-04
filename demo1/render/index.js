const fs = require("fs")
window.onload = () => {
    console.log('12345678')
    var btnDom = document.querySelector("#btn");
    var textareaDom = document.querySelector("#textarea");
    btnDom.onclick = () => {
        fs.readFile("package.json",(err,data)=>{
            if(err){
                return console.log(err)
            }
            textareaDom.innerHTML = data.toString();
            fs.writeFile('temp.json',data,function (err) {
		        if (err){
		        	console.log('写入失败')
		        }
		        else{
		        console.log('文件写入成功,请查看当前目录的 temp.json 文件')
		        }
		    })

        })


    }
}