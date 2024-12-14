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

function randomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

console.log(randomNumber());

function generateName(firstName, secondName) {
  return firstName.length + secondName.length;
}

console.log(generateName("Paulius", "Kareiva"));

function getLetter(index) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return alphabet[index];
}

console.log(getLetter(9));

function calculate(n1, n2, operator) {
  switch (operator) {
    case "sum":
      return n1 + n2;

    case "sub":
      return n1 - n2;

    case "div":
      return n1 / n2;

    case "multi":
      return n1 * n2;
  }
}

console.log(calculate(20, 10, "multi"));

function generateRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

function squareNumber(number) {
  return Math.pow(number, 2);
}

console.log(squareNum(generateRandomNumber()));
