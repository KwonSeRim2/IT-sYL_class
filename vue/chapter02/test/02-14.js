let obj = { result: 0 };

obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
  }
  //bind를 통해서 this값을 지정
  //add의 this를 inner의 this에 지정
  inner = inner.bind(this);
  inner();
};

obj.add(3, 4);
// obj 객체는 변하지 않고 전역 객체가 변경된다
console.log(obj);
