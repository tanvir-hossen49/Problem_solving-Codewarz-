//DESCRIPTION:
/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. */
//example
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(arr) {
  let firstThree = arr.slice(0, 3);
  let secondThree = arr.slice(3, 6);
  let lastNumber = arr.slice(6);

  return `(${firstThree.join("")}) ${secondThree.join("")}-${lastNumber.join(
    ""
  )}`;
}
let phoneNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phoneNumber);