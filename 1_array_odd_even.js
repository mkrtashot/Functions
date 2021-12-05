"use strict";
// Given an array of numbers. Write a function to separate odd and even numbers in different arrays

function oddEven(arr) {
  let arrOdd = [];
  let arrEven = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arrEven.push(arr[i]);
    } else {
      arrOdd.push(arr[i]);
    }
  }
  let finalArr = [arrOdd, arrEven];

  return finalArr;
}

console.log(oddEven([45, 12, 3, 6, 17, 0]));
