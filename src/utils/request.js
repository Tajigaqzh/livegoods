import axios from "axios";
import qs from "querystring"

/* 处理失败的方法
status状态码
info：信息 
*/

const errorHandle = (status,info)=>{
    switch(status){
        case 400:
            console.error("语义有误，当前请求无法被服务器识别")
            break;
        case 401:
            console.error("服务器认证失败")
            break;
        case 403:
            console.error("服务器拒绝执行")
            break;  
        case 404:
            console.error("服务器没有找到资源，请检查请求地址")
            break;
        case 500:
            console.error("服务器遇到错误")
            break;
        case 502:
            console.error("服务器网关错误")
            break;
        default:
            console.log(info)
            break;
    }
}

/* 创建axios实例对象 */
const instance = axios.create({
    baseURL:"localhost",
    timeout:5000
})
/**
 * 请求拦截
 */
instance.interceptors.request.use(
    config=>{
        if(config.method==="post"){
            config.data = qs.stringify(config.data)
        }
        return config
    },
    error=>Promise.reject(error)
)
instance.interceptors.response.use(
    response=>res.status===200?Promise.resolve(response):Promise.reject(response),
    error=>{
        const {response} = error;
        errorHandle(response.status,response.info)
    }
)
export default instance;
