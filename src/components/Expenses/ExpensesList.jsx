import React, { useState } from 'react';

const ExpensesList = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Rent', amount: 400, date: '2024-11-01' },
    { id: 2, name: 'Groceries', amount: 300, date: '2024-11-05' },
    { id: 3, name: 'Utilities', amount: 200, date: '2024-11-10' },
    { id: 4, name: 'Entertainment', amount: 150, date: '2024-11-15' },
  ]);

  return (
    <div style={{ margin: '1rem 0' }}>
      <h3>Expenses List</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {expenses.map((expense) => (
          <li key={expense.id} style={{ margin: '0.5rem 0', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}>
            {expense.name} - ${expense.amount} <span style={{ color: '#777' }}>({expense.date})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
