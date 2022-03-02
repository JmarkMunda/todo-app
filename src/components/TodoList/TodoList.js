import React from 'react';
import './TodoList.css';
import Todos from './Todos/Todos';

const TodoList = ({ displayTodo, setDisplayTodo, filterTodo }) => {
    return ( 
        <div className='todolist'>
            {filterTodo.map(todo => (
                <Todos key={todo.id} todo={todo} displayTodo={displayTodo} setDisplayTodo={setDisplayTodo}/>
            ))}                  
        </div>
     );
}
 
export default TodoList;