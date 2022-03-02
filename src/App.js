import './App.css';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import React, { useState, useEffect } from 'react';


function App() {
 const [input, setInput] = useState("");
 const [displayTodo, setDisplayTodo] = useState([]);
 const [status, setStatus] = useState('All');
 const [filterTodo, setFilterTodo] = useState([]);

 useEffect(()=>{
  getLocalStorage();
 }, [])

 useEffect(()=>{
    filterItems();
    saveLocalStorage();
 }, [displayTodo, status])

 const filterItems = () =>{
   switch(status){
    case 'Completed':
      setFilterTodo(displayTodo.filter(todo => todo.completed));
      break;
    case 'Pending':
      setFilterTodo(displayTodo.filter(todo => !todo.completed));
      break;
    default:
      setFilterTodo(displayTodo);
      break;
   }
 }

 const saveLocalStorage = () =>{
    if(localStorage.getItem("displayTodo") === null){
      localStorage.setItem("displayTodo", JSON.stringify([]));
    }else{
      localStorage.setItem("displayTodo", JSON.stringify(displayTodo));
    }
 }

 const getLocalStorage = () =>{
  let localDisplayTodo = JSON.parse(localStorage.getItem("displayTodo", JSON.stringify(displayTodo)));
  setDisplayTodo(localDisplayTodo);
 }

  return (
    <div className='app-container'>
      <h1>Jm's Todo-list</h1>
      <div className='containers'>
        <Form 
          input={input} 
          setInput={setInput} 
          displayTodo={displayTodo} 
          setDisplayTodo={setDisplayTodo}
          setStatus={setStatus}
        />
        <TodoList displayTodo={displayTodo} setDisplayTodo={setDisplayTodo} filterTodo={filterTodo}/>
      </div>
    </div>
  );
}

export default App;
