import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#000000");
  function handleColor(e) {
    setColor(e.target.value);
  }
  return (
    <div>
      <h1>ColorPicker</h1>
      <div
        className="color-display"
        style={{
          backgroundColor: color,
          height: 100,
          width: 200,
          margin: 50,
          padding: 10,
          borderRadius: 5,
        }}
      ></div>
      <p>Selected color:{color}</p>
      <label>Select color</label>
      <input type="color" value={color} onChange={handleColor}></input>
    </div>
  );
}
