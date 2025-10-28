import React from "react";

const CATEGORIES = ["All", "Food", "Transport", "Bills", "Entertainment", "Others"];

function CategoryFilter({ active, onChange }) {
  return (
    <div className="filter">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={active === cat ? "active" : ""}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;