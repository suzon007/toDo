function Todo(slots){
  this.tnumber = slots.tnumber;
  this.task = slots.task;
}
Todo.instances = {};
Todo.convertRow2Obj = function (todoRow){
  var todo = new Todo(todoRow);
  return todo;
}
//LOAD ALL TO DO LISTS

Todo.loadAll = function(){

  var key = "", keys = [],
  todoString = "", todos = {};

  try {
    if(localStorage["todos"]){
      todoString = localStorage["todos"];
    }
  } catch (e) {
    alert("Error when reading from Local Storage\n" + e);
  }
  if (todoString) {
    todos = JSON.parse( todoString );
    keys = Object.keys( todos );
    console.log( keys.length + " todos loaded!" );
    for ( i = 0; i < keys.length; i++) {
      key = keys[i]
      Todo.instances[key] = Todo.convertRow2Obj( todos[key]);
    }
  }
};
