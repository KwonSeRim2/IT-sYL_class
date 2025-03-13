const fs = require('fs');

const processFile = async () => {
  try {
    //파일 생성
    await fs.writeFileSync('./exaple.tex', 'hello, node.js');
//파일 읽기
    await fs.readFile('./exaple.tex', 'utf-8');
//파일 수정
    await fs.appendFile('./exaple.tex', '추가된 내용');
//파일 삭제
    await fs.unlink('./exaple.tex');
  } catch {}
};
