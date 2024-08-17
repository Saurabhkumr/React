import React, { useState } from "react";

export default function () {
  const [food, setFood] = useState(["apple", "banana"]);

  function handleAdd() {
    let value = document.getElementById("foodItem").value;
    document.getElementById("foodItem").value = "";
    setFood((f) => [...f, value]);
  }
  function handleRemove(index) {
    setFood(food.filter((food, i) => i != index));
  }

  return (
    <div>
      <h2>Food Item</h2>
      <ul>
        {food.map((food, index) => (
          <li key={index} onClick={() => handleRemove(index)}>
            {food}
          </li>
        ))}
      </ul>

      <input id="foodItem"></input>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
