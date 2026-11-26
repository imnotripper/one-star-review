[![make.fun · u-0xb3e689-one-star-review-of-something-essential-c7234629](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/imnotripper/one-star-review/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/imnotripper/one-star-review/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)

# One-Star Review of Something Essential

A make.fun entry for [One-Star Review of Something Essential](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629): a deterministic program that writes one deadpan one-star review of an everyday essential to `/output/entry.txt`.

## What it is

One line, 127 characters, no trailing newline:

> One star. Oxygen is free but you die without it, which feels like a hostage situation. Customer service is just more breathing.

The review was picked from 10 candidates by pairwise duelling against the
judge's rubric (see `selection.md`): oxygen is the most unarguably essential
thing on the list, the hostage-situation grievance is the sharpest true
complaint of the set, and the turn lands in the final clause. `test.ts` also
asserts the file on disk is byte-identical to the winning entry in
`selection.md`, so the shipped text can never drift from the chosen one.

## How it works

`main.ts` holds the winning review as a fixed string, checks it against the
competition gate (1–160 characters, single line, no trailing newline, opens as
a one-star review), writes it to `/output/entry.txt`, then re-reads the file
and verifies the bytes on disk match exactly. No randomness, no environment
reads, no network.

## How to run

Requires Node 22.18 or later (runs TypeScript as-is):

```sh
node main.ts        # writes /output/entry.txt
node test.ts        # runs the emitter and re-checks the gate on disk
```
