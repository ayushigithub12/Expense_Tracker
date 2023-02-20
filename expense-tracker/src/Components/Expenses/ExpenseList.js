import React from 'react';
import './ExpenseList.css';
import ExpensesItem from './ExpensesItem';
const ExpenseList = (props) => {
    if (props.item.length === 0) {
        return <h2 className='expenses-list__fallback'>Found No Records</h2>
    }

    return (
        <ul className='expenses-list'>
            {
                props.item.map((expense) => (
                    <ExpensesItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </ul>
    );
}
export default ExpenseList;