// // The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// // Check one: add up to 50
// // This is a fairly simple operation using
// // arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;

// // Check two: at least two odd numbers
// // Here, we use modulus to check if something is odd.
// // Since % 2 is 0 if even and 1 if odd, we can use
// // arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// // Check three: no number larger than 25
// // This time, we use the OR operator to check
// // if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// // Check four: all unique numbers
// // This is long, and there are more efficient
// // ways of handling it with other data structures
// // that we will review later.
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// // Here, we put the results into a single variable 
// // for convenience. Note how we negate isOver25 using
// // the ! operator. We could also have tested for 
// // "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// // Finally, log the results.
// console.log(isValid);

// // Here's another example of how this COULD be done,
// // but it SHOULD NOT be done this way. As programmers,
// // we break things into small, manageable pieces so that
// // they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

   

  const divisableBy5 = (n1 % 5 ) && (n2 % 5) && (n3 % 5) && (n4 % 5);
  console.log('All numbers divisible by 5: ${divisableBy5}');
// Check to see that all numbers are divisible by 5 by inputting the remainder symbol to see if the out put has a remainder, if not the number is divisible by 5. The symbols $$ represents logical AND

 const firstNumberLargerThanLast = n1>n4;
 console.log(`firstNumberLargerThanLast`);
//  Check to see if the value of the first nuber was greater than the last number 

const multiplicationResult = (subtractionResult * n3);
 console.log(`multiplicationResult (subtractionResult * n3): ${multiplicationResult}`);
// Getting an error in the console, code shows no errors in VS code.

const remainderResult = (multiplicationResult % n4);
 console.log(`Remainder result (multiplicationResult % n4): ${remainderResult}`);
 //Error remains and currently not able to verify if code is functioning correctly. Erroer is "Refused to execute script from 'http://127.0.0.1:5500/Mod1/Alab308.1/Alab308.1/Alab308.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.""

const isOver25 = remainderResult > 25;
 console.log(`Remainder result is 25 or less: ${is25OrLess}`);
//  Error remains, it appears the error was in the html document attached to this project. I removed and replaced boiler plate and script tag, nothing has changed.