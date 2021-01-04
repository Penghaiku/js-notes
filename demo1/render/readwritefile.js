const fs = require("fs")
//var file=require("index")
window.onload = () => {
    console.log('12345678')
    var btnDom = document.querySelector("#btn1");
    var textareaDom = document.querySelector("#textarea");
    btnDom.onclick = () => {
	fs.readFile("package.json",(err,data)=>{
            if(err){
                return console.log(err)
            }
			textareaDom.innerHTML = data.toString();
			

        })
    }
}
