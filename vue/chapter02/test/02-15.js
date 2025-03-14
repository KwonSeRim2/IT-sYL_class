let obj = { result: 0 };

obj.add = function (x, y) {
  //화살표 함수는 함수가 선언될 때 htis가 정의 된다
  //add함수 내에 있으므로 this는 그대로 obj가 된다.
  const inner = () => {
    this.result = x + y;
  };

  inner();
};

obj.add(3, 4);
// obj 객체는 변하지 않고 전역 객체가 변경된다
console.log(obj);
