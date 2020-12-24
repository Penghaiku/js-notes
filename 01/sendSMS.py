#!/usr/local/bin/python
# -*-coding:utf-8-*-

#author: jacky
# Time: 15-12-15
# Desc: 短信http接口的python代码调用示例
# https://www.yunpian.com/api/demo.html
# https访问，需要安装  openssl-devel库。apt-get install openssl-devel

import httplib
import urllib
import json
# 服务地址
sms_host = "sms.yunpian.com"
voice_host = "voice.yunpian.com"
# 端口号
port = 443
# 版本号
version = "v2"
# 查账户信息的URI
user_get_uri = "/" + version + "/user/get.json"
# 智能匹配模板短信接口的URI
sms_send_uri = "/" + version + "/sms/single_send.json"
# 模板短信接口的URI
sms_tpl_send_uri = "/" + version + "/sms/tpl_single_send.json"


def tpl_send_sms(apikey, tpl_id, tpl_value, mobile):
    """
    模板接口发短信
    """
    params = urllib.urlencode({
        'apikey': apikey,
        'tpl_id': tpl_id,
        'tpl_value': urllib.urlencode(tpl_value),
        'mobile': mobile
    })
    headers = {
        "Content-type": "application/x-www-form-urlencoded",
        "Accept": "text/plain"
    }
    conn = httplib.HTTPSConnection(sms_host, port=port, timeout=30)
    conn.request("POST", sms_tpl_send_uri, params, headers)
    response = conn.getresponse()
    response_str = response.read()
    conn.close()
    return response_str


if __name__ == '__main__':
    # 修改为您的apikey.可在官网（http://www.yunpian.com)登录后获取
    apikey = "xxxxxxxxxxxxxxxx"
    # 修改为您要发送的手机号码，多个号码用逗号隔开
    mobile = "xxxxxxxxxxxxxxxx"
    # 修改为您要发送的短信内容
    text = "【云片网】您的验证码是1234"
    # 查账户信息
    # print(get_user_info(apikey))
    # 调用智能匹配模板接口发短信
    # print send_sms(apikey, text, mobile)
    # 调用模板接口发短信
    tpl_id = 1  # 对应的模板内容为：您的验证码是#code#【#company#】
    tpl_value = {'#code#': '1234', '#company#': '云片网'}
    print tpl_send_sms(apikey, tpl_id, tpl_value, mobile)
    # 调用模板接口发语音短信
