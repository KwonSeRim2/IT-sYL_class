const fs = require('fs');

const data = fs.readFileSync('./example.tex', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
console.log(data);
