const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const class_hidden = "hidden"
function onsubmit(tomato){
    tomato.preventDefault()                 //브라우저의 디폴트 값을 방ㅣ
    const username= loginInput.value        //loginvalue로 들어오는 값을 username에 저장한다.
    loginForm.classList.add(class_hidden)   //loginForm의 역할이 끝났으므로 css의 hidden클래스를 추가하여 보이지 않게 한다.
    localStorage.setItem("username",username)//username을 localstorage에 저장해둔다.
    hellogreeting()
}
function hellogreeting(){
    greeting.innerText="Hello "+savedusername+"!"    //index에 있는 h1의 greeting을 요소로 잡은 다음 그친구에게 innertext를 더해준다.
    // == `hello ${username}`               백틱 `을 사용하여 9번 줄과 똑같은 코드를 출력할 수 있다.
    greeting.classList.remove(class_hidden) //숨겨져있던 h1이 출력되어야 하기 때문에 hidden class를 삭제시켜 준다.
}

loginForm.addEventListener("submit",onsubmit)   //event가 submit일때 onsubmit함수를 실행한다.

const savedusername = localStorage.getItem("username")  //localstorage의 username이라는 item을 savedusername이라는 변수에 저장한다.

if (savedusername===null){  //savedusername이 비었을때
    loginForm.classList.remove(class_hidden)    //loginform의 hidden클래스를 삭제하고
    loginForm.addEventListener("submit",onsubmit)   //다시 onsubmit함수를 실행시켜 username을 받는다.
}
else{   //savedusername이 차있을 경우
    hellogreeting() //hellogreeting함수를 실행시켜 반겨준다.
}