const fs = require('fs');

//readFileSync: 현재파일을 동기적으로 읽는다(기본적으로 이진 데이터)
const data = fs.readFileSync('./example.tex');
console.log(data);
