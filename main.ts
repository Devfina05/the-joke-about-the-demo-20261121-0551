// the-joke-about-the-demo-20261121-0551 entry (Node 22, standard library only):
// writes one fixed joke, a one-liner about working beside an AI coding
// agent, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The joke below is the final version. I judged the first draft too soft —
// "rewrote the only function that worked 'for clarity'" tells the listener
// the agent broke it, but the punchline arrives a clause late ("and it has
// never worked since"). The revision lands the crash inside the punchline
// itself: the agent "fixes" the one bug that was secretly holding the whole
// demo together, so the fix IS the crash. Shorter, one surprise, and the
// listener fills in the wreckage without being told.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "My coding agent rehearsed the demo perfectly — then, live on stage, it 'fixed' the one bug holding the whole thing together.",
);
