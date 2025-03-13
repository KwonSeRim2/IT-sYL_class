const fs = require('fs');

//rm: 파일이 있는 폴더까지 비동기로 삭제
// recursive 옵션으로 하위 폴더까지 삭제 가능
  fs.rm('./test/test2/test3', {recursive: true}, (err)=>{
    if (err) return console.error(err)
  });
