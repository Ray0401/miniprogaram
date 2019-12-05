// components/my-slot/my-slot.js
Component({
  options: {
    // 设置多插槽
    "multipleSlots": true
  },
  // 外界给组件传入的额外的样式
  externalClasses: [],
  // 监听properties和data的数据变化
  observers: {

  },
  // 监听组件所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log('show')
    },
    hide() {
      console.log('hide')
    },
    resize() {
      console.log('resize')
    }
  },
  // 监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log('created')
    },
    attached() {
      console.log('attached')
    },
    ready() {
      console.log('ready')
    },
    detached() {
      console.log('组件被销毁')
    }
  }
})