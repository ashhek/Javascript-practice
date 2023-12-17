let score = "33abc"

let scoreInNum = Number(score)

console.log(typeof score)
console.log(typeof scoreInNum)
console.log(scoreInNum);



/*
  "33" -> 33
  "33abc" -> NaN(not a number but its type of is number)
  
  */
 let Name = "Abhishek"
 let boolresult = Boolean(Name)
 console.log(typeof boolresult)
 console.log(boolresult)

 /*
  For boolean:-
    1 - > true
    0 -> false
    "" -> false
    "abc" _> true

    */
   // *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //it gives value of 2 to the power 3
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Abhishek"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); gives output - 122
// console.log(1 + 2 + "2"); gives output - 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); // 1
// console.log(+"");   // 1

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion