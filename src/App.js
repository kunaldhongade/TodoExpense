import React, { useState, useEffect } from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses.js';

let DUMMY_EXPENSE = [];

const App = () => {


  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  // useEffect(() => {
  //   fetch('https://reqres.in/api/users?page=2').then(
  //     response => {
  //       return response.json();
  //     }
  //   ).then(
  //     data => {
  //       console.log(data);
  //       setExpenses(data);
  //     }
  //   );
  // }, []);


  const addExpenseHandler = (expense) => {
    const updatedExpenses = [expense, ...expenses];
    setExpenses(updatedExpenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;