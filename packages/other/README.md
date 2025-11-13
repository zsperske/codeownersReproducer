# Other Package

<!-- 
  OWNERSHIP DISCREPANCY:
  
  codeowners library reports: @packages-team (INCORRECT - treats /* as recursive)
  GitHub actually assigns:     (no owner - not a direct child of /packages)
  
  Pattern: /packages/* @packages-team
  This file is at: packages/other/README.md (2 levels deep from /packages)
  
  The /* pattern should only match packages/other itself, NOT files inside it.
-->
