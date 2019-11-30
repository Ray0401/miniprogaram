App({
  // 小程序初始化
  onLaunch(options) {
    console.log(`onLaunch`, options)
    console.log(this.globalData)
    // Do something initial when launch.
  },
  // 小程序显示时
  onShow(options) {
    // 1.判断小程序的进入场景
    const scene = options.scene;
    switch (scene) {
      case 1001:
        console.log('小程序主入口');
        break;
      case 1011:
        console.log('扫描二维码')
    }
    // 2.获取用户的信息,并且获取到用户信息之后,将用户的信息传递给服务器
    // wx.getUserInfo({
    //   success: function(res) {
    //     console.log(res);
    //   },
    //   fail: function(fail) {
    //     console.log(fail);
    //   }
    // })
  },
  onHide() {
    // Do something when hide.
  },
  onError(msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})
// wx.onAppShow(function(options) {
//   console.log(options.scene);
// })