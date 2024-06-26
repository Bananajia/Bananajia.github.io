module.exports = {
    chainWebpack: config => {
        config.module
            .rule('pdf')
            .test(/\.pdf$/)
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'assets/files/[name].[hash:8].[ext]'
            });
    },
    assetsDir: "assets",
    outputDir: "docs"
}