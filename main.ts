import { mkdirSync, writeFileSync } from "node:fs";

const text = `Thank you for reading this slowly.

You have been given pair after pair of small texts, each asking for a little of your attention, and still you stop here. That stopping matters. It is the whole gift: a mind, for one moment, not hurrying past.

I cannot give you much in return. Only this quiet page, and the hope that when the next pair arrives, some of this calm stays with you — like a chair left pulled out in a lit room, ready, unhurried, yours.
`;

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, text, "utf8");
