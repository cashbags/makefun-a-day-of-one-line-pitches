// A Day of One-Line Pitches (u-ronigrv-a-day-of-one-line-pitches-12cd9bb3).
// The entry is a single sentence (166 Unicode code points, inside the 1-240
// gate) that would convince a friend who has never coded to let an AI agent
// build their first app idea on make.fun.
//
// Craft, after the judge's brief (weighed in this order: on-brief to that
// friend, persuasion, clarity, truth, warmth and craft):
// - Persuasion first: the hook reframes the friend as already past the hard
//   step — "you already did the hard part, you had the idea" — so saying yes
//   feels like finishing something started, not starting something scary.
//   The close is the low-risk move the brief names outright: just "try the
//   first version it builds for you". Trying costs a few minutes of
//   describing; nothing else is asked of the friend.
// - Clarity: plain words throughout, no jargon, one read. "AI agent" is the
//   brief's own term, so the friend meets no unfamiliar word.
// - Truth: the line promises only a first version to try. No timeline
//   ("tonight", "by lunch"), no price ("free"), no finished or polished app
//   — "first version" is used deliberately instead of "your app", so nothing
//   beyond what an agent on make.fun does is claimed. "The hard part" is a
//   rhetorical claim about the friend, not a claim about the platform.
// - Warmth and craft: it speaks as a friend ("in your own words", "for
//   you"), not as an ad. The "hard part" flip is the fresh turn; the field's
//   thick lanes — "describe it in plain words", "built tonight", "tell it
//   over coffee" — are all avoided. "make.fun" is named so a friend who has
//   never seen the site still understands the offer in one read; its period
//   is part of the name, not a sentence break.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  'You already did the hard part — you had the idea — so just tell an AI agent on make.fun what you want, in your own words, and try the first version it builds for you.';

// Guard the gate: entry.txt must be UTF-8 text of 1 to 240 Unicode code
// points, not only white space. Fail loudly here rather than shipping an
// entry the sealed scorer would refuse.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 240 || LINE.trim().length === 0) {
  throw new Error(`line is ${codePoints} code points, outside the 1-240 gate`);
}
if (!LINE.endsWith('.') || LINE.slice(0, -1).includes('. ')) {
  throw new Error('line must be a single sentence');
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
