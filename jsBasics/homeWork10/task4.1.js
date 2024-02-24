export const BASE_URL = 'https://jsonplaceholder.typicode.com';
class TodoController {
  constructor(baseUrl) {
    this._baseURL = baseUrl;
  }

  async fetchTodoById(id) {
    const response = await fetch(`${this._baseURL}/todos/${id}`);
    const body = await response.json();
    return body;
  }
}

const todoController = new TodoController(BASE_URL);
todoController.fetchTodoById(1).then((values) => console.log(values));
