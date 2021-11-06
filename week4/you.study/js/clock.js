const clock = document.querySelector("#clock");
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function sayhello() {
  const time = new Date(); //js에서 date라는 라이브러리를 제공해준다.
  const month = String(time.getMonth() + 1).padStart(2, "0");
  const date = String(time.getUTCDate()).padStart(2, "0");
  const hour = String(time.getHours()).padStart(2, "0"); //padstar를 사용하면 string의 길이를 정할 수 있고 string이 일정 길이가 안되면 특정 string으로 채우라고 할 수도 있다.
  const minute = String(time.getMinutes()).padStart(2, "0"); // 하지만 number뒤에 padStart는 들어갈 수 없기 때문에 number를 string으로 바꿔준 뒤 padStart를 붙여야 한다.
  const day = time.getDay();
  clock.innerText =
    month + "/" + date + "\u0009" + week[day % 7] + "\n" + hour + ":" + minute;
  // clock.innerText=`${hour}:${minute}:${second}` 위와 똑같다.
}
sayhello();
setInterval(sayhello, 1000); //5초후에 sayhello 함수를 계속 실행하도록 설정한다.
