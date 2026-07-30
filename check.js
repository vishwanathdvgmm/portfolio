const { execSync } = require("child_process");
const fs = require("fs");
try {
  const tsc = execSync("npx tsc --noEmit", { encoding: "utf-8" });
  fs.writeFileSync("out.txt", "TSC SUCCESS:\n" + tsc);
} catch (e) {
  fs.writeFileSync("out.txt", "TSC ERROR:\n" + e.stdout + "\n" + e.stderr);
}

try {
  const lint = execSync("npx next lint", { encoding: "utf-8" });
  fs.appendFileSync("out.txt", "\nLINT SUCCESS:\n" + lint);
} catch (e) {
  fs.appendFileSync("out.txt", "\nLINT ERROR:\n" + e.stdout + "\n" + e.stderr);
}
