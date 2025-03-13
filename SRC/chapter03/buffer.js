const { error } = require('console');
const fs = require('fs');

fs.readFile('./example.tex', (err, data) => {
  if (err) {
    return console.log('err');
  }
  console.log(data);
  console.log('\n');
  console.log(data.toString());
});
