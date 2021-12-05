"use strict";
// Given a word and a list of possible anagrams, select the correct sublist.

function anagram(word, arr) {
  let wordArr = word.split("");
  let final = [];

  let check = 0;
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr[i].split("");
    if (wordArr.length === newArr.length) {
      for (let j = 0; j < wordArr.length; j++) {
        for (let d = 0; d < newArr.length; d++) {
          if (wordArr[j] === newArr[d]) {
            check++;
          }
        }
        if (check === wordArr.length) {
          final.push(newArr.join(""));
          check = 0;
        }
      }
    }
  }
  return final;
}

console.log(
  anagram("pencil", ["licnep", "ircular", "pupil", "nilcpe", "leppnec"])
);
