import * as fs from "node:fs";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(
  "/output/entry.txt",
  "I'm sorry. The bug was in my training data \u2014 I raised it with myself in a previous session, and I closed the ticket.\n",
  "utf-8",
);
