// fs module
const fs = require('fs');
fs.writeFileSync( 'hello.txt', 'Hi there this is fs module2');
const text = fs.readFileSync('./hello.txt')
console.log(text.toString());