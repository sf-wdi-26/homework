angular
  .module('bookApp')
  .controller('BooksController', BooksController);

function BooksController (Book, $scope, $http) {
  this.newBook = {};
  this.books = Book.query();
  // returns all the books
  this.createBook = createBook;
  this.updateBook = updateBook;
  this.deleteBook = deleteBook;

  function updateBook(book) {
    Book.update({id: book._id}, book);
    book.displayEditForm = false;
  }

  function createBook(){
    Book.save(this.newBook);
    this.books.push(this.newBook);

   
    // TODO: clear the form!
    // TODO: display the new book in the list of books!
  }

  function deleteBook(book) {
    Book.remove({id:book._id});
    var bookIndex = this.books.indexOf(book);
    this.books.splice(bookIndex, 1);
  }

    // $http
    // .get('https://super-crud.herokuapp.com/books')
    // .then(function(res) {
    //     //success method
    //     console.log(res.data);
    //     $scope.books = res.data;
    // });

  console.log("Controller loaded.");
}
