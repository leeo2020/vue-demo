module.exports = {
    devServer: {
        proxy: {
            '/soso': {
                target: 'https://c.y.qq.com', //目标远程服务器
                ws: true,
                changeOrigin: true //允许改变'域'
            }
        }
    }
}