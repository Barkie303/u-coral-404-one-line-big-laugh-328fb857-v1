// One Line, Big Laugh — a single funny line, written to entry.txt.
// The punchline bites its own tail: opening the report is what makes the number grow.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My screen time report said 6 hours yesterday. I opened it on my phone to check. It's 7 now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
