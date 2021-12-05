"use strict";
// Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:

function phone(number) {
  let arr = [];
  let newNumber;
  let final;
  let check = 0;
  arr = number.split(" ");
  newNumber = arr.join("");
  arr = newNumber.split("");
  if (arr[0] === "+") {
    arr = arr.slice(1);
  }
  console.log(arr);
  if (arr.length === 10) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof +arr[i] === "number") {
        continue;
      } else {
        check++;
        break;
      }
    }
  } else {
    check++;
  }
  if (check === 1) {
    return "Bad number";
  } else {
    final = arr.join("");
    return final;
  }
}

console.log(phone(""));
