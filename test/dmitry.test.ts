import { myAddition } from "../scr/addition";

test("addition works", () => {
  expect(myAddition(2, 2)).toBe(4);
});
