const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("waterFull", () => {
  console.log("Please turn off the motor !!");

  setTimeout(() => {
    console.log("Its a gentle reminder ! Please turn off the motor");
  }, 3000);
});

console.log("the Script is running");
myEmitter.emit("waterFull");
console.log("the Script is still running");
