# Browser Low Disk

This fixture reproduces browser-mode failures caused by Chromium exhausting disk space in `/tmp`. It generates isolated browser test files and allocates a ballast file so the requested amount of disk remains available.

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
