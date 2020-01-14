const htmlwebackplugin =require('html-webpack-plugin')
module.exports ={
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize:true}
                    }
                ]  
            }
        ]
    },
    plugins:[
        new htmlwebackplugin({
           template:'./src/template.html',
           file:'./index.html'
        })
    ]
}