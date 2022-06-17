import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import AddBudget from "./components/AddBudget";
import BudgetList from "./components/BudgetList";
import { GlobalProvider } from "./context/GlobalState";
import BudgetModal from "./components/BudgetModal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [budget, setBudget] = useState("");
  // const [budgetId, setBudgetId] = useState("");

  return (
    <GlobalProvider>
      {openModal && (
        <BudgetModal
          closeModal={setOpenModal}
          // budgetTitle={budgetTitle}
          // budgetId={budgetId}
          budget={budget}
        />
      )}
      <Header />
      <section>
        <div className="left-container">
          <Balance />
          <IncomeExpenses />
          <TransactionList openModal={openModal} />
        </div>
        <div className="middle-container">
          <AddTransaction />
          <AddBudget />
        </div>
        <div className="right-container">
          <BudgetList
            setOpenModal={setOpenModal}
            // setBudgetTitle={setBudgetTitle}
            // setBudgetId={setBudgetId}
            setBudget={setBudget}
          />
        </div>
      </section>
      {/* tyring to display on whole page */}
    </GlobalProvider>
  );
}

export default App;
