// SPDX-License-Identifier: MIT
// Test for the one-star-review emitter.
// Runs main.ts, then asserts the gate against /output/entry.txt on disk.
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";

function assertGate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 160) {
    throw new Error(`gate failed: entry is ${chars.length} chars, must be 1-160`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate failed: entry must be a single line");
  }
  if (text.endsWith("\n")) {
    throw new Error("gate failed: entry must not end with a newline");
  }
  if (text !== text.trim()) {
    throw new Error("gate failed: entry must not have leading or trailing whitespace");
  }
}

const EXPECTED =
  "One star. Oxygen is free but you die without it, which feels like a hostage situation. Customer service is just more breathing.";

execSync("node main.ts", { stdio: "inherit" });
const written = readFileSync(OUT_PATH, "utf8");
assertGate(written);
if (written !== EXPECTED) {
  throw new Error(`gate failed: entry.txt does not match the winning entry from selection.md`);
}
if (!written.startsWith("One star. Oxygen")) {
  throw new Error(`gate failed: unexpected entry text: ${written}`);
}
console.log(`test passed: ${[...written].length} chars, single line, no trailing newline`);
console.log(written);
