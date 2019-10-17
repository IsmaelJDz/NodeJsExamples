const EventEmmiter = require("events");

class Logger extends EventEmmiter {
  execute(cb) {
    this.emit("middle");
    console.log("Before");
    this.emit("start");
    cb();
    this.emit("finish");
    console.log("After");
  }
}

const logger = new Logger();

logger.on("middle", () => console.log("I'm in the middle"));
logger.on("start", () => console.log("Starting"));
logger.on("finish", () => console.log("Finishing"));
logger.on("start", () => console.log("It's Done"));
logger.on("middle", () => console.log("I'm in the middle x2"));

logger.execute(() => console.log("hello world"));
