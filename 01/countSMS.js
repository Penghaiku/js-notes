// 修改为您的apikey.可在官网（https://www.yunpian.com)登录后获取
var https = require('https');
var fs = require("fs")
var os = require("os");
var path = require("path");
var qs = require('querystring');
var apikey = 'c403da7e7f1ad6dc28dae19e76acc081';

var tpl_value ={'#page_size#':5}
// 查询账户信息https地址
var get_user_info_uri = '/v2/user/get.json';
// 智能匹配模板发送https地址
var sms_host = 'sms.yunpian.com';
var page_size =  5;
send_tpl_sms_uri = '/v2/sms/pull_status.json';

send_tpl_sms(send_tpl_sms_uri,apikey,sms_host,page_size);

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
            //将每次查询的结果作为一个数组附加到 文件末尾
            fs.appendFileSync('./01/temp.json', chunk, { mode: 0o600 });
        });  
    }); 
    //console.log(content);
    req.write(content);  
    req.end();   
}

