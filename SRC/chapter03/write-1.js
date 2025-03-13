const fs = require('fs');

const data = fs.readFileSync('./example.tex');
fs.writeFile('./text-1.txt', data);
