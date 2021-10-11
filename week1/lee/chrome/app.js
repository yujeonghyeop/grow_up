const loginForm = document.getElementById("login-form"); 
const loginInput = loginForm.querySelector("input");
const loginButton  = loginForm.querySelector("button");

function handleLogInBtnClicked(){
     const username = loginInput.value;
     if(username === ""){
         alert("Please write your name!");
     } else if (username.length > 15){
        alert("Your name is too long!");
     } else {
         console.log(username);
     }

}

loginButton.addEventListener("click", handleLogInBtnClicked);