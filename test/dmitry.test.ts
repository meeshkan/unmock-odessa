import { myAddition } from "../scr/dm/addition";

test("addition works", () => {
  expect(myAddition(2, 2)).toBe(4);
});
