function outer() {
  var value = 1234;

  function inner() {
    console.log('value = ' + value);
  }
  return inner;
}

var outin = outer();
outin();
