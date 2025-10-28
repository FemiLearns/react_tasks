import React from "react";

function ExpenseStats({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const highest = expenses.length ? Math.max(...expenses.map((e) => e.amount)) : 0;

  return (
    <div className="stats">
      <p>Total: ₦{total}</p>
      <p>Count: {expenses.length}</p>
      <p>Highest: ₦{highest}</p>
    </div>
  );
}
export default ExpenseStats;