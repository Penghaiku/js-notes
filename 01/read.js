var XLSX =require('xlsx') 
var fs=require('fs')

const name_phone = XLSX.readFile('./01/监考老师电话号码库.xlsx')
const ws1 = name_phone.Sheets[name_phone.SheetNames[0]]
const data1 = XLSX.utils.sheet_to_json(ws1)
fs.writeFileSync('./01/phone_number.json', JSON.stringify(data1, null,8))
// https://www.cnblogs.com/unreal-feather/archive/2004/01/13/12794129.html
const exam = XLSX.readFile('./01/14-17周专业课考试安排表L.xlsx')
const ws2 = exam.Sheets[exam.SheetNames[0]]
//设置表格的有效范围 A2：G13
ws2['!ref']= XLSX.utils.encode_range({s:{c:0, r:1}, e:{c:6, r:12}})
const data2 = XLSX.utils.sheet_to_json(ws2)

for(var i=0;i<data2.length;i++)
{
    if(data2[i].考试课程!=null)
    console.log(data2[i])
}
fs.writeFileSync('./01/exam.json', JSON.stringify(data2, null,8))