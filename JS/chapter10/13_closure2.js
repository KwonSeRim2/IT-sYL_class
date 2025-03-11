function outer() {
  var value = 1234;
}
outer();

//함수 내부에 있는 value는 함수안에서 사라진다 - 에러
console.log('value = ' + value);
