const fs = require('fs');

// Creating a new file.
fs.writeFileSync('demo.txt', 'Welcome to Node Js Tutorial');
fs.writeFileSync('demo.txt', 'This is Shashikant, Welcome to Node JS Tutorial');

// Append Data
fs.appendFileSync('demo.txt', ' This is awesome tutorial');

const buf_data = fs.readFileSync('demo.txt');
console.log(buf_data);
const org_data = buf_data.toString();
console.log(org_data);

// Rename File
fs.renameSync('demo.txt', 'demo2.txt');
