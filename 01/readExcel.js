var xlsx =require('node-xlsx') 
//var xlsx =require('xlsx') 
/*
var fs=require('fs')
// 解析到缓冲区
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`监考老师电话号码库.xlsx`));
// 解析文件
const workSheetsFromFile = xlsx.parse(`监考老师电话号码库.xlsx`);
*/
// 解析得到文档中的所有 sheet
var tele = xlsx.parse('./01/监考老师电话号码库.xlsx');

//console.log(JSON.stringify(tele));


tele.forEach(function(sheet){
    console.log(sheet['name']);
    // 读取每行内容
    for(var rowId in sheet['data']){
        if(rowId>=1){
            console.log(rowId);
            var row=sheet['data'][rowId];
            console.log(row);
        }

    }
});
var exam = xlsx.parse('./01/14-17周专业课考试安排表L.xlsx');
//console.log(JSON.stringify(exam));
exam.forEach(function(sheet){
    console.log(sheet['name']);
    // 选择第一个表格，读取每行内容，生成 json
    if(sheet['name']=='考试安排'){  
        for(var rowId in sheet['data']){
            if(rowId>=2){  //删除表头 --第 1、2行
            console.log(rowId);
            var row=sheet['data'][rowId]; //定义行 row
            var formalrow=sheet['data'][rowId-1]
            //如果第一列是数字，就显示出来==>用于筛选考场信息
                if(!isNaN(row[0])){
                     //for (var rowId in sheet['data']){
                    if(row[1]!=null)
                        {
                           // row[5]=formalrow[5];
                            //row[1]
                            //console.log(row);
                        }
                   // }
            console.log(row);
       }
            }
        }
    }

});

/* write
var obj = {"worksheets":[{"data":[["索引1","索引2","c"]]}]};
var file = xlsx.build(obj);
fs.writeFileSync('b.xlsx', file, 'binary');
*/