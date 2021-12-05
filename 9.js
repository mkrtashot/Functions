"use strict";
// Write a function which receives an array and a number as arguments and returns a new array from
// the elements of the given array which are larger than the given number.

function larger(arr, num) {
  let newArr = [];
  let check = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      newArr.push(arr[i]);
      check++;
    }
  }

  if (check === 0) {
    newArr = "Such values do not exist";
  }
  return newArr;
}

console.log(larger([1, 1, 2, -3, 0, 8, 4, 0], 9));
