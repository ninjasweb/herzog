import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const skillsDir = ".agents/skills";
const validator = ".agents/skills/skill-creator/scripts/quick_validate.py";

if (!existsSync(skillsDir)) {
  console.error(`Missing skills directory: ${skillsDir}`);
  process.exit(1);
}

if (!existsSync(validator)) {
  console.error(`Missing skill validator: ${validator}`);
  process.exit(1);
}

const skillNames = readdirSync(skillsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

let failed = false;

for (const skillName of skillNames) {
  const skillPath = join(skillsDir, skillName);
  console.log(`\nValidating ${skillPath}`);

  const result = spawnSync("python3", [validator, skillPath], {
    stdio: "inherit"
  });

  if (result.status !== 0) {
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log("\nAll skills validated.");
