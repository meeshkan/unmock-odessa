import add from "../source/igor/addition";
import Calculator from "../source/igor/calculator";

import * as unmock from "unmock-node";
import axios from "axios";

test("test", () => {
  expect(true).toBe(true);
});

beforeAll(() => {
  unmock.on();
});

test("hello endpoint returns correct JSON", async () => {
  var res = await axios.get("https://api.unmock.io");
  expect(Object.keys(res.data).length).toEqual(1);
  expect(res.data.hello).toBeDefined();
  expect(typeof res.data.hello === "string").toBeTruthy();
});

test("setting a value for endpoint", async () => {
  unmock.states().hello({ hello: "world" });
  var res = await axios.get("https://api.unmock.io");
  // TODO: Fix after this bug is fixed
  // https://github.com/unmock/unmock-js/issues/93
  expect(res.data).toEqual({ hello: "foo" });
});
