// opt没有传该传的
import  Mock from './mock'
const DEFAULT_REQUEST_OPTIONS = {
    url: '',
    data: {},
    header:{
        'Content-Type': 'application/json'
    },
    method: 'GET',
    dataType: 'json'
}
let util = {
    request(opt){
        // 生成对象 结构
        let options = Object.assign({},DEFAULT_REQUEST_OPTIONS,opt);
        let {url,data,header,method,dataType,mock=false} = options
        // console.log(url,data,header,method,dataType,mock);
        return new Promise((resolve,reject)=>{
            if(mock){
                let res = {
                    statusCode: 200,
                    data: Mock[url]
                }
                resolve(res.data);
                return
            }
            wx.request({
                url,
                data,
                header,
                method,
                dataType,
                success(res){
                    resolve(res.data)
                },
                fail(err){
                    reject(err)
                }
            })
        })
    }

}

export default util