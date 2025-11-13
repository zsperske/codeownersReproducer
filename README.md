# Bug Reproduction: `/*` Pattern Matches Recursively

## Issue

The `codeowners` library treats `/*` patterns as recursive (like `/**`), but according to GitHub's CODEOWNERS behavior, `/*` should only match direct children.

## Reproduction

1. Install dependencies:
```bash
npm install
```

2. Run the test:
```bash
npm test
```

## Expected vs Actual Behavior

**CODEOWNERS file:**
```
/packages/* @packages-team
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
