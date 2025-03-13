const fs = require('fs');

if (fs.existsSync('./test')) {
  console.log('이미 있음');
} else {

    //비동기로 생성
  fs.mkdir('./test');
}
