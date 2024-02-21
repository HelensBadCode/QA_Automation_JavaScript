const BASE_URL = 'https://jsonplaceholder.typicode.com'

// //функція написана на promise
function fetchTodoById(id){
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => res.json())
        .then((jsonBody) => console.log(jsonBody));
}
//
// fetchTodoById(1);
//----------------------------------------------------------------------------------------------------------------------
// //функція написана на async/ await
// async function fetchTodoByIdAsc(id){
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//     const body = await response.json();
//     console.log(body);
//     // return body
//
// }
// fetchTodoByIdAsc(2);

// async function fetchAllTodos1(){
//     fetch(`https://jsonplaceholder.typicode.com/posts`)
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// }
// async function fetchAllTodos2(){
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
//     const body = await response.json();
//     return body;
// }
// // fetchAllTodos1();
// console.log(fetchAllTodos2);
//
// fetchAllTodos2()
//     .then((v)=> v.map((todo)=> ({...todo, title: todo.title.toUpperCase()})))
//     .then((v)=> console.log(v))

function createPost(){
   return  fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}
 createPost().then((v) => console.log(v));

async function createPostAsync(requestBody){
    const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    const body = await response.json()
    return body
}
createPostAsync({
    title: 'Stanislav',
    body: 'Taran',
    userId: 1,
}).then((v)=> console.log(v))

Promise.all([
    fetchTodoById(1),
    fetchTodoById(2),
]).then((values)=> console.log(values))

Promise.race([
    fetchTodoById(1),
    fetchTodoById(2),
]).then((values)=> console.log(values))


// class TodoController {
//     constructor(baseUrl) {
//         this._baseURL = baseUrl
//     }
//
//     async fetchTodoById(id){
//         const response = await fetch(`${this._baseURL}/todos/${id}`)
//         const body = await response.json()
//         return body
//     }
// }
//
// const todoController = new TodoController(BASE_URL)
//
// todoController.fetchTodoById(1)