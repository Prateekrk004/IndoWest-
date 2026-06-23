import fs from 'fs';

const html = fs.readFileSync('drive-full-scan.html', 'utf8');

// Let's find any unique 33-char drive ID starting with 1
const pattern = /1[a-zA-Z0-9_-]{32}/g;
const matches = html.match(pattern) || [];
const uniqueIds = [...new Set(matches)];

console.log('Total unique IDs starting with 1:', uniqueIds.length);
console.log('Sample IDs (first 10):', uniqueIds.slice(0, 10));

// Let's write them down to a file
fs.writeFileSync('all-regex-ids.json', JSON.stringify(uniqueIds, null, 2));
