import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const book2 = new Book('Pride and Prejudice', 'Jane Austen', 1813);
const book3 = new Book('The Catcher in the Rye', 'J.D. Salinger', 1951);

book1.printBookInfo();
book2.printBookInfo();
book3.printBookInfo();

// //positive tests
// book1.title = "Test set new title for a book!";
// console.log(`The new title :${book1.title}`);
// book1.author = "Test set new author for a book!";
// console.log(`The new author :${book1.author}`);
// book1.yearOfPublication = 1999;
// console.log(`The new year of publication :${book1.yearOfPublication}`);

// //negative tests
// console.log(`Test: empty value:`);
// book1.title = "";
// book1.yearOfPublication = 0;
// console.log("-------------------------------------------------");
// console.log(`Test: incorrect value:`);
// book1.author = 888;
// book1.title = true;
// book1.title = null;
// book1.yearOfPublication = "test";
// book1.yearOfPublication = NaN;
// book1.yearOfPublication = 1222;

const format1 = new EBook('The Lord of the Rings', 'J.R.R. Tolkien', 1955, 'EPUB');
const format2 = new EBook('Moby-Dick', 'Herman Melville', 1851, 'PDF');

format1.printBookInfo();
format2.printBookInfo();

// //positive tests
// format1.fileFormat = "DOC";
// console.log(`The new file format :${format1.fileFormat}`);

// //negative tests
// console.log(`Test: empty value:`);
// format1.fileFormat = "";
// console.log("-------------------------------------------------");
// console.log(`Test: incorrect value:`);
// format1.fileFormat = 888;
// format1.fileFormat = true;
// format1.fileFormat = "AT";

const books = [
  new Book('To Kill a Mockingbird', 'Harper Lee', 1960),
  new Book('1984', 'George Orwell', 1949),
  new EBook('The Lord of the Rings', 'J.R.R. Tolkien', 1955, 'EPUB'),
  new EBook('Moby-Dick', 'Herman Melville', 1841, 'PDF'),
];

const oldestBook = Book.findOldestBook(books);
console.log('-------------------------------------------------');
console.log('Oldest Book by loop:');
oldestBook.printBookInfo();

const oldestBookByReduce = Book.findOldestBookByReduce(books);
console.log('-------------------------------------------------');
console.log('Oldest Book by reduce:');
oldestBook.printBookInfo();

const oldestBookBySort = Book.findOldestBookBySort(books);
console.log('-------------------------------------------------');
console.log('Oldest Book by sort:');
oldestBook.printBookInfo();

// console.log("-------------------------------------------------");
// const book4 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling",1997);
// const test = EBook.fromBookAndFileFormat(book4, "MBP");
// console.log(test);
