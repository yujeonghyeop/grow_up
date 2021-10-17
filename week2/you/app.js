const a = document.querySelector("h1"); 

function clickhandle(){
    const clickclass="clicked"
    a.classList.toggle(clickclass)
}
a.addEventListener("click",clickhandle)