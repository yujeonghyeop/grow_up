import React, { useEffect, useState } from "react";

function Table() {
  const [dorm, Setdorm] = useState([]);

  useEffect(() => {
    async function settable() {
      const json = await fetch("http://localhost:3002/Teams");
      const data = await json.json();
      data.sort(function (a, b) {
        return a.point - b.point;
      });
      Setdorm(data.reverse());
    }
    settable();
  }, []);
  return (
    <div>
      {dorm.map((dorm) => (
        <h1 key={dorm.id}>
          {dorm.id} win : {dorm.win},lose : {dorm.lose},draw:{dorm.draw}, point:
          {dorm.point}
        </h1>
      ))}
    </div>
  );
}

export default Table;
