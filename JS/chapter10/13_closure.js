function outer() {
  var value = 1234;

  function inner() {
    console.log('value = ' + value);
  }
  //내부 함수에서 value값을 가지고 오기때문에 정상 작동
  inner();
}

outer();
