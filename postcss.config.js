module.exports = { 
    plugins: {
      'autoprefixer': {
        browsers: ['Android >= 4.0', 'iOS >= 7']
      },
      'postcss-pxtorem': {
        rootValue: 37.5,//
        selectorBlackList  : ['weui','mu'], // 忽略转换正则匹配项
        propList: ['*']
      }
    }
}
