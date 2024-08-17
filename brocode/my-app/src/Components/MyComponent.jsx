import React, { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("");
  const [payment, setPayment] = useState("");

  function handlePayment(e) {
    setPayment(e.target.value);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Name: {name}</p>
      <select value={payment} onChange={handlePayment}>
        <option value="upi">UPI</option>
        <option value="net banking">Net Banking</option>
        <option value="card">Card</option>
      </select>
      <p>Payment: {payment}</p>
    </div>
  );
}
