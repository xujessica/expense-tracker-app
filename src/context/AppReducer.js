// reducer = how we specify the app state changes in response to certain actions
// changes the state by creating a new state and sending it down
export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "ADD_BUDGET":
      return {
        ...state,
        budgets: [action.payload, ...state.budgets],
      };
    case "DELETE_BUDGET":
      return {
        ...state,
        budgets: state.budgets.filter((budget) => budget.id !== action.payload),
      };
    case "ADD_BUDGET_EXPENSE":
      return {
        ...state,
        budgetExpenses: [action.payload, ...state.budgetExpenses],
      };
    case "DELETE_BUDGET_EXPENSE":
      return {
        ...state,
        budgetExpenses: state.budgetExpenses.filter(
          (budgetExpense) => budgetExpense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
