import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState('');
  const [newTodo, setNewTodo] = useState('');

  const getTodos = () => {
    let todos = [];
  
    for (let i = 4; i <= localStorage.length; i++) {
      let todo = JSON.parse(localStorage.getItem(i));
      todos.push(todo);
    }
  
    return todos;
  };

  
  const onNewTodoChanged = e => setNewTodo(e.target.value);
  
  const onAddToListClicked = () => {
    if (newTodo) {
      localStorage.setItem(
        (localStorage.length + 1).toString(), 
        JSON.stringify({
          todo: newTodo,
          done: false
        })
        );
        setNewTodo('');
        return true;
      } else {
        return false;
      }
    };
    
  useEffect(() => {
    let todos = getTodos();
    setTodos(todos)
  }, [])

  return (
    <div>
      <header>
        <h1>My To Do List</h1>
        <input value={newTodo} onChange={onNewTodoChanged} />
        <button onClick={onAddToListClicked}>Add To List</button>
      </header>
      <main>
        <ul>
          {todos.map((t, i) => 
            <li key={i}>{t.todo} ... {t.done.toString()}</li>
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;
