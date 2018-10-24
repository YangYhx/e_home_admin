import axios from 'axios'

const baseURL = '/api'

const fe = axios.create({
  baseURL,
  timeout:20000
})


let xhr = {
  get(url,data,config){
    return new Promise((resolve,reject) => {
      fe.get(url,{params:data},config).then( res => {
          resolve(res.data)
      })
    })
  },
  fetch(url,data,config,motheds){
    return new Promise((resolve ,reject) =>{
      fe[motheds](url,data,config).then( res => {
        resolve(res.data)
      })
    })
  },
  post(url,data,config){
    return new Promise((resolve,reject) => {
      fe.post(url,data,config).then( res => {
          resolve(res.data)
      })
    })
}
//   post(url,data,config){
//     return fetch(url,data,config,'post')
//   }
}

export default  xhr
