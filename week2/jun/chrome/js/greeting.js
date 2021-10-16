const loginForm = document.getElementById("login-form"); 
const loginInput = loginForm.querySelector("input");
const loginButton  = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if(savedUsername === null){
    // show up the form
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show up the greeting
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove("hidden");
} 