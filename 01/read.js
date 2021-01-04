var XLSX =require('xlsx') 
var fs=require('fs')

const name_phone = XLSX.readFile('./01/监考老师电话号码库.xlsx')
const ws1 = name_phone.Sheets[name_phone.SheetNames[0]]
const data1 = XLSX.utils.sheet_to_json(ws1)
fs.writeFile('./01/phone_number.json', JSON.stringify(data1, null,8),function (err) {
	if (err){
		console.log('写入失败')
	}
	else{
    console.log('电话信息文件写入成功,请查看 phone_number.json 文件')
	}
})
//console.log(data1)
// https://www.cnblogs.com/unreal-feather/archive/2004/01/13/12794129.html

const exam = XLSX.readFile('./01/14-17周专业课考试安排表L.xlsx')
const ws2 = exam.Sheets[exam.SheetNames[0]]
//使用！ref设置表格的有效范围 A2：G13
ws2['!ref']= XLSX.utils.encode_range({s:{c:0, r:1}, e:{c:6, r:12}})
const data2 = XLSX.utils.sheet_to_json(ws2) //将表格解析成json格式

console.log("查询监考老师电话：") 
for(var i=0;i<data2.length;i++)
{
// 补全 每一条监考信息，如果某个位置为空，则用上一条信息同位置的信息代替
    if(data2[i].考试课程 ==null)
    data2[i].考试课程=data2[i-1].考试课程.trim()
    if(data2[i].考试时间 ==null)
    data2[i].考试时间=data2[i-1].考试时间
    if(data2[i].任课教师 ==null)
     data2[i].任课教师=data2[i-1].任课教师
//用于删除字符中开头和结尾的空格
    data2[i].考试课程=data2[i].考试课程.trim()
//以顿号为标志分割监考教师姓名
    data2[i].监考=data2[i].监考.split("、")

   // console.log(data2[i]) 
    var name2phone
    //链接两个表查询对应监考老师的电话号码
    for(var j=0;j<data1.length;j++)
    {
        if(data2[i].监考[0]==data1[j].姓名)
        name2phone = data2[i].监考[0] +" "+ data1[j].电话
         
    }
    
    console.log(name2phone) 
}

fs.writeFile('./01/exam.json', JSON.stringify(data2, null,8),function (err) {
	if (err){
		console.log('写入失败')
	}
	else{
    console.log('监考信息文件写入成功,请查看 exam.json 文件')
	}
})

