import test from "node:test";
import assert from "node:assert/strict";
import { validateContact } from "../src/data/contact.js";
test("empty inquiry identifies every required field", () => {
  assert.deepEqual(
    Object.keys(
      validateContact({ name: "", email: "", topic: "", message: "" }),
    ),
    ["name", "email", "topic", "message"],
  );
});
test("rejects whitespace names, malformed email and short messages", () => {
  const e = validateContact({
    name: "  ",
    email: "bad@",
    topic: "Admissions",
    message: "  hi  ",
  });
  assert.ok(e.name && e.email && e.message);
  assert.equal(e.topic, undefined);
});
test("valid inquiry passes without sending or storing data", () => {
  assert.deepEqual(
    validateContact({
      name: "Student Test",
      email: "student@example.com",
      topic: "Academic programs",
      message: "I would like to learn about BSIT.",
    }),
    {},
  );
});
