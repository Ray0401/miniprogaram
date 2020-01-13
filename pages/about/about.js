// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
  },
  onUnload: function(options) {
    //  需求:当前页回到上一页的时候需要改变上一页的title值
    //  1.获取上一页页面对象;
    //  2.改变上一页的指定值
    const pages = getCurrentPages();
    console.log(pages);
    const home = pages[pages.length-2];
    home.setData({
      value:'嘻嘻嘻'
    })
  }


})