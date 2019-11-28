App({
  onLaunch(options) {
    console.log(`onLaunch`,options)
    console.log(this.globalData)
    // Do something initial when launch.
  },
  onShow(options) {
    // Do something when show.
    console.log(`切前台`,options)
  },
  onHide() {
    // Do something when hide.
    console.log('切后台')
  },
  onError(msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})
// wx.onAppShow(function(options) {
//   console.log(options.scene);
// })