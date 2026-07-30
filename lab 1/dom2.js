//dom: document object model
//both the functions will be executed when the event is emitted

import { EventEmitter } from "events";

const button= new EventEmitter();

button.on("click", () => {
    console.log("task 1");
});

button.on("click", () => {
    console.log("task 2");
});

button.emit("click");