const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool:'eval',
    resolve:{
        extensions:['.jsx','.js'],
    },

    entry:{
        app:'./client',
    },
    module:{
        rules:[{
            test: /\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:[
                    ['@babel/preset-env',{
                        targets:{
                            browsers : ['> 1% in KR'],//한국에서 점유율1%넘는 브라우저만 지원하도록
                            //browserslist참고해서 요구사항에 맞게 브라우저 설정
                        },
                    }],
                    '@babel/preset-react'
                ],
                plugins:[],
            },
        }],
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({debug:true}),
    ],
    output:{
        filename:'app.js',
        path:path.join(__dirname, 'dist'),
    },
};