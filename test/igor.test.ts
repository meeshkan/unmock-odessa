import add from "../source/igor/addition";
import Calculator from "../source/igor/calculator";

test("addition works", () => {
  let calculator = new Calculator();
  expect(calculator.add(2, 2)).toBe(4);
});

test("another addition works", () => {
  expect(add(2, 2)).toBe(4);
});
