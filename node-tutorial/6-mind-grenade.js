// mind grenade
// please remember that when you import a module, you actually invoke it

// so agar hum directly import kreinge dusre module mei toh ye module invoke ho jayega
// for eg - if we write " require ('./6-)" in other module and run that module , our function addValues direct rum from that module


const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is ${num1 + num2}`);
}
addValues();