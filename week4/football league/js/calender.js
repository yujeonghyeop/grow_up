
import team from './teaminf.js'


const a =document.querySelector("#form1")
const win = document.querySelectorAll("#form1 input")[0]
const lose = document.querySelectorAll("#form1 input")[2]
function onsubmit(event){
    event.preventDefault()
    for(let i=0;i<team.length;i++){
        if(team[i].name===win.value){
            team[i].win=team[i].win+1
        }
        else if(team[i].name===lose.value){
            team[i].lose=team[i].lose+1
        }
    }
    console.log(team)
}

window.onload=function(){
    a.addEventListener("submit",onsubmit)
}
export default team
>>>>>>> e4d763b12a94655c4321f1311edc7faa029127f8
