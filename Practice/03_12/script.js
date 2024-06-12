import Computer from "./computer.js";

// Create an instance of Computer
const myLap = new Computer("dell", "laptop", "black", 3, 2, true);
console.log(myLap); // Log the instance to the console

// Make the instance globally accessible for further inspection
window.myLap = myLap;
