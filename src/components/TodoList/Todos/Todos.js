import React from 'react';
import './Todos.css';
import {FaCheckSquare,FaTrash} from 'react-icons/fa';

const Todos = ({ todo, displayTodo, setDisplayTodo }) => {

    const deleteTodo = () =>{
        setDisplayTodo(displayTodo.filter(element => element.id !== todo.id));
    }

    const markTodo = () =>{
        setDisplayTodo(displayTodo.map(item =>{
          if(item.id === todo.id){
            return {
                ...item, completed: !item.completed
            }
          }
          return item;
        }));
    }

    return ( 
        <div className={`todos-container ${todo.completed ? 'completed' : ''}`}>
            <p>{todo.text}</p>
            <div className='action-container'>
                <button className='mark-button' onClick={markTodo}><FaCheckSquare className='mark-icon'/></button>
                <button className='delete-button' onClick={deleteTodo}><FaTrash className='delete-icon' /></button>
            </div>
        </div>
     );
}
 
export default Todos;