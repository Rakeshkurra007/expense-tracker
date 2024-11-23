import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, Box, styled } from '@mui/material';

import Balance from '../components/Expenses/Balance';
import ExpenseCard from '../components/Expenses/ExpenseCard';
import Transactions from '../components/Expenses/Transactions';
import NewTransaction from '../components/Expenses/NewTransaction';
import Chart from '../components/Expenses/ExpenseChart';

const Header = styled(Typography)`
  margin: 10px 0;
  color: blue;
  font-size: 36px;
  text-transform: uppercase;
`;

const Component = styled(Box)`
  background: #FFF;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  width: 800px;
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
`;

function Dashboard() {
  const [transactions, setTransactions] = useState([
    // { id: 1, date:'2024-02-14', transactiontype:'Credit', text: 'Salary', amount: 30000},
  ]);
  const navigate = useNavigate(); // Initialize useNavigate

  const deleteTransaction = (id) => {
    console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    console.log(transactions);
  };

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <div align='center'>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
        <Header>EXPENSE TRACKER</Header>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#f00",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} /><br />
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
        </Box>
        <Box>
          <NewTransaction addTransaction={addTransaction}/>
        </Box>
      </Component>
      <Chart transactions={transactions} />
    </div>
  );
}

export default Dashboard;
