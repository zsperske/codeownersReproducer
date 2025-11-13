# Other Package

<!-- 
  OWNERSHIP DISCREPANCY:
  
  codeowners library reports: @zsperske (INCORRECT - treats /* as recursive)
  GitHub actually assigns:     (no owner - not a direct child of /packages)
  
  Pattern: /packages/* @zsperske
  This file is at: packages/other/README.md (2 levels deep from /packages)
  
  The /* pattern should only match packages/other itself, NOT files inside it.
-->
