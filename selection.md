# Selection — One-Star Review of Something Essential

Design brief: one deadpan one-star review, ≤160 chars, single line, of an everyday
essential. Rubric (in judge order): (1) unmistakably a one-star review of an
everyday essential, (2) sharpest true grievance, (3) holds the deadpan — no
winking, no explaining, no exclamation marks, (4) turns in the last few words,
(5) tight and specific, one joke only.

## Candidates (all single-line, ≤160 chars)

1. Sun (133): "One star. The sun has no off switch, no dimmer, and shines directly into my eyes every single morning. Management refuses to respond."
2. Gravity (132): "One star. Gravity drops everything I own, every time, and has never once apologized. Would not recommend to anyone standing upright."
3. Sleep (135): "One star. Sleep takes eight hours a day, arrives late when I need it most, and leaves without notice. Unreliable. Would not book again."
4. Water (135): "One star. Water is in everything, costs extra when it has a label, and still manages to leak through my ceiling. Zero stars if I could."
5. Oxygen (127): "One star. Oxygen is free but you die without it, which feels like a hostage situation. Customer service is just more breathing."
6. Mondays (127): "One star. Mondays arrive every single week without fail and offer nothing new. I have filed this complaint seven times already."
7. Gravity (125): "One star. Gravity has been dropping my phone for years and blames the floor. No refund policy, no manager, no way to opt out."
8. Sun (126): "One star. The sun shows up uninvited every morning, bleaches my curtains, and never once asked if I was ready. Rude, honestly."
9. Sleep (117): "One star. Sleep is eight hours of unpaid overtime I never agreed to, and I wake up tired anyway. Would not recommend."
10. Water (131): "One star. Water falls from the sky without warning, soaks my shoes, then charges me for the privilege of drinking it. Unacceptable."

## Duel notes (pairwise, rubric order)

- #4 loses early: "Zero stars if I could" winks at the format and breaks the deadpan (criterion 3). #8's "Rude, honestly" also winks slightly and its turn is the weakest.
- #10's turn is a single flat word ("Unacceptable.") — no sting after the complaint (criterion 4).
- #7 packs two jokes ("blames the floor" + "no way to opt out") — criterion 5, one joke crowding the first.
- #6 is funny but Mondays is the least "essential" of the set, and "filed this complaint seven times" is a good turn but the grievance ("offers nothing new") is soft (criterion 2).
- #9's grievance ("unpaid overtime") is sharp, but its turn ("Would not recommend") is generic review boilerplate — weaker than #5's turn.
- #3 vs #2: both solid; #2's turn ("anyone standing upright") is more specific than #3's ("Would not book again"), but both lose to #5 on grievance sharpness.
- #1 vs #5: #1's "Management refuses to respond" is a strong turn, but "no off switch" is the most familiar sun complaint in the field. #5's grievance — free, yet you die without it, i.e. a hostage situation — is the most original true grievance of the ten, something everyone recognises but has never seen written down.

## Winner: #5 — Oxygen (127 chars)

"One star. Oxygen is free but you die without it, which feels like a hostage situation. Customer service is just more breathing."

Rationale: (1) oxygen is the most unarguably essential thing on the list; (2) the
hostage-situation grievance is the sharpest and most original of the ten;
(3) deadpan throughout — no winking, no exclamation; (4) the turn lands in the
final clause, "Customer service is just more breathing", after the complaint
has been read straight; (5) one joke, tight at 127 chars, no filler.

Verified locally: `node main.ts` writes exactly this string to /output/entry.txt
(127 chars, single line, no trailing newline) and `node test.ts` re-checks the
gate against the file on disk.
