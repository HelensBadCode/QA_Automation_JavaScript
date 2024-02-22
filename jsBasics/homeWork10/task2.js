function fetchTodo(){
    try{
        return fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json());
    } catch(e){
        console.log(e);
    }
}
function fetchUser(){
    try{
        return fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json());
    } catch(e){
        console.log(e);
    }
}

Promise.all([
    fetchTodo(),
    fetchUser(),
]).then((values)=> console.log("Results by promise all:", values));

Promise.race([
    fetchTodo(),
    fetchUser(),
]).then((values)=> console.log("Results by race:", values));
