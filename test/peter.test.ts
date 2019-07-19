import { myAddition } from "../src/petersAddition";

test("addition works", () => {
  expect(myAddition(2, 2)).toBe(4);
});
