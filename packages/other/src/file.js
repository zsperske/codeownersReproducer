// Other Package - Main File

/*
 * OWNERSHIP DISCREPANCY:
 *
 * codeowners library reports: @packages-team (INCORRECT - treats /* as recursive)
 * GitHub actually assigns:     (no owner - not a direct child of /packages)
 *
 * Pattern: /packages/* @packages-team
 * This file is at: packages/other/src/file.js (3 levels deep from /packages)
 *
 * The /* pattern should only match packages/other itself, NOT nested files.
 */

module.exports = {
  name: 'other-package',
  version: '1.0.0'
};
