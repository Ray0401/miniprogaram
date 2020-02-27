import home from '../../service/home.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    contentIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    home.getMultiData().then(res => {
      // 首页数据返回
      console.log('首页数据返回', res)
      const banners = res.banners;
      const recommends = res.recommends;
      this.setData({
        banners,
        recommends

      })
    }, error => {
      console.log(error)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

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
  // 监听子组件发送来的事件
  handleTabItemClick: function(e) {
    console.log('监听子组件发送来的事件', e.detail["index"]);
    this.setData({
      contentIndex:e.detail["index"]
    })
  }
})