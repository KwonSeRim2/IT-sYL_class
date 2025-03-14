let msg = 'GOBAL';
function outer() {
  let msg = 'OUTER';

  //호출 시 같은 불록안의 변수를 가져온다.
  console.log(msg);
  if (true) {
    let msg = 'BLOCK';
    console.log(msg);
  }
}
outer();
