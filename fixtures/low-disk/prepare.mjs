import { execFileSync } from 'node:child_process'
import { mkdirSync, rmSync, statfsSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const gibibyte = 1024 ** 3
const targetFreeGiB = Number(process.argv[2])

if (process.platform !== 'linux') {
  throw new Error('The low-disk suite only supports Linux')
}
if (!Number.isFinite(targetFreeGiB) || targetFreeGiB < 1) {
  throw new Error('Specify the free disk to retain in GiB, for example: pnpm test:low-disk:before-test 2')
}

const testDirectory = fileURLToPath(new URL('generated-tests', import.meta.url))
const ballast = '/tmp/vitest-browser-low-disk.bin'

function availableBytes() {
  const stats = statfsSync('/tmp')
  return stats.bavail * stats.bsize
}

rmSync(ballast, { force: true })
rmSync(testDirectory, { force: true, recursive: true })
mkdirSync(testDirectory, { recursive: true })

for (let index = 0; index < 150; index++) {
  writeFileSync(
    `${testDirectory}/empty-${index}.test.js`,
    `import { test } from 'vitest'\n\ntest('empty ${index}', () => {\n  document.body.appendChild(document.createElement('div'))\n})\n`,
  )
}

const targetFreeBytes = targetFreeGiB * gibibyte
const ballastBytes = Math.floor(availableBytes() - targetFreeBytes)
if (ballastBytes > 0) {
  execFileSync('fallocate', ['-l', String(ballastBytes), ballast])
}

console.log(`Prepared 150 test files with ${(availableBytes() / gibibyte).toFixed(2)} GiB free in /tmp`)
