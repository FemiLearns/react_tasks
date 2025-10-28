import React, { useState } from "react";

function ExpenseItem({ expense, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [desc, setDesc] = useState(expense.description);
  const [amt, setAmt] = useState(expense.amount);

  function save() {
    onEdit(expense.id, { ...expense, description: desc, amount: Number(amt) });
    setIsEditing(false);
  }

  return (
    <div className="item">
      {isEditing ? (
        <>
          <input value={desc} onChange={(e) => setDesc(e.target.value)} />
          <input type="number" value={amt} onChange={(e) => setAmt(e.target.value)} />
          <button onClick={save}>Save</button>
        </>
      ) : (
        <>
          <span>{expense.description}</span>
          <span>₦{expense.amount}</span>
          <span>{expense.category}</span>
          <span>{expense.date}</span>
        </>
      )}
      <button onClick={() => onDelete(expense.id)}>Delete</button>
      {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
    </div>
  );
}
export default ExpenseItem;