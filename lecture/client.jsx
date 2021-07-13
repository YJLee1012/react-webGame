const React = require('react');
const ReactDom = require('react-dom');

//필요한 것만 가져와
const WordRelay = require('./WordRelay');

ReactDom.render(<WordRelay/>,document.querySelector('#root'));