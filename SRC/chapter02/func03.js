var getTriangle = (base, heght) => (base * heght) / 2;

var getCircle = (radius) => radius * radius * Math.PI;

//객체 리던시 한변더 () 감싼다, 함수 본체를 인식되기 때문에
var getobject = (x) => ({
  a: 5,
  b: 4,
});

console.log('삼각형의 면적: ' + getTriangle(5, 2));
console.log('원의 면적: ' + getCircle(5));
