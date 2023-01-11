// fs - file system sync
// so readFileSync majorily read the file text
// writeFileSync create a new file at a particular path , we can also override it with our new text text by node
// when we add flag it creates a new value to result.txt and we can also see previous one because node override new value to the result

const { readFileSync, writeFileSync  } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8' )
const second = readFileSync('./content/second.txt', 'utf8' )


// console.log(first, second);

writeFileSync('./content/result-sync.txt' , ` Here is the result: ${first}, ${second}`, {flag: 'a'} )

