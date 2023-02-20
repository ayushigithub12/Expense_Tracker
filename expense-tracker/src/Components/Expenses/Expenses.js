import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ChartFiller from './ChartFiller';
import './Expenses.css';
import ExpenseFilter from '../ExpenseFiller/ExpenseFilter';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = props => {
        setFilteredYear(props);
    }
    const filterYearHandler = props.item.filter((year) => {
        return year.date.getFullYear().toString() === filteredYear;
    });
    return (
        <React.Fragment>
            <Card className="expenses">
                <ExpenseFilter filter={filteredYear} onFilterClick={filterChangeHandler} />
                <ChartFiller expenses={filterYearHandler}/>
            <ExpenseList item={filterYearHandler}/>
            </Card>
        </React.Fragment>
    );
}
export default Expenses;