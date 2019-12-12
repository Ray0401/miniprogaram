const TOKEN = 'token' //常量(建议使用这种,规范,不容易出错,只需要更改值即可))
App({
  globalData: {
    token: ''
  },
  onLaunch: function() {
    // 1.判断本地是否有token
    const token = wx.getStorageSync(TOKEN);
    if (token && token.length > 0) {
      // 2.token存在,再判断token是否失效
      this.checkToken(token);
    } else {
      // 3. token不存在,进行登录操作
      this.login();
    }
  },
  // 登录操作
  login() {
    console.log('执行了登录操作');
    wx.login({
      // code只有5分钟的有效期
      success: res => {
        // 1.获取code
        const code = res.code;
        // 2.将code发送给服务器
        wx.request({
          url: 'http://www.mockhttp.cn/mock/xhr/login',
          method: 'post',
          header: {
            code
          },
          success: (res) => {
            // 1.取出token
            // const token = res.data.token;
            const token = 'weeronsxndabbakjajkabekbkadb';
            // 2.将token保存在globalData中
            this.globalData.token = token;
            // 3.将token保存在本地
            wx.setStorageSync(TOKEN, token);
          },
          fail: (err) => {
            console.log(error);
          }
        })
      }
    })
  },
  // 验证token
  checkToken(token) {
    console.log('执行了验证token操作');
    wx.request({
      url: 'http://www.mockhttp.cn/mock/xhr/checktoken',
      method: 'post',
      header: {
        token
      },
      success: res => {
        console.log(res);
        if (res.data.code === '10001') {
          // 1.token失效,重新登录
          this.login();
        } else {
          // 2.token未失效,将参数token继续保存到全局变量中,以便于其他页面使用token
          this.globalData.token = token;
        }
      },
      fail: err => {
        console.log(err);
      }
    })
  }
})