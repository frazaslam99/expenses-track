import React from 'react';
import { Header } from './Component/header';
import { Balance } from './Component/balance';
import { IncomeExpenses } from './Component/incomeexpenses';
import { TransactionList } from './Component/transactionlist';
import { AddTransaction } from './Component/addtransaction';
 import { GlobalProvider } from './Component/expensescontent';
 import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>

  
  );
}

export default App;
