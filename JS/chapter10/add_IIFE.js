//IIFE , immediately - invoked function expression: 즉시 실행 함수

const a = 8;
function multiply() {
  console.log(a * 2);
}

(function () {
  console.loga(a * 2);
})();
