// javascript fundaments for nodeJS
// Conditions, Loops and Array
// The import Function and variables from another file

// Conditional
var x =20;
if( x===20)
    {
        console.log("matched");
    }
else
    {
        console.log("not Matched");
    }

// Array
const arr = [ 2, 4, 5, 3 , 23, 88, 3, 1, 6];
console.log( arr[3]);

let result = arr.filter((item) => {
    return item > 3;
})

console.log( result);