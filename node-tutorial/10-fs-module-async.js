// if there is any events which has some timer then this async fs module doesnot wait for the timer to complete , it start 
// execution another line of code and that should be done with the need of programmer
// either he/she want any I/O bound or not

const { readFile, writeFile } = require('fs');

readFile( './content/first.txt', 'utf8', (err, result) => {
    if(err)
    {
        console.log(err);
        return;
    }

    console.log(result);
})


// prefer CWH video on NodeJs