const clock = document.querySelector("h2#clock ");

function getTime(){
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, "0");
    const min = String(time.getMinutes()).padStart(2, "0");
    const sec = String(time.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${min}:${sec}`;
}

getTime();
setInterval(getTime, 1000);