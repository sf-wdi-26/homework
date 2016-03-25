angular
  .module('bookApp')
  .controller('BooksController', BooksController);

function BooksController (Book) {
  var self = this;
  this.newBook = {};
  this.books = Book.query(); // returns all the books
  this.createBook = createBook;
  this.updateBook = updateBook;
  this.deleteBook = deleteBook;

  function updateBook(book) {
    console.log(book._id);
    Book.update({id: book._id}, book);
    book.editForm = false;
  }

  function createBook(){
    console.log("here we are");
    Book.save(this.newBook, onSuccess, onError);
    // TODO: clear the form!
    // TODO: display the new book in the list of books!

    function onSuccess(new_book_with_id){
      self.newBook = {}; // clear new book object
      self.books.push(new_book_with_id);
    }

    function onError(){
      console.log("Something went wrong...");
    }
  };

  function deleteBook(book) {
    Book.remove({id:book._id});
    var bookIndex = this.books.indexOf(book);
    this.books.splice(bookIndex, 1);
  };

  console.log("Controller loaded.");
};
