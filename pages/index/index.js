const app = getApp()
const promisify = require('../../until/promise.js')
var Login = promisify(tt.login)
var getSystemInfo = promisify(tt.getSystemInfo)
var getUserInfo = promisify(tt.getUserInfo)
var getImageInfo = promisify(tt.getImageInfo)
var setStorage = promisify(tt.setStorage)

import api from '../../request.js'

Page({
  data: {
    user:{},
    img: {},
    phone:{},
    width:null,
    height:null,
  },
  onLoad: function () {

    Login()
    .then(v => {
      console.log(v);
      // throw new Error()
      // 获得条形码
      return api.sendCode({ code:v.code})
    })
    .then(v=>{
      console.log(v);

      return v.data
      // return setStorage({ key:'barcode',data:v.data})
    })
    .then(v=>{
      // console.log(v);
      return getImageInfo({ src: v })
    })
    .then(v=>{
      console.log(v);
      // const context = tt.createCanvasContext('canvas')
      this.data.img = v
        this.data.width = v.width
        this.data.height = v.height

        this.setData({
          img: this.data.img,
          width:this.data.width,
          height:this.data.height
        })
        
        // context.drawImage(v.path, 0, 0)
        // context.draw()

    })
    .then(v=>{
      return getSystemInfo()
    })
    .then(v=>{
      console.log(v);
      this.data.phone = v
      this.setData({ phone:this.data.phone })
      // windowHeight
    })
    .then(v=>{
      return getUserInfo()
    })
    .then(v=>{
      console.log(v);
      this.data.user = v.userInfo
      this.setData({ user:this.data.user })
    })
    .catch(e=>{
      if(e.errMsg === 'getUserInfo:fail auth deny'){
        console.log("error")
      }
    })
    

    // const context = tt.createCanvasContext('canvas')
    // getImageInfo({ src: 'https://tpc.googlesyndication.com/daca_images/simgad/8569787226622152728' })
    //   .then(v => {
    //     // console.log(v);
    //     this.data.img = v
    //     this.data.width = v.width
    //     this.data.height = v.height

    //     this.setData({
    //       img: this.data.img,
    //       width:this.data.width,
    //       height:this.data.height
    //     })
        
    //     context.drawImage(v.path, 0, 0)
    //     context.draw()
    //   })
    //   .then(v=>{
    //     return getSystemInfo()
    //   })
    //   .then(v=>{
    //     console.log(v);
    //     this.data.phone = v
    //     this.setData({ phone:this.data.phone })
    //     // windowHeight
    //   })
    //   .then(v=>{
    //     return getUserInfo()
    //   })
    //   .then(v=>{
    //     console.log(v);
    //     this.data.user = v.userInfo
    //     this.setData({ user:this.data.user })
    //   })
    //   .catch(e=>{
    //     if(e.errMsg === 'getUserInfo:fail auth deny'){
    //       console.log("error")
    //     }
    //   })
    // 


    // JsBarcode(canvas, "Hi!");
  },
})
