import {
  baseUrl
} from './config.js'
// 请求头相关配置
const header = {
  'Authorization': 'Bearer '
}
export default function fetch(url, params, isGet) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      header: header,
      method: isGet ? 'GET' : 'POST',
      data: params,
      success: function(returnMsg) {
        // 请求成功,处理数据
        if (returnMsg.data.code === '0000') {
          resolve(returnMsg.data.data);
        } else {
          reject(returnMsg.data);
        }
      },
      fail: function(err) {
        // 请求失败
        reject(err);
      }
    })
  })

}