"use strict";
// Write a function to compute a new string from the given one by moving the first char to come after
// the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars.
// Ignore any group of fewer than 3 chars at the end.

function moving(str) {
  let arr = [];
  let newArr = [];
  arr = str.split("");
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    if (a === 0) {
      a = 2;
    } else {
      a = a + 3;
    }

    if (arr[a]) {
      newArr.push(arr[a]);
      newArr.push(arr[a - 2]);
      newArr.push(arr[a - 1]);
    }
  }

  for (let i = arr.length - newArr.length; i; i--) {
    newArr.push(arr[arr.length - i]);
  }
  str = newArr.join("");
  return str;
}

console.log(moving("awsefssadasdfeey"));
