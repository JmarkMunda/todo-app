import './App.css';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import React, { useState } from 'react';


function App() {
 const [input, setInput] = useState("");
 const [displayTodo, setDisplayTodo] = useState([]);

  return (
    <div className='app-container'>
      <h1>Jm's Todo-list</h1>
      <div className='containers'>
        <Form 
          input={input} 
          setInput={setInput} 
          displayTodo={displayTodo} 
          setDisplayTodo={setDisplayTodo}
        />
        <TodoList displayTodo={displayTodo} setDisplayTodo={setDisplayTodo}/>
      </div>
    </div>
  );
}

export default App;
