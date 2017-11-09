angular.module('todoApp', [])
    .controller('TodoListController', function($filter) {
        var todoList = this;
        todoList.todos = [
            {text:'Some Item'},
            {text:'Another Item'}];

        todoList.addTodo = function() {
            todoList.todos.push({text:todoList.todoText});
            todoList.todoText = '';


        };
        todoList.update = function(todo){
            console.log('пост на сервер: обновить', todo.text)
        };
        todoList.destroy = function(todo){
            var idx = todoList.todos.indexOf(todo);
            console.log('пост на сервер: удалить', todo.name)
            todoList.todos.splice(idx,1);
        };
    });