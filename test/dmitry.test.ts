import { myAddition } from "../scr/dm/addition.dm";

test("addition works", () => {
  expect(myAddition(2, 2)).toBe(4);
});
