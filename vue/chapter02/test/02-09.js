const test1 = function (a, b) {
  return a + b;
};

const test2 = (a, b) => {
  return a + b;
};

//화사표 no return
//구현부가 1줄일때만 가능
const test3 = (a, b) => a + b;

console.log(test1(3, 4));
console.log(test2(3, 4));
console.log(test3(3, 4));
