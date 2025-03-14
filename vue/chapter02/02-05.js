//기본 매개 변수는 무조건 뒤에서분터 사용
function addContact(
  name,
  mobile,
  home = '없음',
  address = '없음',
  email = '없음'
) {
  let str =
    `name = ${name}, mobile = ${mobile}, home = ${home} ` +
    `address = ${address}, email = ${email}`;
  console.log(str);
}

//값을 설ㄹ정하지 않은 병수는 기본값으로 출력
addContact('홍길동', '010-1111-22222');
addContact('권세림', '011-3333-4444');
