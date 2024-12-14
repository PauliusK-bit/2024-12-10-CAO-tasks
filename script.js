// let room = [2, 3, 4];
// room.unshift(1);
// console.log(room);

// let different = [1, 2, 2, 3, 3, 3, 4];
// let uniqueElements = [...new Set(different)];
// console.log(uniqueElements);

// let positive = [-3, 1, -2, 4, -5, 6];

// for (i = 0; i < positive.length; i++) {
//   if (positive[i] > 0) {
//     console.log(positive[i]);
//   }
// }

// const arr = [1, 2, 3, 4, 3, 5];
// const element = 3;
// const doesRepeat = arr.indexOf(element) !== arr.lastIndexOf(element);
// console.log(doesRepeat);

// Functions tasks

// function firstName(name) {
//   alert(name);
// }

// firstName("Paulius");

// function randomNumber() {
//   return Math.floor(Math.random() * 5) + 1;
// }

// console.log(randomNumber());

// function generateName(firstName, secondName) {
//   return firstName.length + secondName.length;
// }

// console.log(generateName("Paulius", "Kareiva"));

// function getLetter(index) {
//   const alphabet = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   return alphabet[index];
// }

// console.log(getLetter(9));

// function calculate(n1, n2, operator) {
//   switch (operator) {
//     case "sum":
//       return n1 + n2;

//     case "sub":
//       return n1 - n2;

//     case "div":
//       return n1 / n2;

//     case "multi":
//       return n1 * n2;
//   }
// }

// console.log(calculate(20, 10, "multi"));

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 10 + 1);
// }

// function squareNumber(number) {
//   return Math.pow(number, 2);
// }

// console.log(squareNum(generateRandomNumber()));

// const alertName = (name) => {
//   alert(name);
// };
// alertName("John");

// const randomNumber = (num) => {
//   return Math.floor(Math.random() * 5) + 1;
// };

// console.log(randomNumber());

// const calculateName = (firstName, secondName) => {
//   return firstName.length + secondName.length;
// };

// console.log(calculateName("Paulius", "Kareiva"));

// const letters = (index) => {
//   const alphabet = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];

//   return alphabet[index];
// };

// console.log(letters(2));

// const calculate = (n1, n2, operator) => {
//   switch (operator) {
//     case "sum":
//       return n1 + n2;

//     case "sub":
//       return n1 - n2;

//     case "div":
//       return n1 / n2;

//     case "multi":
//       return n1 * n2;

//     default:
//       throw new Error("Invalid operator");
//   }
// };

// console.log(calculate(10, 3, "sub"));

// const generateRandomNumber = () => Math.floor(Math.random() * 10 + 1);

// const squareNumber = (number) => Math.pow(number, 2);

// console.log(squareNumber(generateRandomNumber()));

const convertMStoKMH = (speed) => speed * 3.6;
console.log(convertMStoKMH(10));

const compareNumber = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: most arguments must be numbers";
  }
  if (a === b) {
    return "equal";
  }
  return a > b ? a : b;
};

const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const findMaxInArray = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

const isPalindrome = (word) => {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const printPyramid = (height) => {
  for (let i = 1; i <= height; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += i;
    }
    console.log(line);
  }
};
