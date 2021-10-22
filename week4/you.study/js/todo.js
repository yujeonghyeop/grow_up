const todoform = document.getElementById("todo-form")   //todo-form id를 가져옴
const todolist = document.getElementById("todo-list")   //todo-list id를 가져옴
const value = todoform.querySelector("input")   //value를 받기위해 가져온 todo-form을 이용해 todo-form안에있는 input query를 가져온다.
let dos = []  //Todo를 save하기 위해 array로 만든다, 중간에 dos에 값들이 추가될 것이기 때문에 const가 아닌 Let으로 지정해줘야 한다.

function savetodos(){
    localStorage.setItem("todos",JSON.stringify(dos))   //dos에 저장된 친구들을 localstorage에 넣어준다. dos를 꺼낼수 있어야 하기 때문에 위치를 알 수 있는 배열로 저장하여 넣는다.
}   // json.strigufy를 이용하면 array로 저장할 수 있다.

function painttodo(text){
    const li = document.createElement("li") //todo.js를 참고하는 html 파일에 li를 추가해 준다.
    li.id = text.id //object로 들어온 id를 생성해준 Element인 Li의 id로 정의해준다. 
    const span = document.createElement("span") //span도 추가해준다.  
    span.innerText = text.text   //span에 인자로 받은 text를 기록해준다. text인자가 object이므로 뒤에 .text를 붙여줘야 한다.
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
    value.value ='' 
    const todoobj={ //text와 id를 object로 정의해준다.
        text : inputvalue,
        id : Date.now(),
    }
    dos.push(todoobj)    //입력받은 inputvalue를 dos array에 푸시한다.
    painttodo(todoobj)  //object를 보내준다.
    savetodos()
}
function deletetodo(event){
    const li = event.target.parentElement   //click된 event가 어느 버튼의 event인지 명시하기 위해 event.target.parentElement로 해준다.
    dos=dos.filter((todo)=>todo.id !=parseInt(li.id))
    li.remove() //명시한 변수를 remove 해준다.
    savetodos()
}

todoform.addEventListener("submit",handeltodosubmit)

const savedtodos = localStorage.getItem("todos")    //localStorage에 저장된 값을 불러와 변수로 저장한다.

if (savedtodos!=null){   //localstorage에 있는것이 Null이 아닐 경우
    const parsedtodos = JSON.parse(savedtodos)   //string으로 저장되어 있는 savetodos를 json.parse를 하여 변수로 저장한다. 
    dos=parsedtodos //dos array가 초기화 되지 않도록 parsetodos를 저장해준다.
    parsedtodos.forEach(painttodo)  //foreach함수를 이용해서 parsedtodos에 잇는 모든 index들을 painttodo함수에 넣어준다. 
}