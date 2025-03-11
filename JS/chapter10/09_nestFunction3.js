function outer() {
  var outvalue = 5678;

  function inner() {
    var invalue = 1234;
    console.log('outvalue = ' + outvalue);
  }

  inner();
  console.outer('invaue = ' + invalue);
}
