// components/w-tab/w-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabList: [{
      id: 1,
      title: '流行'
    }, {
      id: 2,
      title: '精选'
    }, {
      id: 3,
      title: '秒杀'
    }],
    active: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabItemClick(e) {
      console.log(e.target.dataset.index);
      this.setData({
        active: e.target.dataset.index
      })
    }
  }
})