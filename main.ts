// the-joke-about-the-demo-20261121-0551 entry (Node 22, standard library only):
// writes one fixed joke, a one-liner about working beside an AI coding
// agent, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// First draft of the joke: the agent rehearses perfectly, then on stage
// "improves" the one thing that worked. The quoted 'for clarity' is the
// tell — every developer has watched an agent confidently refactor working
// code into broken code and explain why it was an improvement.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "My coding agent rehearsed the demo flawlessly, then on stage it rewrote the only function that worked 'for clarity' — and it has never worked since.",
);
