const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = {
    name: 'wordrelay-setting',
    mode: 'development',//실서비스에서는 production
    devtool: 'eval',//production일때는 hidden-source-map사용
    resolve:{
        extensions:['.js','.jsx']//js나 jsx파일 확장자 있는지 찾아
    },

    //파일 합치기
    //client.jsx, WordRelay.jsx 두가지 파일을 합쳐서 app.js파일로 합쳐서 html이 실행할 수 있도록 만들어준다.
    entry: {
        // app: ['./client.jsx', './WordRelay.jsx'],
        //이미 client.jsx파일이 WordRelay.jsx파일 불러오고 있어
        app: ['./client'],
    }, //입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader:'babel-loader', //js나jsx파일에 바벨로더를 적용해 최신문법이 옛날 브라우저에서도 돌아갈 수 있도록 해줌
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
                plugins:[
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ],
            },
        }],
    },
    plugins:[
        new RefreshWebpackPlugin()
    ],
    output : {
        path: path.join(__dirname,'dist'), //__dirname은 현재폴더(lecture)
        filename: 'app.js',
        publicPath:'/dist',
    }, //출력
    devServer : {
        publicPath:'/dist/',
        hot:true,
    },
}