import React from "react";
import { useNavigate, } from "react-router-dom"

function Dataformat() {
  const dorm = ["C101", "C102", "C103", "C104"];
  const navigate = useNavigate();
  function onclick() {
    function format() {
      for (let i = 0; i < dorm.length; i++) {
        fetch(`http://localhost:3002/Teams/${dorm[i]}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            win: 0,
            lose: 0,
            draw: 0,
            point: 0,
          }),
        });
      }
    }
    if (window.confirm("데이터를 포맷하시겠습니까?")){
        format()
        alert("format이 완료되었습니다.")
        navigate(-2)
    }
  }
  return (
    <div>
      <button onClick={onclick}>Data Format</button>
    </div>
  );
}

export default Dataformat;
