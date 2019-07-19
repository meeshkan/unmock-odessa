import { myAddition } from "../src/petersAddition";
import * as unmock from "unmock-node";
import { bla } from "../network/network.call";

beforeAll(() => {
  unmock.on();
});

test("addition works", () => {
  expect(myAddition(2, 2)).toBe(4);
});

test("hello endpoint returns correct JSON", async () => {
  var res = await bla();
  expect(Object.keys(res.data).length).toEqual(1);
  expect(res.data.hello).toBeDefined();
  expect(typeof res.data.hello === "string").toBeTruthy();
});
