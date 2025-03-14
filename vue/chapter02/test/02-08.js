//1.?
function addContact1({ name, phone, email = '이메일없음', age = 0 }) {
  console.log(name, phone, email, age);
}
addContact1({ name: '이몽룡', phone: '010-1111-2222' });

//2.객체를 통째로 넘겨받아 함수 내에서 구조 분해
function addContact2(contact) {
  //속성을 초기화해주는 코드
  if (!contact.email) contact.email = '이메일없음';
  if (!contact.age) contact.age = 0;
  let { name, phone, email, age } = contact;
  console.log(name, phone, email, age);
}
addContact2({ name: '이몽룡', phone: '010-1111-2222' });

//3.구조분해 할당옶이 기본 매개변수 사용해서 넘겨줌
function addContact3(name, phone, email = '이메일없음', age = 0) {
  console.log(name, phone, email, age);
}
addContact3('이몽룡', '010-1111-2222');
