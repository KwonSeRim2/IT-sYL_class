fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.jason())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
