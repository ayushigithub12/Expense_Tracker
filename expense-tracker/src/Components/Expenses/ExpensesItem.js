import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpensesItem.css';
const ExpensesItem = (props) => {
 const[title,setTitle] = useState(props.title);
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>Rs. {props.amount}</div>
                </div>
            </Card>
        </li>
    );
}
export default ExpensesItem;