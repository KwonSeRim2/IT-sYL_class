const path = require('path');
//경로연결하기
//join: 여러개으리 경로를 폴더 구조로 합쳐준다
const fullpqth = path.join('some', 'work', 'ex.txt');
console.log(fullpqth);

// __filename : 파일의 절대경로
console.log(`파일의 절대 경로: ${__filename}`);

const dir = path.dirname(__filename);
console.log(`경로만: ${dir}`);

//basename : 경로 제위한 파일명면 가져온다.
const fn = path.basename(__filename);
console.log(`파일이름: ${fn}`);

//확장자까지 제외 가능
const fn2 = path.basename(__filename, '.js');
console.log(`파일이름: ${fn2}`);

//extname : 확장자만 추출
const ext = path.extname(__filename);
console.log(`파일 확장자만: ${ext}`);
console.log(path.basename(__filename, '.js'));

//parse: 경로에 대한 정보를 객체로 전환
const parsedPath = path.parse(__filename);
console.log(parsedPath);
