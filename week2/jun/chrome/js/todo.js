const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function paintToDo(newToDo){
    const list = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    list.appendChild(span);
    todoList.appendChild(list);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = todoInput.value; 
    todoInput.value = "";
    paintToDo(newToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit);
