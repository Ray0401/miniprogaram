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

  clickBtn() {
    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success(res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail(res) {
    //     console.log(res.errMsg)
    //   }
    // })
    wx.showLoading({
      title: '成功',
      icon: 'success',
      duration: 2000,

    })
  },
  // 分享
  onShareAppMessage:function(options){
    return {
      title:'我是转发',
      path:'/pages/login/login',
      imageUrl:'' //想要替换的图片地址
    }
  }
})