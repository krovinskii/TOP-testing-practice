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

// analyzeArray TestsP
