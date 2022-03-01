import React from 'react';
import './Todos.css';
import {FaCheckSquare,FaTrash} from 'react-icons/fa';

const Todos = ({ todo, displayTodo, setDisplayTodo }) => {

    const deleteTodo = () =>{
        setDisplayTodo(displayTodo.filter(element => element.id !== todo.id));
    }

    return ( 
        <div className='todos-container'>
            <p>{todo.text}</p>
            <div className='action-container'>
                <button className='mark-button'><FaCheckSquare className='mark-icon'/></button>
                <button className='delete-button'><FaTrash className='delete-icon' onClick={deleteTodo}/></button>
            </div>
        </div>
     );
}
 
export default Todos;