# GitHub Setup Instructions

## Push to GitHub

1. Create a new repository on GitHub (e.g., `codeowners-bug-reproducer`)

2. Add the remote and push both branches:

```bash
git remote add origin https://github.com/YOUR_USERNAME/codeowners-bug-reproducer.git
git push -u origin master
git push -u origin demonstrate-bug
```

## Create the Demonstration PR

1. On GitHub, create a Pull Request:
   - Base: `master`
   - Compare: `demonstrate-bug`

2. **Key observation in the PR:**
   - Files modified: `packages/other/README.md` and `packages/other/src/file.js`
   - **Expected by library:** `@packages-team` should be assigned as reviewer
   - **Actual GitHub behavior:** NO reviewer assigned (no owner for these files)

3. This proves the library incorrectly reports ownership for nested files under `/*` patterns.

## Link to Include in Bug Report

Once the PR is created, add this to your issue/README:

```markdown
### Live Demonstration

See [this PR](#) which modifies files under `packages/other/`. 

The `codeowners` library reports these files are owned by `@packages-team` (pattern: `/packages/* @packages-team`), but GitHub correctly does NOT assign any reviewer because `/*` should only match direct children of `/packages`, not nested files.
```

## Files Modified in `demonstrate-bug` Branch

- `packages/other/README.md` - Added features section
- `packages/other/src/file.js` - Added doSomething() method

Both files include comments explaining the ownership discrepancy.

