//맨뒤에만 가변 매개변수 지정 가능
function foodReport(name, age, ...favoriteFood) {
  console.log(name + ',' + age);
  console.log(favoriteFood);
}
//지정된 매개변수 이외의 값을을 뒤에 배열
foodReport('홍길동', 20, '짜장면', '냉면');
foodReport('권세림', 20, '초밥');
