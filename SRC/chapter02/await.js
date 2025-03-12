async function init() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.jason();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
}
init();
