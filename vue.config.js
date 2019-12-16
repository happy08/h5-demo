module.exports = {
    publicPath: './',
    //axios跨域代理
    devServer: {
        proxy: {
            '/api': {
                target: 'http://hedgingapi.bicir.net/v1/',  //域名
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }

}
