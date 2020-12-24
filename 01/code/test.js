//'use strict';

var fs = require('fs')

fs.readFile('./code/data/db.json', 'utf-8', function (error, data) {
    if (error) 
    {
        console.log(error)
    } 
    else 
    {
        console.log(data)
    }
})

fs.writeFile('./code/data/test.md', '大家好，给大家介绍一下，我是Node.js', function (error) {
  // console.log('文件写入成功')
  // console.log(error)
  if (error) {
    console.log('写入失败')
  } else {
    console.log('写入成功了')
  }
})
