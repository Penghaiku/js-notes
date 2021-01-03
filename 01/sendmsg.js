// 修改为您的apikey.可在官网（https://www.yunpian.com)登录后获取
var https = require('https');
var fs = require("fs")
var os = require("os");
var path = require("path");
var qs = require('querystring');
var apikey = 'c403da7e7f1ad6dc28dae19e76acc081';
//var apikey = '86097ce60f744b8ef6ac4e1ef12597c3';
// 修改为您要发送的手机号码，多个号码用逗号隔开
var mobile = '15770637948';
// 修改为您要发送的短信内容
var text = '测试使用';
// 指定发送的模板编号
var tpl_id = 3569052;
//4174182
// 

//var tpl_value =  {'#name#':'6666','#code#':'ECUT'};
var tpl_value ={'#page_size#':5}
// 查询账户信息https地址
var get_user_info_uri = '/v2/user/get.json';
// 智能匹配模板发送https地址
var sms_host = 'sms.yunpian.com';
var page_size =  1;
//var voice_host = 'voice.yunpian.com';

//send_sms_uri = '/v2/sms/single_send.json';
//send_sms_uri = '/v2/sms/pull_status.json';

// 指定模板发送接口https地址
//send_tpl_sms_uri = '/v2/sms/tpl_single_send.json';
send_tpl_sms_uri = '/v2/sms/pull_status.json';
//query_user_info(get_user_info_uri,apikey);
//send_sms(send_sms_uri,apikey,mobile,text);

send_tpl_sms(send_tpl_sms_uri,apikey,sms_host,page_size);
/*
function send_sms(uri,apikey,mobile,text){
    var post_data = {  
    'apikey': apikey,  
    'mobile':mobile,
    'text':text,
    };//这是需要提交的数据  
    var content = qs.stringify(post_data);  
    post(uri,content,sms_host);
}
*/
function send_tpl_sms(uri,apikey,sms_host,page_size){
    var post_data = {  
    'apikey': apikey,
    'page_size':page_size,
  //  'tpl_value':qs.stringify(tpl_value),  
    };//这是需要提交的数据  
    var content = qs.stringify(post_data);  
    post(uri,content,sms_host); 
}
function post(uri,content,host){
    var options = {  
        hostname: host,
        port: 443,  
        path: uri,  
        method: 'POST',  
        headers: {  
            'Accept':'application/json;charset=utf-8',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
        }  
    };


    var req = https.request(options, function (res) {  
        // console.log('STATUS: ' + res.statusCode);  
        // console.log('HEADERS: ' + JSON.stringify(res.headers));  
        res.setEncoding('utf8');  
        res.on('data', function (chunk) {  
            console.log('\n BODY: ' + chunk );  
            //  fs.writeFile('./count_SMS.json',JSON.stringify(chunk, null,8),function(error){
            fs.writeFile('./count_SMS.json',chunk,function(error){
	        if(error){
	        	console.log('文件写入失败')
	        }else
	        console.log('文件写入成功')
})
        });  
    }); 
    //console.log(content);
    req.write(content);  
    req.end();   
}

