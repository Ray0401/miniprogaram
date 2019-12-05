// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 1,
    tabList: [{
      id: 1,
      name: '流行'
    }, {
      id: 2,
      name: '精选'
    }, {
      id: 3,
      name: '新款'
    }],
    active: 1
  },
  handleClick() {
    this.setData({
      counter: this.data.counter += 1
    })
  },
  toggleActived(options) {
    console.log('子组件传来的值', options.detail)
  },
  getComponentsData() {
    const val = this.selectComponent('#my-tab');
    console.log(val);
    // 直接修改数据
    // val.setData({
    //   active: 1
    // })

    //通过方法进行修改
    val.changeActive(2);
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

  }
})