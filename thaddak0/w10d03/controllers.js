angular
  .module('bookApp')
  .controller('BooksController', BooksController);

function BooksController (Book) {
  this.newBook = {}; //will hold user input for new book
  this.books = Book.query(); // returns all the books
  this.createBook = createBook;
  this.updateBook = updateBook;
  this.deleteBook = deleteBook;



  function updateBook(book) {
    Book.update({id: book._id}, book);
    book.editForm = false;
  };

  function createBook(){
    console.log("new book", this.newBook)
    Book.save(this.newBook);
    this.books.push(this.newBook);
    this.newBook = {};

    // TODO: clear the form!
    // TODO: display the new book in the list of books!
  };

  function deleteBook(book) {
    Book.remove({id:book._id});
    var bookIndex = this.books.indexOf(book);
    this.books.splice(bookIndex, 1);
  };

  console.log("Controller loaded.");
};
