export default class Book {
    constructor(title, author, yearOfPublication) {
        this._title = title
        this._author = author
        this._yearOfPublication = yearOfPublication
    }

    get title(){
        return this._title
    }

    set title(value){
        if(typeof value !== "string"){
            console.error("Error: Title should be type of string")
            return
        }

        if(value.length < 1){
            console.error("Error: Incorrect title value! Title length should be at least 1 symbol.")
            return

        }

        this._title = value
    }

    get author(){
        return this._author
    }

    set author(value){
        if(typeof value !== "string"){
            console.error("Error: Name of author should be type of string")
            return
        }

        if(value.length < 2){
            console.error("Error:Incorrect value! The name of author length should be at least 2 symbol.")
            return
        }

        this._author = value
    }

    get yearOfPublication(){
        return this._yearOfPublication
    }

    set yearOfPublication(value){
        if(typeof value !== "number"){
            console.error("Error: Year of publication should be type of number.")
            return
        }

        if(value.length === 0){
            console.error("Error: Empty year of publication value!")
            return

        }

        if (value < 1800 || value > 2024) {
            console.error("Error: Incorrect year of publication.")
            return
        }

        this._yearOfPublication = value
    }

    printBookInfo(){
        console.log("-------------------------------------------------");
        console.log("Title the book : ", this._title);
        console.log("Author : ", this._author);
        console.log("Year of publication :", this._yearOfPublication);


    }

    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            console.error("Error: Invalid input or empty array.");
            return
        }

        let oldestBook = books[0];

        for (let i = 1; i < books.length; i++) {
            if (books[i].yearOfPublication < oldestBook.yearOfPublication) {
                oldestBook = books[i];
            }
        }

        return oldestBook;
    }

}
