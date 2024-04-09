import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import React from "react";
import "./App.css";

function App() {
  let food = ["dal", "chawal", "roti", "sabji"];
  return (
    <>
      <div>Food Item</div>
      <ErrorMsg items={food}></ErrorMsg>
      <FoodItems items={food}></FoodItems>
    </>
  );
}

export default App;
