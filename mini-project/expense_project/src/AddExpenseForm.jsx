import React, { useState } from "react";

const CATEGORIES = ["Food", "Transport", "Bills", "Entertainment", "Others"];

function AddExpenseForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description || amount <= 0) return alert("Please enter valid data");
    onAdd({ description, amount: Number(amount), category, date: new Date().toISOString().slice(0, 10) });
    setDescription("");
    setAmount("");
    setCategory("Food");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {CATEGORIES.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
export default AddExpenseForm;
