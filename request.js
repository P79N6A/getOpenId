const promisify = require('until/promise.js')
var Login = promisify(tt.login)
var request = promisify(tt.request)

const test_host = '10.88.25.117:8080'
const host = '10.88.0.35:8080'

let obj = {
    "ok":1,
    sendCode(e){
        return request({
            url:`http://${test_host}/bytedance-Supermarket/market/newtiaocode`,
            // method:'POST',
            data:e,
            // header: {
            //     'content-type': 'application/json'
            // }
        })
    },
}

export default obj