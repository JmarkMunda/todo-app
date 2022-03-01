import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Form.css';

const Form = ({ input ,setInput, displayTodo, setDisplayTodo }) => {

    const inputHandler = (e) =>{
        setInput(e.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault(); 
        setDisplayTodo([...displayTodo, {id: Math.random() * 100, text: input, status: "pending"}]);
        setInput("");
    }

    return ( 
        <div className='form'>
            <div className='input-wrapper'>
                <input value={input} type='text' onChange={inputHandler}/>
                <FaSearch className='search-icon'/>
            </div>
            <button type='submit' onClick={submitHandler} className='add-button'>Add</button>
            <select>
                <option>All</option>
                <option>Completed</option>
                <option>Pending</option>
            </select>
        </div>
     );
}
 
export default Form;