import Book from './Book.js';

export default class EBook extends Book {
  constructor(title, author, yearOfPublication, fileFormat) {
    super(title, author, yearOfPublication);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== 'string') {
      console.error('Error: File format should be type of string');
      return;
    }

    if (value.length === 0) {
      console.error('Error: Empty file format value!');
      return;
    }

    if (value.length < 3) {
      console.error('Error: File format length should be at least 3 symbol');
      return;
    }

    this._fileFormat = value;
  }

  printBookInfo() {
    super.printBookInfo();
    console.log('Format the book : ', this._fileFormat);
  }

  static fromBookAndFileFormat(book, format) {
    return new EBook(book.title, book.author, book.yearOfPublication, format);
  }
}
