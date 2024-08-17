import React, { useState } from "react";

const ArrayObject = () => {
  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [model, setModel] = useState();
  const [car, setCar] = useState([]);

  function changeName(e) {
    setName(e.target.value);
  }
  function changeYear(e) {
    setYear(e.target.value);
  }
  function chageModel(e) {
    setModel(e.target.value);
  }

  function addCar(e) {
    const value = {
      y: year,
      n: name,
      m: model,
    };
    setCar((c) => [...c, value]);
    setModel("");
    setName("");
    setYear("");
  }

  function remove(index) {
    setCar((c) => car.filter((_, i) => i != index));
  }

  return (
    <div>
      <h2>Add your car</h2>
      <input
        type="number"
        placeholder="year"
        value={year}
        onChange={changeYear}
      />
      <br />
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={changeName}
      />
      <br />
      <input
        type="text"
        placeholder="model"
        value={model}
        onChange={chageModel}
      />
      <br />
      <button onClick={addCar}>Add</button>
      <h2>Your car</h2>
      <ul>
        {car.map((car, index) => (
          <li key={index} onClick={() => remove(index)}>
            {car.y} {car.n} {car.m}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayObject;
