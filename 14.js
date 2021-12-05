"use strict";
// Write a function, which receives an array as an argument which elements arrays of numbers. Find
// product of biggest negative number of each array. If there is not any negative number, ignore that
// array. Check that items of the given array are arrays.

function negative(arr) {
  let result;
  if (Array.isArray(arr[0]) && Array.isArray(arr[1]) && Array.isArray(arr[2])) {
    let arr1 = 1;
    let arr2 = 1;
    let arr3 = 1;

    for (let i = 0; i < arr[0].length; i++) {
      if (arr1 === 1) {
        if (arr[0][i] < arr1 && arr[0][i] !== 0) {
          arr1 = arr[0][i];
        }
      } else {
        if (arr[0][i] < 0 && arr1 < arr[0][i]) {
          arr1 = arr[0][i];
        }
      }
    }
    for (let i = 0; i < arr[1].length; i++) {
      if (arr2 === 1) {
        if (arr[1][i] < arr2 && arr[1][i] !== 0) {
          arr2 = arr[1][i];
        }
      } else if (arr2 !== 1 && arr[1][i] < 0 && arr2 < arr[1][i]) {
        arr2 = arr[1][i];
      }
    }
    for (let i = 0; i < arr[2].length; i++) {
      if (arr3 === 1) {
        if (arr[2][i] < arr3 && arr[2][i] !== 0) {
          arr3 = arr[2][i];
        }
      } else if (arr3 !== 1 && arr[2][i] < 0 && arr3 < arr[2][i]) {
        arr3 = arr[2][i];
      }
    }
    result = arr1 * arr2 * arr3;
    if (result === 1) {
      result = "No negatives";
    }
  } else {
    result = "Invalid Argument";
  }
  return result;
}

console.log(
  negative([
    [2, -9, -3, 0],
    [1, 2],
    [-4, -11, 0],
  ])
);
