const p1 = { name: 'john', age: 20 };
//참조형 변수 경우 내부 필드는 변경가능
p1.age = 22;
console.log(p1);

//객체 자체를 변경 시 타입에러
//TypeError: Assignment to constant variable.
//p1 = { name: 'lee', age: 25 };
