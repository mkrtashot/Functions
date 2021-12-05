"use strict";
// Write a function which receives two strings and removes appearances of the second string from the
// first one.

function remover(str1, str2) {
  let arrStr1 = [];
  let arrStr2 = [];
  arrStr1 = str1.split("");
  arrStr2 = str2.split("");

  let check = 0;

  for (let i = 0; i < arrStr1.length; i++) {
    for (let j = 0; j < arrStr2.length; j++) {
      if (arrStr1[i] === arrStr2[j]) {
        check++;
      }

      if (check === arrStr2.length) {
        for (let d = arrStr2.length; d > 0; d--) {
          arrStr1[i - d + 1] = "_";
        }
        check = 0;
      }
    }
  }
  str1 = arrStr1.join("");
  arrStr1 = str1.split("_");
  str1 = arrStr1.join("");
  return str1;
}

console.log(
  remover(
    `Yes, London. You know: fish, chips, cup ‘o tea, bad
    food, worse weather`,
    "o"
  )
);
