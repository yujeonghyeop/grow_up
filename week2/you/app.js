const login = document.querySelector("#login-form")
const input = login.querySelector("input")
const button = login.querySelector("button")

function btnclick(){
    if (input.value ===''){
        alert("input your name")
    }
    else{
        console.log("hello", input.value)
    }
}
button.addEventListener("click",btnclick)