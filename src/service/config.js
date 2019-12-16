const development = {  //测试配置
  DOMAIN_BASE: 'hedgingapi.bicir.net', //域名
  DOMAIN_WWW: 'http://hedgingapi.bicir.net/', //请求地址
  DOMAIN_VERTIFY: 'http://hedgingapi.bicir.net/v1/Login/verify', //图形验证码地址
  //DOMAIN_MAIN: '',  //其他地址
  API_PATH: '',       //接口路径  api/
  API_VERSION: 'v1/', //版本
}

const production = {  //线上配置
  DOMAIN_BASE: 'test.com',
  DOMAIN_WWW: 'https://test.com/',
  DOMAIN_VERTIFY: '', //图形验证码地址
  //DOMAIN_MAIN: '',
  API_PATH: 'api/',
  API_VERSION: '1.0/',
}

const isDev = process.env.NODE_ENV === 'development'
let configs = {}
if (isDev) configs = development
else configs = production

//导出配置
export const config = configs


//其他常量...
