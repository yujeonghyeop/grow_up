import React from "react";
import { useRef } from "react";

function Creategame() {
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
  return (
      <div>gwl</div>
    // <form>
    //   <div className="input_area">
    //     <label>Eng</label>
    //     <input type="text" placeholder="computer" ref={engRef} />
    //   </div>
    //   <div className="input_area">
    //     <label>Kor</label>
    //     <input type="text" placeholder="컴퓨터" ref={korRef} />
    //   </div>
    //   <div className="input_area">
    //     <label>Day</label>
    //     <select ref={dayRef}>
    //       {days.map((day) => (
    //         <option value={day.day} key={day.id}>
    //           {day.day}
    //         </option>
    //       ))}
    //     </select>
    //   </div>
    //   <button onClick={onSubmit}>저장</button>
    // </form>
  );
}

export default Creategame;
