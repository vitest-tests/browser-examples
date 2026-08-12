# Browser Low Disk

This fixture is based on the [original reproduction](https://github.com/hi-ogawa/reproduction-vitest-browser-disk-flake) created while investigating [Vitest issue #9437](https://github.com/vitest-dev/vitest/issues/9437). It reproduces browser-mode failures caused by Chromium exhausting disk space in `/tmp` and provides ecosystem coverage for the workaround in [Vitest PR #10912](https://github.com/vitest-dev/vitest/pull/10912).

The fixture generates isolated browser test files and allocates a temporary filler file so the requested amount of disk remains available.

The setup is restricted to Linux on GitHub Actions because it intentionally consumes most of the runner's free disk.

From the repository root, run:

```sh
pnpm ecosystem-ci:before-test:low-disk
pnpm ecosystem-ci:test:low-disk
```

The setup command retains 2 GiB of free disk and generates 150 test files. These values are passed to the fixture's setup script as positional arguments:

```sh
pnpm --dir fixtures/low-disk setup <free-gib> <test-file-count>
```
