import React from 'react';



const ToDoList = ({ todos, removeTodo }) => {
    return (
        <div className="todo-list">
            <h2>Todo List</h2>
            <ul>
                {todos?.map((todo, index) => (
                    <li key={index}>
                        <span>{todo.text}</span>
                        <button onClick={() => removeTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;