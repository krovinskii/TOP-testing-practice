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
export const caesarCipher = (str, shift) => {};
