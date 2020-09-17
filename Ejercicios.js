/**
 * Write a loop that makes seven calls to console.log to output the following triangle
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */

let triangle: string = "#";
for (let i: number = 0; i <= 6; i++) {
  console.log(triangle);
  triangle = triangle + "#";
}
  

// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number,
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz"
// for numbers that are divisible by both 3 and 5
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates.
// So if you solved it, your labor market value just went up.)

let i: number = 1;
while (i <= 100) {
  if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
  i++;
}


//Mi version
let num: number = 1;
for (let i: number = 0; i <= 99; i++) {
  
  if(num%3==0){
   console.log("Fizz");
  }else if(num%5==0){
      console.log("Buzz");
  }else
  console.log(num);
  num = num + 1;
}
//igual pero si son multiplos de ambos sale fizzbuzz
let i: number = 1;
let  cad:string | undefined;
while(i<= 100){
    cad = undefined;
    if(i%3===0) cad = "fizz";
    if(i%5===0) cad = (cad || "" ) + "buzz";
console.log(cad||i);
  //
  i = 1;
while (i <= 100) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
  i++;
}
i++
}
  
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character.
// The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

const line: string = "# # # #";

for (let i: number = 0; i < 8; i++) {
  let thisline: string = "";
  if (i % 2 === 0) thisline = " ";
  thisline += line;
  console.log(thisline);
}

//

const cadena: string = "# # # #";
for(let i=0; i<8; i++){
    if(i%2==0) console.log(" " + cadena);
    else console.log(cadena);
}


// Define a recursive function isEven.
// The function should accept a single parameter (a positive, whole number) and return a Boolean.

const isEven = (num: number): boolean => {
  if (num < 0) throw new Error("Invalid value");
  else if (num === 1) return false;
  else if (num === 0) return true;
  else return isEven(num - 2);
};

console.log(`33 is Even: ${isEven(33)}`);
console.log(`42 is Even: ${isEven(42)}`);
console.log(`-5 is Even: ${isEven(-5)}`);


// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character (for example, "b").
// The first character has position 0, which causes the last one to be found at position string.length - 1.
// In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function called countChar.
// It takes a second argument that indicates the character that is to be counted
// and return the number of occurreces

const countChar = (str: string, c: string) => {
  let count: number = 0;
  let i: number = 0;
  while (i < str.length) {
    if (str[i] === c) count++;
    i++;
  }

  return count;
};

console.log(countChar("parras", "a"));
