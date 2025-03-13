const fs = require('fs');

if (!fs.existsSync('./test/logs/workout_log.txt')) {
  console.log('회원 정보 파일이 없습니다.');
} else {
  fs.appendFile(
    './test/logs/workout_log.txt',
    '\n이승기: 체중 68kg, 벤치프레스 80kg',
    (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log('회원 정보가 성공적으로 추가되었습니다.');
    }
  );
}
