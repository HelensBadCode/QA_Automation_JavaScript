async function fetchTodoAsc() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const body = await response.json();
    return body;
  } catch (e) {
    console.log(e);
  }
}
async function fetchUserAsc() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const body = await response.json();
    return body;
  } catch (e) {
    console.log(e);
  }
}

Promise.all([fetchTodoAsc(), fetchUserAsc()]).then((values) => console.log('Results by promise all :', values));

Promise.race([fetchTodoAsc(), fetchUserAsc()]).then((values) => console.log('Results by race:', values));
