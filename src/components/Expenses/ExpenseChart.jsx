import React from 'react';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const COLORS = ['#0088FE', '#FF8042']; // Credit: Blue, Debit: Orange

const Chart = ({transactions}) => {
//   const [transactions, setTransactions] = useState([
//     { id: 1, date: '2024-02-14', transactiontype: 'Credit', text: 'Salary', amount: 30000 },
//     { id: 2, date: '2024-02-15', transactiontype: 'Debit', text: 'Rent', amount: 10000 },
//     { id: 3, date: '2024-02-16', transactiontype: 'Credit', text: 'Freelance Work', amount: 5000 },
//     { id: 4, date: '2024-02-17', transactiontype: 'Debit', text: 'Groceries', amount: 2000 },
//   ]);

  // Aggregate data for the PieChart
  const aggregatedData = transactions.reduce(
    (acc, txn) => {
      if (txn.transactiontype === 'Credit') acc.Credit += txn.amount;
      if (txn.transactiontype === 'Debit') acc.Debit += txn.amount;
      return acc;
    },
    { Credit: 0, Debit: 0 }
  );

  const pieChartData = [
    { name: 'Credit', value: Math.abs(aggregatedData.Credit) },
    { name: 'Debit', value: Math.abs(aggregatedData.Debit) },
  ];

  // Convert all amounts to positive for graphing
  const barChartData = transactions.map((txn) => ({
    ...txn,
    amount: Math.abs(txn.amount),
  }));
  console.log(barChartData,"Bar")
  

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Transaction Dashboard</h3>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
        {/* PieChart */}
        <div>
          <h4>PieChart - Credit vs Debit</h4>
          <PieChart width={400} height={300}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* BarChart */}
        <div>
          <h4>BarChart - Transactions</h4>
          <BarChart
            width={500}
            height={300}
            data={barChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="text" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" barSize={30}>
              {transactions.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.transactiontype === "Debit" ? "#0088FE" : "#FFBB28"}
                />
              ))}
            </Bar>
            {/* <Bar dataKey="amount" fill="#8884d8" name="Amount" /> */}
            {/* {barChartData.map((entry, index) => (
                <Bar
                  key={`cell-${index}`}
                  fill={entry.transactiontype === "Debit" ? "#0088FE" : "#FFBB28"}
                />
              ))} */}
            {/* <Bar dataKey="amount" fill={COLORS[index % COLORS.length]} /> */}
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Chart;
