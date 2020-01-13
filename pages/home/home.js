// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'哈哈哈'
  },

  jumpToAbout(){
    wx.navigateTo({
      url: '/pages/about/about?title="你好啊"',
    })
  }
})