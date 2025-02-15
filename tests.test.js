// Capitalize tests
import { capitalize } from "./tests";
test("Capitalized first letter", () => {
  expect(capitalize("dog")).toEqual("Dog");
});
test("Capitalize first letter if multiple words exist", () => {
  expect(capitalize("dogs rule the world")).toEqual("Dogs rule the world");
});

// reverseString Tests
import { reverseString } from "./tests";
test("reversed diabolical", () => {
  expect(reverseString("diabolical")).toEqual("lacilobaid");
});
test("reversed bunny", () => {
  expect(reverseString("bunny")).toEqual("ynnub");
});
// Calculator Tests
import { calculator } from "./tests";
test("addition", () => {
  expect(calculator.add(2, 3)).toBe(5);
});
test("subtraction", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});
test("divide", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
test("multiply", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
// caesarCipher Tests
import { caesarShift } from "./tests";
test("caesarShift 1char", () => {
  expect(caesarShift("teacher", 1)).toEqual("ufbdifs");
});
test("caesarShift 3char", () => {
  expect(caesarShift("teacher", 3)).toEqual("whdfkhu");
});
test("caesarShift 5char", () => {
  expect(caesarShift("teacher", 5)).toEqual("yjfhmjw");
});
test("caesarShift 10char", () => {
  expect(caesarShift("teacher", 10)).toEqual("dokmrob");
});

test("caesarShift wrapping", () => {
  expect(caesarShift("xyz", 3)).toEqual("abc");
});
test("caesarShift character sensitivity", () => {
  expect(caesarShift("HeLLo", 3)).toEqual("KhOOr");
});
test("caesarShift punctuation", () => {
  expect(caesarShift("Hello, World!", 3)).toEqual("Khoor, Zruog!");
});
// analyzeArray Tests
