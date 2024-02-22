import { BASE_URL } from './task4.1.js';
class UserController{
    constructor(baseUrl) {
        this._baseURL = baseUrl
    }

    async fetchUserById(id){
        const response = await fetch(`${this._baseURL}/users/${id}`)
        const body = await response.json()
        return body
    }
}

const userController = new UserController(BASE_URL);
userController.fetchUserById(1).then((values)=> console.log(values));