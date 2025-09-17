import React, { useEffect, useState } from 'react';
import { getExpenses, addExpense, deleteExpense } from "c:/Users/shrut/OneDrive/Desktop/Expense tracker/expense-tracker-frontend/src/Services/expenseService";
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from 'c:/Users/shrut/OneDrive/Desktop/Expense tracker/expense-tracker-frontend/src/components/EXpenseList.jsx';

const Home = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getExpenses().then(res => setExpenses(res.data));
  }, []);

  const handleAdd = async (expense) => {
    const res = await addExpense(expense);
    setExpenses([...expenses, res.data]);
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    setExpenses(expenses.filter(e => e._id !== id));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={handleAdd} />
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  );
};

export default Home;