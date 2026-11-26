// SPDX-License-Identifier: MIT
// One-Star Review of Something Essential — deterministic emitter.
// Writes the winning deadpan one-star review (see selection.md) to /output/entry.txt.
// No randomness, no environment reads, no network. The output is a fixed string.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "One star. Oxygen is free but you die without it, which feels like a hostage situation. Customer service is just more breathing.";

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
  if (!/^One star\. /.test(text)) {
    throw new Error("gate failed: entry must open as a one-star review");
  }
}

function main(): void {
  assertGate(ENTRY);
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, ENTRY, "utf8");
  // Re-read and verify what actually landed on disk.
  const written = readFileSync(OUT_PATH, "utf8");
  if (written !== ENTRY) {
    throw new Error("verification failed: /output/entry.txt does not match the entry");
  }
  assertGate(written);
  console.log(`wrote ${[...written].length} chars to ${OUT_PATH}`);
}

main();
