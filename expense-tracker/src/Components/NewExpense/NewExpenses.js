import React, { useState } from 'react';
import FormExpense from './FormExpense'
import './NewExpenses.css';
const NewExpenses = (props) => {
    const[edited,setEdited] = useState(false);
     
    const onSaveSubmitFormHandler=(dataFormExpense)=>{
     const expenseData={
         ...dataFormExpense,
         id:Math.random().toString()
     };
     props.onExpenseData(expenseData);
     setEdited(false);
    };
    const setEditedHandler=()=>{
        setEdited(true);    
        }
    const stopEditingHandler=()=>{
        setEdited(false);
    }  
    return (
        <div className='new-expense'>
            {!edited && <button onClick={setEditedHandler}>Add New Item</button> }
           {edited && <FormExpense onSaveSubmitForm={onSaveSubmitFormHandler} onCancel={stopEditingHandler}/> }
        </div>
    );
}
export default NewExpenses;