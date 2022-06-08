import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import AddBudget from './components/AddBudget';
import BudgetList from './components/BudgetList';

function App() {
  return (
    <div>
      <Header />
      <section>
        <div className="left-container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
        </div>
        <div className="middle-container">
          <AddTransaction />
          <AddBudget />
        </div>
        <div className="right-container">
          <BudgetList />
        </div>
      </section>
    </div>
  );
}

export default App;
