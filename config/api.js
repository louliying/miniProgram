/**
 * 小程序配置文件
 */
// 接口URL配置文件

var ENV = "prod";

// 静态图片url domain
var imgMap = {
  'prod': 'cximg',
  'pre': 'chexiangpre',
  'sit': 'chexiangsit'
};
// ajaxurl domain
var domainMap = {
  'prod': 'chexiang',
  'pre': 'chexiangpre',
  'sit': 'chexiangsit'
};
// 支付 templateId
var payTemplateIdMap = {
  'prod': 'nItsmIDSGRdzmVFunWRr6CIcehX2uWcr-OasykliWyg',
  'pre': 'YxfMshipx_ZPk8SLALr4Fp9JUvTnyrBaBUKXFm4g2Ow',
  'sit': '-1wqNhiS3y7p7hpA0t02Xgtlure0qqIp5E1uMsx3ba4'
};
// 预约 templateId
var remindTemplateIdMap = {
  'prod': 'LAxC4VoD-O58qk36ukbY4pF70KFiwxG8ysFkiFCGU4c',
  'pre': 'ttfuHxBejLP3JS_Q8KgPcq_9dO0zzDu-7VJ837tJskw',
  'sit': 'xXtXQaHgEm5M48u9i1ouQd9uqwgXDJlBA7St7OluFjc'
};

var domain = domainMap[ENV];
var imgUrl = imgMap[ENV];
var host = "";

var config = {
    imgUrl,
    domain,
    host,
    debug: false,
    // 消息模板Id
    templateId: {
      pay: payTemplateIdMap[ENV],
      remind: remindTemplateIdMap[ENV]
    },
    // 消息模板点击详情去的页面
    toPage:{
        pay: 'page/coupon/ucenter/ucenter',
        remind: 'page/coupon/product/product?mdseCode='
    },
    //
    // 是否登陆微信
    isWxLoginUrl: `https://mgo.${domain}.com/wxAppLogin/isWxLogin`,
    //
    wxLoginUrl: `https://mgo.${domain}.com/wxAppLogin/wxLogin`,
    // mgo.chexiang.com/commondata
    saveSceneUrl: `https://mgo.${domain}.com/commondata/saveScene.htm`,
    // go2Login接口
    loginUrl: `https://mgo.${domain}.com/wxAppLogin/login.htm`,
    // sessionId 判断是否登录
    checkIsLoginBySessionId: `https://mgo.${domain}.com/wxAppLogin/isLogin`,
    // 退出登录
    loginoutUrl: `https://mgo.${domain}.com/wxAppLogin/logout`,
    // 获取用户信息
    // wxAppLogin/getUserInfo?sessionId=
    getUserInfo: `https://mgo.${domain}.com/wxAppLogin/getUserInfo`,
    // 获取短信验证码接口
    txtMsgUrl: `https://mgo.${domain}.com/wxAppLogin/getValidateCode.htm`,
    // 获取省市区
    province2District: `https://mgo.${domain}.com/commondata/getallregion.json`,
    // 获取品牌车系最新的
    getBrandsSeriers: `https://mgo.${domain}.com/commondata/getsetbrand.json`,
    // 获取品牌
    getBrands: `https://mgo.${domain}.com/commondata/getbrands.json`,
    // http://mgo.chexiangsit.com/commondata/getseries.json?brandId=1
    // 获取车系
    getSeriers: `https:://mgo.${domain}.com/commondata/getseries.json`,
    // 个人中心我的券列表
    myCouponUrl: `https://mgo.${domain}.com/mygiftcertificate/index.json`,
    // 个人中心查看礼包详情
    myApplyDetail: `https://mgo.${domain}.com/mygiftcertificate/detail.json`,
    // 个人中心常见问题
    problemUrl: `https://s3.cximg.com/cms/carmall_Html5/resource/taolibao/comm-problem/problem.json`,
    // 个人中心上传图片
    upCouponFileUrl: `https://mgo.${domain}.com/mygiftcertificate/uploadimg.json`,
    // 个人中心上传发票信息
    submitFormUrl: `https://mgo.${domain}.com/mygiftcertificate/handlegift.json`,
    // 领券接口
    grantUrl: `https://mgo.${domain}.com/getcoupon/grant.htm`,
    // 详情页接口
    detailUrl: `https://mgo.${domain}.com/getcoupon/detail.htm`,
    // 首页接口
    indexUrl: `https://mgo.${domain}.com/taolibao/index.htm`,
    // 心愿礼包留资
    //  'http://huiying.tunnel.qydev.com/taolibao/saveInfo.htm'
    leaveMsgSubmitUrl: `https://mgo.${domain}.com/taolibao/saveInfo.htm`,
    // 秒杀模块列表页
    seckillListUrl: `https://mgo.${domain}.com/specialMdse/mdseList.json`,
    // 品牌ID，取券列表
    couponListFromBrandId: `https://mgo.${domain}.com/specialMdse/mdseList/brand/`,
    // 秒杀模块详情页
    seckillDetailUrl: `https://mgo.${domain}.com/specialMdse/mdsedetail.json`,
    // 去下单
    orderUrl: `https://mgo.${domain}.com/wxAppOrder/order/submit.htm`,
    // 去支付
    payUrl: `https://mgo.${domain}.com/wxAppPay/order/prepay.htm`,
    // 提醒我
    mindMeUrl: `https://mgo.${domain}.com/wxapptips/remindme.json`,
    // 新老用户领取礼包
    giftOrderUrl: `https://mgo.${domain}.com/wxAppOrder/order/submitall`
};

module.exports = config