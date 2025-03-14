import _ from 'lodash';
const teacher = {
  name: 'yura',
  age: 20,
  enails: ['yura@test.com'],
};

//const copyTeacher 주소값이 복사되서 같이 변경
//해결방법 1. object.assign 이용해서 teacher 객체에 출처 객체를 복사
//const copyTeacher = object.assign({}, teacher)
//해경방법 2. 전개 연산자를 이용해서 객체 생성
//const copyTeacher = {...teacher};
///=> 참조형 데이트를 가지고 있을 때 한계
//깊은 복사까지 하기 워한 lodash 사용법
const copyTeacher = _.cloneDeep(teacher);
console.log(copyTeacher === teacher);

teacher.age = 21;
console.log(teacher);
console.log(copyTeacher);
console.log(copyTeacher);
