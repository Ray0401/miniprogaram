// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 1,
    imagePath1: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
    imagePath2: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onTabItemTap(obj) {
    console.log(obj);
  },
  handleClick() {
    this.setData({
      counter: this.data.counter += 1
    })
  },
  handleJump() {
    // 未设置tabbar的路由跳转
    // wx.navigateTo({
    //   url: '/pages/login/login',
    // })

    // tabbar跳转
    wx.switchTab({
      url: '../about/about'
    })
  },
  // 图片加载事件
  handleImageLoad() {
    console.log('图片加载完成')
  },
  // 选择图片
  chooseImage() {
    console.log('选择图片');
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        this.setData({
          imagePath2: res.tempFilePaths[0]
        })
      }
    })
  },
})