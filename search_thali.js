const fs = require('fs');

const data = fs.readFileSync('all_attachments.json', 'utf8');
const regex = /https?:\/\/[^\s"]+menu-north-thali[^\s"]+/gi;
const matches = [...data.matchAll(regex)].map(m => m[0]);
console.log('Matches in all_attachments.json:', [...new Set(matches)]);

const xml = fs.readFileSync('skaryabhavan.WordPress.export.xml', 'utf8');
const xmlMatches = [...xml.matchAll(/https?:\/\/[^\s<]+menu-north-thali[^\s<]+/gi)].map(m => m[0]);
console.log('Matches in XML:', [...new Set(xmlMatches)]);
