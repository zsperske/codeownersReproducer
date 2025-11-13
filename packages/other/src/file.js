// Other Package - Main File

/*
 * OWNERSHIP DISCREPANCY:
 *
 * codeowners library reports: @zsperske (INCORRECT - treats /* as recursive)
 * GitHub actually assigns:     (no owner - not a direct child of /packages)
 *
 * Pattern: /packages/* @zsperske
 * This file is at: packages/other/src/file.js (3 levels deep from /packages)
 *
 * The /* pattern should only match packages/other itself, NOT nested files.
 */

module.exports = {
  name: 'other-package',
  version: '1.0.0'
};
