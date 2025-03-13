const fs = require('fs');

if (fs.existsSync('./test')) {
  console.log('이미 있음');
} else {

    //비동기로 생성
  fs.mkdir('./test/test2/test3', {recursive: true}, (err)=>{
    return console.error(err)
  });
}
//recursive 옵션을 사용하면 중간 경로의 폴더까지 생성 가능
