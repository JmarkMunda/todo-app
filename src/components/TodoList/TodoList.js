import React from 'react';
import './TodoList.css';
import Todos from './Todos/Todos';

const TodoList = ({ displayTodo, setDisplayTodo }) => {
    return ( 
        <div className='todolist'>
            {displayTodo.map(todo => (
                <Todos key={todo.id} todo={todo} displayTodo={displayTodo} setDisplayTodo={setDisplayTodo}/>
            ))}                  
        </div>
     );
}
 
export default TodoList;