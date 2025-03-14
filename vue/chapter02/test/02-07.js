let arr = [10, 20, 30, 40];
//네개중에 3개만 구조 분해가능
let [a1, a2, a3] = arr;
console.log(a1, a2, a3);

let p1 = { name: '홍길동', age: 20, gender: 'M' };
let { name: n, age: a, gender } = p1; //뒤에 원하는 이름으로 변경가능
console.log(n, a, gender); //키값에 접근하면 value값 나온다.
