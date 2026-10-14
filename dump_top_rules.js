const fs = require('fs');

const rules = JSON.parse(fs.readFileSync('elementor_matched_rules.json', 'utf8'));

// Let's inspect the elements of Why Choose, Form, Pricing, Badges, Columns
const interesting = [
  '51a7d0f', '13e463c', 'bfd3f5f', '733e23a', '016c3af', '8f42bdd',
  'e23e91d', 'f2459f9', '9805284', '7336bbb', '3ba5ae4', '7c8a38e',
  'e90c955', 'b3ad7b8', '609b151', '2c17ecf', 'ce4f1df', '19c9c44',
  'e9b3c2c', '386b74c', 'f52f8ed', '63b40ad', '6cc16e0', '363b226',
  'a0b2e37', 'c1b5322', 'c3e5f7c', '188740d', '8360526', 'eaee610',
  'ec1376e', 'd94c6a6', '7d4b435', 'b99557a', 'a2a3e93', 'f5f6866'
];

interesting.forEach(id => {
  if (rules[id]) {
    console.log(`\n=== ID ${id} ===`);
    rules[id].forEach(r => console.log(r));
  }
});
