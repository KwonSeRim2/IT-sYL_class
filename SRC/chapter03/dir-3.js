const fs = require('fs');

if (fs.existsSync('./test')) {
  console.log('이미 있음');
  fs.rmdir('./test', (err) => {
    return console.error(err);
  });
} else{
  
} 
