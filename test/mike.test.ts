import fib from "../src/mike";

test("addition works", () => {
  expect(fib(10)).toBe([1,2,3,4,5,6,7,8,9,10].reduce((a,b) => a * b, 1));
});
