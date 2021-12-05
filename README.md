# Tasks

```
Code Requirement List
```

## Required Tasks

```
. Given an array of numbers. Write a function to separate odd and even numbers in different arrays.
Input Output
[45, 12, 3, 6, 17, 0] [45, 3, 17], [12, 6, 0]
[1, 3, 5, 9] [1, 3, 5, 9], []
```

Here is the[solution](1_array_odd_even.js)

```
. Write a function that calculates sum, difference, multiplication and division between given array
elements depending on passed operation symbol. Write appropriate function for each operation.
```

Here is the[solution](2_operation_symbol.js)

```
. Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
If the phone number is less than 10 digits assume that it is a bad number
If the phone number is longer than 10, then it is a bad number
If the phone number is 10 digits assume that it is good
If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
and return remaining 10 digits.
If the phone number contains + symbol more than one, consider it as a bad number.
If the phone number contains + symbol not as the first character, consider it as a badnumber.
```

Ignore spaces between digits.

```
Input Output
“455678” “Bad number”
“339 5656888” “3395656888”
“+0008989562” “0008989562”
“45231489562” “Bad number”
“123+2356897452” “Bad number”
```

Here is the[solution](3_phone_number.js)

```
. Given a word and a list of possible anagrams, select the correct sublist.
Input Output
“listen”, ["enlists", "google", "inlets", "banana"] [“inlets”]
“pencil”, [“licnep”, “circular”, “pupil”, “nilcpe”, “leppnec”] [“licnep”, nilcpe]
```

Here is the[solution](4_correct_sublist.js)

```
. Write a function, which receives a string, finds possible largest numbers in the string and returns their sum.
```

```
IInputnput OOutpututput
“FwrtY 45 KHL 120 mn 10 P” 175
“Wert 12 lop-12” 0
```

Here is the[solution](5.js)

```
. Write a function which receives two strings and removes appearances of the second string from the
first one.
Input Output
“This is some text.”, “is” “Th some text.”
“Yes, London. You know: fish, chips, cup ‘o tea, bad
food, worse weather”, “o”

“Yes, Lndn. Yu knw: fish, chips, cup ‘ tea,
bad fd, wrse weather”
```

Here is the[solution](6.js)

```
. Write a function to compute a new string from the given one by moving the first char to come after
the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars.
Ignore any group of fewer than 3 chars at the end.
Input Output
“dfgjkloyp” “fgdkljypo”
“aweyoolp” “weaooylp”
```

Here is the[solution](7.js)

```
. Write a function that accepts a string(a sentence) as a parameter and finds the longest word within
the string. If there are several words which are the longest ones, print the last word(words can be
separated by space, comma or hyphen).
Input Output
“A revolution without dancing is a revolution not worth having.” “revolution”
”Which would be worse - to live as a monster, or to die as a good man?” “monster”
```

Here is the[solution](8.js)

```
. Write a function which receives an array and a number as arguments and returns a new array from
the elements of the given array which are larger than the given number.
Input Output
[10, 25, 16, -5, 30, 15, 24] , 16 [25, 30, 24]
[1, 1, 2, -3, 0, 8, 4, 0], 9 “Such values do not exist.”
```

Here is the[solution](9.js)

```
. Write a function, which receives two numbers as arguments and finds all numbers between them
such that each digit of the number is even. The numbers obtained should be printed in a comma-
separated sequence on a single line.
Input Output
19, 42 “20, 22, 24, 26, 28, 40, 42”
99, 199 “Such numbers does not exist.”
```

Here is the[solution](11.js)

```
. Write a function, which receives an array as an argument which elements arrays of numbers. Find
product of biggest negative number of each array. If there is not any negative number, ignore that
array. Check that items of the given array are arrays.


Input Output
[[2, -9, -3, 0], [1, 2], [-4 , -11, 0]] 12
[[3, 4], [11, 0], [5, 6, 7, 8]] ‘No negativesʼ
```

Here is the[solution](14.js)
