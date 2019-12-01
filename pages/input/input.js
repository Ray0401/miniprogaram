// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '123',
    value_input: ''
  },
  bindinput(event) {
    console.log('键盘输入触发', event)
    if (event.detail.value === '11') {
      this.setData({
        value_input: '2'
      })
    }
  },
  bindfocus(event) {
    console.log('获取焦点', event)
  },
  bindblur(event) {
    console.log('失去焦点', event)
  }
})