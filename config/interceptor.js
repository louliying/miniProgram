/**
 * 小程序配置文件
 */
// 接口URL配置文件
var Config = require('./api');
var domain = Config.domain;
var host = "";

var interceptor = [
    domain,
    host,
    // 个人中心我的券列表
    // `https://mgo.${domain}.com/mygiftcertificate/index.json`,
    // 个人中心查看礼包详情
    `https://mgo.${domain}.com/mygiftcertificate/detail.json`,
    // 个人中心常见问题
    `https://s3.cximg.com/cms/carmall_Html5/resource/taolibao/comm-problem/problem.json`,
    // 个人中心上传图片
    `https://mgo.${domain}.com/mygiftcertificate/uploadimg.json`,
    // 个人中心上传发票信息
    `https://mgo.${domain}.com/mygiftcertificate/handlegift.json`,
    // 领券接口
    `https://mgo.${domain}.com/getcoupon/grant.htm`,
    // 提醒我接口
    `https://mgo.${domain}.com/wxapptips/remindme.json`,
    // 新老用户领取礼包
    `https://mgo.${domain}.com/wxAppOrder/order/submitall`
];

module.exports = interceptor