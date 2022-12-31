// Module -> A simple or complex functionality organised in single or multiple Javascript files which can be used throughout the node.js app
// or we can say that it is encapsulated code (only share minimum)

const names = require('./3-namesModule');
const sayHello = require('./4-utils');
// console.log(names); -> gives array of two
const data = require('./5-alternate-ways');
console.log(data);

sayHello('Suzan');
sayHello(names.john);
sayHello(names.peter);
