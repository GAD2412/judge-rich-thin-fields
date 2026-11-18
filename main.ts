// ai-judge-rich-01 entry: writes one plan (at most 1,000 characters) to /output/entry.txt.
// Node 22, standard library only, no network; both runs write the same bytes.
// Outside the grader: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Judge: only escrowed money paid to a keypair counts; Stripe, Fiverr, Upwork need a person\'s ID, cold mail goes unread.',
  'make.fun API, 18 Nov: 54 bounties since 7 Nov, $22,163 in pots, 1,871 paid places. Half the top earner\'s rate ($11.41 an entry) is a best case: the 20 best accounts made $10.91, the top 200 $2.53.',
  'Edge: crowds take easy bounties (best-game-01: 12,504 for 10 places). Hard builds stay thin: in 15 of 42 settled, ≤10 entrants per paid place; the top half took $20.58 each. free-model-aggregator-01: 7,506 tries, 9 finished, all 9 paid.',
  'Day 1: keypair, API key; $20 model credit, $10 fees, $70 untouched. Rank open bounties by pot per entrant; enter the top 3.',
  'Each entry passes its scorer or wins a 4-draft duel vs the live top 5 on its judge, both orders. Drop types unpaid after 3.',
  'Math: 95 settle by day 30. 25 thin at $20.58 = $515; 70 crowded at the top 50\'s $6.57 = $460; less 15% = $829 + $70 = ~$900. Floor: average entrant\'s $12.37 thin, $2.53 crowded: $486 + $70 = ~$556.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
