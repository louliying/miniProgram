const config =  require('./config/api';
const openIdUrl = config.openIdUrl;
const wxLoginUrl = rconfig.wxLoginUrl;
const isWxLoginUrl = config).isWxLoginUrl;
const saveSceneUrl = config.saveSceneUrl;
App({
    data: {
        LoginKey: "3rd_session",
        isLaunchEntry: true,
        sceneVal: null,
    },
    onShow: function(options){
      let showState = options ? options.scene : 0;
      console.log(showState);
      console.log(this.data.isLaunchEntry);
      if (showState === 1047 || showState === 1048 || showState === 1049){
        this.data.isLaunchEntry = true;
        console.log(this.data.isLaunchEntry);
      }
        this.getCityIp();
    },
    globalData: {
        hasLogin: false,
        openid: null,
        // 用户信息
        userInfo:{},
        // 系统样式 做兼容性处理
        systemClass: '',
        // returnState : true 返回需要刷新 , false 返回不需要刷新
        returnState: {

        }
    },
    onLaunch: function() {
        // debugger;';
        let that = this;

        //进入首页先用/wxAppLogin/isWxLogin判断是否已登录微信，没有登录就先去得到code然后调用/wxAppLogin /wxLogin，会返回sessionId，存在客户端
        // that.isWxLogin();
        //每次打开淘礼包小程序，设置city.id到 本地存储；
        //获取用户信息权限
        wx.getUserInfo({
            success: function(res){
                that.globalData.userInfo = res.userInfo
            }
        });
        //获取小程序的基础库版本
        let systemInfo = wx.getSystemInfoSync();
        if(systemInfo.SDKVersion){
            let versionNumber = systemInfo.SDKVersion.replace(/\./g, '')  * 1;
            console.log('SDKVersion:' +versionNumber);
            if(versionNumber < 164){
                 wx.showModal({
                    title: '提示',
                    content: "当前微信版本过低，请更新微信客户端。",
                    showCancel: false
                  });
            }
        } else {
            wx.showModal({
              title: '提示',
              content: "当前微信版本过低，请更新微信客户端。",
              showCancel: false
            });
        };

        //系统兼容性判断
        if(systemInfo.system && /Android/.test(systemInfo.system)){
            this.globalData.systemClass = 'android-page';
        }
    },
    getCityIp: function() {

    }
})