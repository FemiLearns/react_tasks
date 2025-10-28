import React, { useState, useMemo, useEffect } from "react";
import Header from "./Header";
import AddExpenseForm from "./AddExpenseForm";
import CategoryFilter from "./CategoryFilter";
import ExpenseStats from "./ExpenseStats";
import ExpenseList from "./ExpenseList";
import "./index.css";

const SAMPLE_EXPENSES = [
  { id: 1, description: "Lunch at Mama Put", amount: 1500, category: "Food", date: "2025-01-15" },
  { id: 2, description: "Uber to office", amount: 800, category: "Transport", date: "2025-01-16" },
  { id: 3, description: "Electricity bill", amount: 5000, category: "Bills", date: "2025-01-10" },
];

function ExpenseTracker() {
  const [expenses, setExpenses] = useState(SAMPLE_EXPENSES);
  const [filter, setFilter] = useState("All");

  function addExpense(newExpense) {
    const next = { id: Date.now(), ...newExpense };
    setExpenses([next, ...expenses]);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((x) => x.id !== id));
  }

  function editExpense(id, updated) {
    setExpenses(expenses.map((x) => (x.id === id ? updated : x)));
  }

  const visible = useMemo(() => {
    if (filter === "All") return expenses;
    return expenses.filter((e) => e.category === filter);
  }, [expenses, filter]);

  return (
    <div className="container">
      <Header />
      <AddExpenseForm onAdd={addExpense} />
      <CategoryFilter active={filter} onChange={setFilter} />
      <ExpenseStats expenses={visible} />
      <ExpenseList expenses={visible} onDelete={deleteExpense} onEdit={editExpense} />
    </div>
  );
}
export default ExpenseTracker;
