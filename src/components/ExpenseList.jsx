// ExpenseItem.jsx
import React from 'react';

const ExpenseItem = ({ expense, onDelete }) => (
  <li>
    {expense.title} - ₹{expense.amount} ({expense.category}) on {new Date(expense.date).toLocaleDateString()}
    <button onClick={() => onDelete(expense._id)}>Delete</button>
  </li>
);

export default ExpenseItem;