angular
  .module('bookApp')
  .controller('BooksController', BooksController);

function BooksController (Book) {
  this.newBook = {};
  this.books = Book.query(); // returns all the books
  this.createBook = createBook;
  this.updateBook = updateBook;
  this.deleteBook = deleteBook;

  // $http
  //   .get('https://super-crud.herokuapp.com/books')
  //   .then(function(res, err) {
  //     if (err) {
  //       console.log('error: ' + err);
  //     } else {
  //       $scope.books = res.data;
  //     }
  //   });

  function updateBook(book) {
    Book.update({id: book._id}, book);
    var bookIndex = this.books.indexOf(book);
    this.books[bookIndex] = book;
    book.displayEditForm = false;
  }

  function createBook(){
    Book.save(this.newBook);
    this.books.push(this.newBook);
  }

  function deleteBook(book) {
    Book.remove({id:book._id});
    var bookIndex = this.books.indexOf(book);
    this.books.splice(bookIndex, 1);
  }

  console.log("Controller loaded.");
}
