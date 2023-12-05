import {
  data
} from "./configs/day2config.js"

const obj = {
  red: 12, 
  green: 13,
  blue: 14
}
const main = () => {
  let total = 0;
  for (let line of data.split("\n")) {
    let gameIndex = Number(line.match(/\d\d*/));
    let game = line.split(":")[1].split(";");
    let gameResult = true;
    for (let hand of game) {
      let gameObj = {};
      let nums = hand.match(/\d+/g);
      let colors = [];
      for (let char of hand.split(" ")) {
        if (obj.hasOwnProperty(char.replace(/,/g, ""))) {
          colors.push(char.replace(/,/g, ""))
        }
      };
      for (let i = 0; i < colors.length; i++) {
        gameObj[colors[i]] = Number(nums[i]);
      };
      for (let col in gameObj) {
        obj[col] < gameObj[col] ? gameResult = false : null;
      };
    };
    if (gameResult) {
      total += gameIndex;
    }
  }
  return total;
}
console.log(main());