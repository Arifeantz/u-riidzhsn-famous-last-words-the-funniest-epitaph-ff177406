import { mkdirSync, writeFileSync } from "node:fs";

// The funniest epitaph: one line of famous last words, carved in stone.
// First person, the dead man speaking: eighty years of dodging every
// health lecture, killed at last by the one vegetable he mocked.
const EPITAPH =
  "I spent eighty years outrunning vegetables, doctors, and my wife's treadmill. One broccoli got me. Tell Marge the salad won.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, EPITAPH, "utf8");
console.log(`Wrote ${EPITAPH.length} characters to ${OUTPUT_PATH}`);
