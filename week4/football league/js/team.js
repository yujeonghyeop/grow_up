let team=[
    {name:"C101",play:0,win:1,draw:1,lose:0,gf:0,ga:0,gd:0,point:0},
    {name:"C102",play:0,win:2,draw:2,lose:0,gf:0,ga:0,gd:0,point:0},
    {name:"C103",play:0,win:1,draw:3,lose:0,gf:0,ga:0,gd:0,point:0},
    {name:"C104",play:0,win:2,draw:0,lose:2,gf:0,ga:0,gd:0,point:0}
]
export default team

let table=[]
function pointcal(){
    for (let i=0; i<team.length; i++){
        team[i].play = team[i].win+team[i].draw+team[i].lose
        team[i].point = team[i].win*3+team[i].draw*1
        team[i].gd = team[i].gf-team[i].ga
    }
}
pointcal()

function tableprt(){
    for (let i=0;i<team.length;i++){
        const rank = document.getElementById(i)
        const td = document.createElement("td")
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        const td4 = document.createElement("td")
        const td5 = document.createElement("td")
        const td6 = document.createElement("td")
        const td7 = document.createElement("td")
        const td8 = document.createElement("td")
        td.innerText=team[i].name
        td1.innerText=team[i].play
        td2.innerText=team[i].win
        td3.innerText=team[i].draw
        td4.innerText=team[i].lose
        td5.innerText=team[i].gf
        td6.innerText=team[i].ga
        td7.innerText=team[i].gd
        td8.innerText=team[i].point
        rank.appendChild(td)
        rank.appendChild(td1)
        rank.appendChild(td2)
        rank.appendChild(td3)
        rank.appendChild(td4)
        rank.appendChild(td5)
        rank.appendChild(td6)
        rank.appendChild(td7)
        rank.appendChild(td8)
    }
}
team =team.sort(function(a, b) {
    return a.point - b.point;
  });
team=team.reverse()
tableprt()
