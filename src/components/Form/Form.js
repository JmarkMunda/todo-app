import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Form.css';

const Form = ({ input ,setInput, displayTodo, setDisplayTodo, setStatus  }) => {

    const inputHandler = (e) =>{
        setInput(e.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault(); 
        setDisplayTodo([...displayTodo, { id: Math.random() * 100, text: input, completed: false }]);
        setInput("");
    }

    const statusTodo = (e) =>{
        setStatus(e.target.value);
    }

    return ( 
        <div className='form'>
            <div className='input-wrapper'>
                <input value={input} type='text' onChange={inputHandler}/>
                <FaSearch className='search-icon'/>
            </div>
            <button type='submit' onClick={submitHandler} className='add-button'>Add</button>
            <select onChange={statusTodo}>
                <option value='All'>All</option>
                <option value='Completed'>Completed</option>
                <option value='Pending'>Pending</option>
            </select>
        </div>
     );
}
 
export default Form;