import React, { useEffect, useState } from "react";

function Table() {
  const [dorm, Setdorm] = useState([]);

  useEffect(async () => {
    const json = await (
      await fetch("http://localhost:3002/Teams")
    ).json();
    json.sort(function (a, b) {
      return a.point - b.point;
    });
    Setdorm(json.reverse());
  }, []);
  return (
    <div>
      {dorm.map((dorm) => (
        <h1 key={dorm.id}>
          {dorm.id} win : {dorm.win},point:{dorm.point}
        </h1>
      ))}
    </div>
  );
}

export default Table;
