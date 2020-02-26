import fetch from './fetch.js'
import url from './url.js'
export default {
  getMultiData(id) {
    return fetch(url.getMultiData,{id})
  }
}