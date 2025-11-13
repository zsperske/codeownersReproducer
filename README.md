# Bug Reproduction: `/*` Pattern Matches Recursively

## Issue

The `codeowners` library treats `/*` patterns as recursive (like `/**`), but according to GitHub's CODEOWNERS behavior, `/*` should only match direct children.

## Reproduction

This repo has a `demonstrate-bug` branch that modifies files to show the difference between correct and incorrect ownership matching.

See the PR for the issue in action, note the lock icon on the files page - https://github.com/zsperske/codeownersReproducer/pull/1/files

**Files modified in `demonstrate-bug` branch:**

✅ `packages/analytics/src/index.ts` - Correctly owned (pattern: `/packages/analytics @zsperske`)
- Library reports: `@zsperske` 
- GitHub assigns: `@zsperske` ✓

❌ `packages/other/README.md` - Incorrectly reported as owned (pattern: `/packages/* @zsperske`)
❌ `packages/other/src/file.js` - Incorrectly reported as owned
- Library reports: `@zsperske`
- GitHub assigns: (no owner) ✓

### Locally (run the test)

1. Clone and checkout main branch:
```bash
git checkout main
```

2. Install dependencies:
```bash
npm install
```

3. Run the test:
```bash
npm test
```

## Expected vs Actual Behavior

**CODEOWNERS file:**
```
/packages/* @zsperske
```

**Test results:**

| Path | Should Match? | Actually Matches? |
|------|---------------|-------------------|
| `packages/other` | ✅ Yes (direct child) | ✅ Yes |
| `packages/other/README.md` | ❌ No (nested file) | ✅ **Yes** ❌ |
| `packages/other/src/file.js` | ❌ No (nested file) | ✅ **Yes** ❌ |

The pattern `/packages/*` is matching files at ALL depths when it should only match direct children of `/packages`.

## Impact

- Audit tools report incorrect ownership coverage
- Diverges from GitHub's actual PR assignment behavior
- Affects any pattern using `/*` at any hierarchy level

## Environment

- codeowners@5.1.1
- Node.js v20.19.2
