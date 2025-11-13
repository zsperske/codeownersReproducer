const Codeowners = require('codeowners');

console.log('Testing /* pattern behavior\n');

const codeowners = new Codeowners(__dirname);

const tests = [
  { path: 'packages/other', expected: true, reason: 'direct child' },
  { path: 'packages/other/README.md', expected: false, reason: 'nested file' },
  { path: 'packages/other/src/file.js', expected: false, reason: 'nested file' },
];

console.log('Pattern: /packages/* @zsperske\n');

let failed = 0;

tests.forEach(test => {
  const owners = codeowners.getOwner(test.path);
  const matches = owners && owners.includes('@zsperske');
  const pass = matches === test.expected;
  
  console.log(`${pass ? '✅' : '❌'} ${test.path}`);
  console.log(`   Expected: ${test.expected ? 'match' : 'no match'} (${test.reason})`);
  console.log(`   Actual:   ${matches ? 'match' : 'no match'}`);
  
  if (!pass) failed++;
});

console.log(`\n${failed > 0 ? '❌ FAILED' : '✅ PASSED'}: ${failed} of ${tests.length} tests failed`);

if (failed > 0) {
  console.log('\nBug: /packages/* matches nested files recursively');
  console.log('Expected: Should only match direct children of /packages');
  process.exit(1);
}
