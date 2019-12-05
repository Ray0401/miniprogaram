// components/my-tab/my-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabList: {
      type: Array,
      value: []
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleToggle(event) {
      const curIndex = event.currentTarget.dataset.index;
      console.log(curIndex);
      this.setData({
        active: this.data.active = curIndex
      })
      this.triggerEvent('toggleActived', {
        curIndex,
        item: this.properties.tabList[curIndex]
      })
    },
    // 暴露此方法让外界可以调用
    changeActive(value) {
      this.setData({
        active: value
      })
    }
  }
})