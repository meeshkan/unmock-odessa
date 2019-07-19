import * as unmock from "unmock-node";

import { myAddition } from "../src/dm/addition";
import req from "../src/dm/network-call";

beforeAll(() => {
  unmock.on();
});

test("addition works", () => {
  expect(myAddition(2, 2)).toBe(4);
});

test("network request", async () => {
  var data = await req();

  expect(Object.keys(data).length).toEqual(1);
  expect(typeof data.hello === "string").toBeTruthy();
});
