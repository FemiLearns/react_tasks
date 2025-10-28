import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete, onEdit }) {
  if (!expenses.length) return <p>No expenses yet.</p>;
  return (
    <div>
      {expenses.map((e) => (
        <ExpenseItem key={e.id} expense={e} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}
export default ExpenseList;