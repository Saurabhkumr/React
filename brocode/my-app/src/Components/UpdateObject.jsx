import React, { useState } from "react";

export default function () {
  const [car, setCar] = useState({
    year: 2024,
    company: "toyota",
    model: "xyz",
  });

  function handleYear(e) {
    setCar({ ...car, year: e.target.value });
  }
  function handleCompany(e) {
    setCar({ ...car, company: e.target.value });
  }
  function handleModel(e) {
    setCar({ ...car, model: e.target.value });
  }

  return (
    <div>
      <h2>Car picker</h2>
      Year :{" "}
      <input value={car.year} type="number" onChange={handleYear}></input>
      <br></br>
      Company :{" "}
      <input value={car.company} type="text" onChange={handleCompany}></input>
      <br></br>
      Model :{" "}
      <input value={car.model} type="text" onChange={handleModel}></input>
      <br></br>
      <p>
        Car is : {car.year}-{car.company}-{car.model}
      </p>
    </div>
  );
}
