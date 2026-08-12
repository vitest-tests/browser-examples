import { execFile } from "node:child_process";
import { mkdirSync, rmSync, statfsSync, writeFileSync } from "node:fs";
import { parseArgs, promisify } from "node:util";
import { fileURLToPath } from "node:url";

const execFileAsync = promisify(execFile);
const GIBIBYTE = 1024 ** 3;
const TMP_FILE_NAME = "/tmp/vitest-browser-low-disk.bin";

async function main() {
  const { positionals } = parseArgs({ allowPositionals: true });
  const targetFreeGiB = Number(positionals[0]);
  const testFileCount = Number(positionals[1] ?? 150);

  if (process.env.GITHUB_ACTIONS !== "true") {
    throw new Error("The low-disk suite only runs on GitHub Actions");
  }
  if (process.platform !== "linux") {
    throw new Error("The low-disk suite only supports Linux");
  }
  if (!Number.isFinite(targetFreeGiB) || targetFreeGiB < 1) {
    throw new Error("Specify the free disk to retain in GiB, for example: pnpm setup 2 150");
  }
  if (!Number.isInteger(testFileCount) || testFileCount < 1) {
    throw new Error("Test file count must be a positive integer");
  }

  const testDirectory = fileURLToPath(new URL("generated-tests", import.meta.url));

  rmSync(TMP_FILE_NAME, { force: true });
  rmSync(testDirectory, { force: true, recursive: true });
  mkdirSync(testDirectory, { recursive: true });

  for (let index = 0; index < testFileCount; index++) {
    writeFileSync(
      `${testDirectory}/empty-${index}.test.js`,
      `\
import { test } from 'vitest'

test('empty ${index}', () => {
  document.body.appendChild(document.createElement('div'))
})
`,
    );
  }

  const targetFreeBytes = targetFreeGiB * GIBIBYTE;
  const tmpFileBytes = Math.floor(availableBytes() - targetFreeBytes);
  if (tmpFileBytes > 0) {
    await execFileAsync("fallocate", ["-l", String(tmpFileBytes), TMP_FILE_NAME]);
  }

  console.log(
    `Prepared ${testFileCount} test files with ${(availableBytes() / GIBIBYTE).toFixed(2)} GiB free in /tmp`,
  );
}

function availableBytes() {
  const stats = statfsSync("/tmp");
  return stats.bavail * stats.bsize;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
