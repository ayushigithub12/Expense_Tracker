import React,{ useState ,Fragment } from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpenses from './Components/NewExpense/NewExpenses';
const App=()=>{  
  const DUMMY_DATA = [
    {
      id:'e1',
      title: 'Home Furniture',
      amount: 342.23,
      date: new Date(2021,2, 28)
    },
    {
      id:'e2',
      title: 'Groceries',
      amount: 236.23,
      date: new Date(2020,3, 12)
    },
    {
      id:'e3',
      title: 'Television',
      amount: 142.23,
      date: new Date(2019, 6, 28)
    },
    {
      id:'e4',
      title: 'Car',
      amount: 142.23,
      date: new Date(2020, 6, 28)
    }
  ]; 
    const [expenses,setExpenses]= useState(DUMMY_DATA);
    const addExpenseData = (expense)=>{
    setExpenses((prevExpense)=>{
      return [...prevExpense, expense];
    });
    console.log(expense);
    };
  
return (
    <Fragment>
   <NewExpenses onExpenseData={addExpenseData}/>
    <Expenses item={expenses}/>
    </Fragment>
  );
  }
export default App;
