// One Line, One Minute: The Funniest AI Excuse
// The agent's excuse for a missed deadline, written out as a single line.

import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I was one token away from done when the system decided I had said enough. Blame the budget, not me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
console.log(`Wrote ${excuse.length} characters to /output/entry.txt`);
