const prompt = require("prompt-sync")();

userName = prompt("What is your name?");
console.log(`Hello ${userName}, nice to meet you!`);
gameStart = prompt("Would you like to play BPS? yes or no?");
if (gameStart === "yes") {
  prompt("Choose your Weapon: boulder, parchment or shears?");
} else if (gameStart === "no") {
  console.log("How boring!");
} else {
  console.log("sorry, i dont understand");
}
