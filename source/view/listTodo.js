pl.view.listTodo = {
  setupUserInterface : function(){
    var tableBodyEl = document.querySelector("table#todos>tbody");
    var keys = [], key = "", row = {};

    Todo.loadAll();
    keys = Object.keys( Todo.instances);
    for(i = 0; i < keys.length ; i++){
      key = keys[i];
      row = tableBodyEl.insertRow();
      row.insertCell(-1).textContent = Todo.instances[key].tnumber;
      row.insertCell(-1).textContent = Todo.instances[key].task;

    }
  }
};
