// pages/login/login.js
const common = require('../../utils/common.js'); //require的路径只能是相对路径
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'hello world',
    students: [{
      id: 1,
      name: 'a'
    }, {
      id: 2,
      name: 'b'
    }, {
      id: 3,
      name: 'c'
    }, {
      id: 4,
      name: 'd'
    }],
    counter: Math.random().toString(10).substr(2) - 0,
    array: [],
    item: {
      index: 0,
      msg: '哈哈',
      time: '2019-11-29'
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取app.js中的变量
    var appInstance = getApp()
    console.log(appInstance.globalData)
    wx.showNavigationBarLoading()
    common.sayHello();
    common.sayName();
    console.log(wx.env);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.setData({
      array: this.array = Array.from(Array(10), (item, index) => index)
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '登录'
    })
    setTimeout(() => {
      wx.hideNavigationBarLoading()
    }, 2000)
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
    console.log('下拉')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('上拉触底')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log(arguments)
  },
  onPageScroll: function(obj) {
    // console.log('滚动',obj)
  },
  // 加法操作
  handleAdd() {
    // this.data.counter += 1;
    // console.log(this.data.counter);
    this.setData({
      counter: this.data.counter += 1
    })
  },
  // 减法操作
  handleSub() {
    this.setData({
      counter: this.data.counter -= 1
    })
  },
  // 跳转
  handleClick() {
    console.log('路由跳转')
    wx.switchTab({
      url: '../home/home'
    })
  },
  handleBtnClick(event) {
    console.log(event)
  },
})