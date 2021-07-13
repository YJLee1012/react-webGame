const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development',//실서비스에서는 production
    devtool: 'eval',
    resolve:{
        extensions:['.js','.jsx']//js나 jsx파일 확장자 있는지 찾아
    },

    //파일 합치기
    entry: {
        // app: ['./client.jsx', './WordRelay.jsx'],
        //이미 client.jsx파일이 WordRelay.jsx파일 불러오고 있어
        app: ['./client'],
    }, //입력
    output : {
        path: path.join(__dirname,'dist'), //__dirname은 현재폴더(lecture)
        filename: 'app.js',
    }, //출력
}