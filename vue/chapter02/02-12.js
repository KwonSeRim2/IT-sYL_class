//원하는대로 this지정하기
let add = function (x, y) {
  this.result = x + y;
};

let obj = {};

//1. apply(): 함수를 즉시 실행하면서 this와 인자를 배열 형태로 전달
//add.appy(obj, [3,4])
//2. call(): 함수를 즉시 실행하면서 this와 인자를 전달
//add.call(obj, 3, 4);
//3. bind(): this를 바인딩 한 새 함수를 반환, 나중엥 실행 가능
add = add.bind(obj);

add(3, 4);
console.log(obj);
