const fs = require('fs');
const tsv = fs.readFileSync('.cache/words.tsv', 'utf8');
const { words } = require('.');

console.log(process.memoryUsage());
for (const record of words.parse(tsv)) {
  fs.writeFileSync('/dev/null', JSON.stringify(record, null, 4));
  // fs.writeFileSync('.cache/entries/' + record.id + '.json', JSON.stringify(record, null, 4));
}
console.log(process.memoryUsage());
