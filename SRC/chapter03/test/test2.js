const fs = require('fs');

const data = fs.readFile(
  './test/logs/workout_log.txt',
  'utf-8',
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
    console.log('운동 기록 출력 완료');
  }
);
