import { str } from "./day1config.js"
const arr = str.split(/\n/g);

const main = () => {
  let sum = 0;
  for (let line of arr) {
    let arr2 = [];
    for (let letter of line.split('')) {
      Number(letter) ? arr2.push(Number(letter)) : null;
    };
    let arr3 = String(arr2[0]) + String(arr2[arr2.length - 1]);
    arr2 = [];
    sum += Number(arr3);
  }
  return sum;
}
console.log(main())
