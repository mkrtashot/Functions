"use strict";
// Write a function, which receives a string, finds possible largest numbers in the string and returns their
// sum.

function number(string) {
  let arr = [];
  let newArr = [];
  let result = 0;

  arr = string.split("");

  for (let i = 0; i < arr.length; i++) {
    let b = +arr[i];

    if (arr[i] === "-") {
      newArr.push(arr[i]);
      continue;
    }

    if (!isNaN(b)) {
      newArr.push(arr[i]);
    } else {
      newArr.push(" ");
    }
  }

  newArr = newArr.join("");
  newArr = newArr.split(" ");

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "-") {
      newArr[i + 1] = newArr[i] + newArr[i + 1];
      newArr[i] = "";
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "") {
      continue;
    } else {
      result += +newArr[i];
    }
  }

  return result;
}

console.log(number());
