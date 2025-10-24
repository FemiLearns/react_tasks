import TodoFilter from "./TodoFilter";
import TodoInput from "./TodoInput";
import {useState} from "react"; 


function TodoList() {
  const [todos, setTodos] = useState(['Learn React', 'Build Projects']);
  
  function addTodo() {
    setTodos([...todos, 'New Todo']);
  }
  
  function removeTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }
  
  function filterTodo(){
    setTodos([...todos, 'TodoFilter'])
  }

  return (
    <div>

      <TodoInput onAdd={addTodo} />
      <TodoList todos= {todos} removeTodo={removeTodo}/>
      <TodoFilter todos ={TodoFilter} filterTodo={filterTodo}/>
      
    </div>
  );
}
export default TodoList;