"use strict";
// Write a function, which receives two numbers as arguments and finds all numbers between them
// such that each digit of the number is even. The numbers obtained should be printed in a commaseparated sequence on a single line.

function even(num1, num2) {
  let finalArr = [];
  let flag = 0;

  for (let i = num1; i <= num2; i++) {
    let arr = [];
    let stri = "" + i;
    arr = stri.split("");

    let check = 0;
    for (let j = 0; j < arr.length; j++) {
      if (+arr[j] % 2 === 0) {
        check++;
      }
      if (check === arr.length) {
        finalArr.push(i);
        flag++;
      }
    }
  }

  finalArr = finalArr.join(", ");

  if (flag === 0) {
    finalArr = "Such numbers does not exist.";
  }

  return finalArr;
}

console.log(even(19, 42));
