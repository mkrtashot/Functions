"use strict";
// Write a function that calculates sum, difference, multiplication and division between given array
// elements depending on passed operation symbol. Write appropriate function for each operation.

function calc(arr, symbol) {
  let result = arr[0];
  if (symbol === "sum") {
    for (let i = 1; i < arr.length; i++) {
      result += arr[i];
    }
  } else if (symbol === "difference") {
    for (let i = 1; i < arr.length; i++) {
      result = result - arr[i];
    }
  } else if (symbol === "multiplication") {
    for (let i = 1; i < arr.length; i++) {
      result = result * arr[i];
    }
  } else if (symbol === "division") {
    for (let i = 1; i < arr.length; i++) {
      result = result / arr[i];
    }
  }
  return result;
}
