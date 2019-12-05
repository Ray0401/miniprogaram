// 微信请求封装
// const request = (options) => {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: options.url,
//       data: options.data,
//       method: options.method,
//       success: (res) => {
//         resolve(res);
//       },
//       fail: (err) => {
//         reject(err)
//       }
//     })
//   })
// }


// 简便写法
const request = (options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      data: options.data,
      method: options.method,
      success: resolve,
      fail: reject
    })
  })
}
export default request