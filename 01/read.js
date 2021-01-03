var XLSX =require('xlsx') 
var fs=require('fs')

const name_phone = XLSX.readFile('./01/监考老师电话号码库.xlsx')
const ws1 = name_phone.Sheets[name_phone.SheetNames[0]]
const data1 = XLSX.utils.sheet_to_json(ws1)
fs.writeFileSync('./01/phone_number.json', JSON.stringify(data1, null,8))

const exam = XLSX.readFile('./01/14-17周专业课考试安排表L.xlsx')
const ws2 = exam.Sheets[exam.SheetNames[0]]
const data2 = XLSX.utils.sheet_to_json(ws2)
fs.writeFileSync('./01/exam.json', JSON.stringify(data2, null,8))