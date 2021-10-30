
import team from './teaminf.js'
<<<<<<< HEAD
console.log(team)
=======


>>>>>>> 9f0b63d1c29d4905e609e8283e4b81dfa6fd8b2a
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
<<<<<<< HEAD


a.addEventListener("submit",onsubmit)
ㅌ

export default team
=======
a.addEventListener("submit",onsubmit)
export default team
>>>>>>> 9f0b63d1c29d4905e609e8283e4b81dfa6fd8b2a
