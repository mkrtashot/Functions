"use strict";
// Write a function that accepts a string(a sentence) as a parameter and finds the longest word within
// the string․ If there are several words which are the longest ones, print the last word(words can be
// separated by space, comma or hyphen).

function longest(str) {
  let arr = [];
  let newArr = [];
  let check = 0;
  let result;
  arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/,/g, "");
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > check) {
      check = arr[i].length;
      result = arr[i];
    }
  }
  return result;
}

console.log(
  longest(
    "Which would be worse - to live as a monster, or to die as a good man?"
  )
);
