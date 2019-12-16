/** 
 * api接口统一出口
 */
import { config } from '../config'; // 导入配置域名
import axios from '../axios'; // 导入axios实例
import qs from 'qs'; // 导入qs模块

let url = config.DOMAIN_WWW + config.API_PATH + config.API_VERSION
const isDev = process.env.NODE_ENV === 'development'
if (isDev) url = '/api/'  //跨域代理

// get 
const list = (params) => axios.get(`${url}login/loginact`,{params:params});

// post   
const login = (params) => {
  return axios.post(`${url}login/loginact`, qs.stringify(params));
}



export default {
  config,  //this.$api.config 取配置信息
  list,
  login
}
