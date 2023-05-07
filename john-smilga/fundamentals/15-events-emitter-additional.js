const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// order matters

customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${name} with id:${id}`);
});
customEmitter.on("response", () => {
  console.log(`Some other logic here `);
});
customEmitter.emit("response", "john", 34);
