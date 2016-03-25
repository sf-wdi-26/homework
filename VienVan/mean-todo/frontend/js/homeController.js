app.controller('HomeController', ['$scope', 'Todo', HomeController]);

app.service('Todo', function($resource) {
  return $resource('http://localhost:3000/api/todos/:id', {
    update: {
      method: 'PATCH' // this method issues a PUT request
    }
  });
});

// HomeController.$inject = ['$scope', 'Todo'];
function HomeController($scope, Todo) {
  console.log(Todo)
  $scope.todos = Todo.query();
  $scope.createTodo = createTodo;
  $scope.deleteTodo = deleteTodo;
  $scope.newTodo = {};

  function createTodo() {
    Todo.save($scope.newTodo);
    $scope.todos.push($scope.newTodo);
    $scope.newTodo = {};
  }

  function deleteTodo(todo) {
    Todo.remove({id:todo._id});
     var todoIndex = $scope.todos.indexOf(todo);
     $scope.todos.splice(todoIndex, 1);
  }
  function updateTodo(todo) {
    Todo.update({id: todo._id}, todo);
    todo.editForm = false;
  }
}
