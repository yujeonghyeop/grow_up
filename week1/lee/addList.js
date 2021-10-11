const inputBox = document.getElementById("inputBox");
const addButton = document.getElementById("addButton");
const toDoList = document.getElementById("list");

addButton.addEventListener("click", function(){
    const list = document.createElement("li");
    toDolist.appendChild(list);

    inputBox.value = " ";

    list.addEventListener("click", function(){
        list.style.textDecoration = "line-through";
    })

    list.addEventListener("dblclick", function(){
        toDolist.removeChild(list);
    })
});