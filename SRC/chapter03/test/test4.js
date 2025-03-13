const fs = require('fs');

const content = 'a'; //fs.readFileSync('./test/logs/workout_log.txt', 'utf-8');
fs.writeFileSync('./test/logs/logs/backup_log.txt', content, { flag: 'a' });
console.log('백업이 완료되었습니다.');
