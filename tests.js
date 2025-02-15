export const capitalize = (str) => {
  //dog => Dog
  //dogs rule the world => Dogs rules the world
  let split = [...str];
  split[0] = split[0].toUpperCase();
  let result = split.join("");
  return result;
};
export const reverseString = (str) => {
  //bunny => ynnub
  //diabolical => lacilobaid
  let arr = [...str];
  let reversedArr = [];
  for (let i = 0; i < str.length; i++) {
    reversedArr.push(arr[arr.length - 1]);
    arr.pop(arr[arr.length - 1]);
  }
  let result = reversedArr.join("");
  return result;
};
export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};
export const caesarShift = (str, shift) => {
  //(teacher, 10) => DOKMROB
  //(xyz, 3) => abc
  const strArray = str.split("");
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabetLength = alphabetArray.length;

  return strArray
    .map((char) => {
      const isUpperCase = char === char.toUpperCase();
      const lowerChar = char.toLowerCase();
      let index = alphabetArray.indexOf(lowerChar);

      if (index === -1) return char;

      let newIndex = (index + shift) % alphabetLength;
      if (newIndex < 0) newIndex += alphabetLength;

      let shiftedChar = alphabetArray[newIndex];
      return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
    })
    .join("");
};

export const analyzeArray = {
  average: function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  },
  min: function (arr) {
    let smaller = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smaller) {
        smaller = arr[i];
      }
    }
    return smaller;
  },
  max: function (arr) {
    let bigger = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > bigger) {
        bigger = arr[i];
      }
    }
    return bigger;
  },
  length: function (arr) {
    return arr.length;
  },
};
