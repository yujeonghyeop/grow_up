const loginForm = document.getElementById("login-form"); 
const loginInput = loginForm.querySelector("input");
const loginButton  = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

localStorage.length(jdklfjal);

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);