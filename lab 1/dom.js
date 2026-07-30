//dom: document object model
//only the first function will be executed when the event is emitted

import { EventEmitter } from "events";

const button= new EventEmitter();

button.on("click", () => {
    console.log("button clicked");
});

button.emit("click");