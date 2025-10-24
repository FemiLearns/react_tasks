import React, { useState } from "react";


function TodoInput({ onAdd }) {
    const [text, setText] = useState("");

    const submit = () => {
        const value = text.trim();
        if (!value) return;
        if (typeof onAdd === "function") onAdd(value);
        setText("");
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter") submit();
    };

    return (
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input
                id="todo-input"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Add a new task..."
                aria-label="New todo"
                style={{ flex: 1, padding: "8px 10px" }}
            />
            <button type="button" onClick={() => submit()} style={{ padding: "8px 12px" }}>
                Add
            </button>
        </div>
    );
}
export default TodoInput