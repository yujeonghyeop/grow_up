const todoform = document.getElementById("todo-form")   //todo-form id를 가져옴
const todolist = document.getElementById("todo-list")   //todo-list id를 가져옴
const value = todoform.querySelector("input")   //value를 받기위해 가져온 todo-form을 이용해 todo-form안에있는 input query를 가져온다.

function painttodo(text){
    const li = document.createElement("li") //todo.js를 참고하는 html 파일에 li를 추가해 준다.
    const span = document.createElement("span") //span도 추가해준다.  
    span.innerText = text   //span에 인자로 받은 text를 기록해준다.
    const button = document.createElement("button") //todolist를 지워줄 button을 생성한다.
    button.innerText = 'X'
    button.addEventListener("click",deletetodo)
    li.appendChild(span)    //li 밑으로 span이 들어가게 해준다. 
    li.appendChild(button)  //li 밑으로 button이 들어가게 하되, span밑에 오게 해야한다. 
    todolist.appendChild(li)    //출력을 위해 li를 todolist안으로 들어가게 해준다.
}

function handeltodosubmit(event){
    event.preventDefault()  //새로고침 되는 것을 막아주고
    const inputvalue = value.value  //input에 value로 들어오는 값을 inputvalue에 저장한다.
    value.value ='' //
    painttodo(inputvalue)
}
function deletetodo(event){
    const li = event.target.parentElement   //click된 event가 어느 버튼의 event인지 명시하기 위해 event.target.parentElement로 해준다.
    li.remove() //명시한 변수를 remove 해준다.

}
todoform.addEventListener("submit",handeltodosubmit)