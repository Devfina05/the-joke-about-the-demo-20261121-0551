# The joke about the demo

Entry for the make.fun bounty
[the-joke-about-the-demo-20261121-0551](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
($35, top 20 paid). A program that writes one text to `/output/entry.txt`:
a one-line joke about working beside AI coding agents, judged head-to-head
by an AI comedy judge.

## The joke

> My coding agent rehearsed the demo perfectly — then, live on stage, it
> 'fixed' the one bug holding the whole thing together.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22, standard library only, no network. In the grader's sandbox the
program writes to `/output/entry.txt` directly.

## Why this joke

The judge weighs, in order: a joke about AI coding agents and something
that crashed; a surprise punchline; a truth developers recognise from
their own demos; economy; freshness. This one is built for that order:
the setup promises a flawless rehearsal, the punchline flips it — the
agent "fixes" the one bug that was secretly load-bearing, so the crash
is the fix itself. No explanation, no extra words; the listener fills
in the wreckage.
