const promisify = require('until/promise.js')
var Login = promisify(tt.login)
var showActionSheet = promisify(tt.showActionSheet)
var showModal = promisify(tt.showModal)
var enterProfile = promisify(tt.enterProfile)
var setStorage = promisify(tt.setStorage)

import api from './request.js'

App({

  onLaunch: function () {
    console.log(api.ok);

    // Login()
    //   .then(v => {
    //     console.log(v);
    //     return api.sendCode({ code:v.code})
    //   })
    //   .then(v=>{
    //     console.log(v);
    //     return setStorage({ key:'barcode',data:v.data})
    //   })
    //   .then(v=>{
    //     console.log(v);
        
    //   })
    //   .catch(e => {
    //     console.log(e);

    //   })
  }
})
