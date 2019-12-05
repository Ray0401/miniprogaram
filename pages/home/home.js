// pages/home/home.js
import fetch from '../../service/fetch.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //1.原生请求 发送网络请求
    // wx.request({
    //   url: 'http://www.mockhttp.cn/mock/xhrlist',
    //   data: {
    //     type: '1'
    //   },
    //   success: (res) => {
    //     console.log(res.data);
    //     this.setData({
    //       array: [1, 2, 3]
    //     })
    //   }
    // })

    // 2.使用封装请求
    fetch({
      url: 'http://www.mockhttp.cn/mock/xhrlist'
    }).then(res => {
      console.log(res)
    }, err => {
      console.log(error);
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

  }
})