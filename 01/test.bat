#/bin/sh
#author jacky
#修改为您的apikey
apikey="c403da7e7f1ad6dc28dae19e76acc081"
#修改为您要发送的手机号
mobile="15770637948"
#设置您要发送的内容
text="测试使用"
echo "get user info:"
curl --data "apikey=$apikey" "https://sms.yunpian.com/v2/user/get.json"
echo "\nsend sms:"
curl  --data "apikey=$apikey&mobile=$mobile&text=$text" \
"https://sms.yunpian.com/v2/sms/single_send.json"