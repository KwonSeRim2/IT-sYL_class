const fs = require('fs');
const path = require('path');

let content = `
김종국, 나이: 45, 체중: 80kg, 운동: 벤치프레스 100kg
`;
fs.writeFileSync('./test/members/kim_jong_kook.txt', content, { flag: 'a' });
console.log('파일을 생성완료');

const dir = path.dirname('./test/members/kim_jong_kook.txt');
console.log(`디렉터리 경로: ${dir}`);
const name = path.basename('./test/members/kim_jong_kook.txt');
console.log(`파일 이름: ${name}`);
const ex = path.extname('./test/members/kim_jong_kook.txt');
console.log(`파일 확장자: ${ex}`);
const name2 = path.basename('./test/members/kim_jong_kook.txt', '.txt');
console.log(`파일 확장자: ${name2}`);
