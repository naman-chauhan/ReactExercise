import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car insurance ", amount: 293.42, date: new Date(2022, 2, 28) },
    { title: "truck insurance ", amount: 193.22, date: new Date(2021, 2, 23) },
    { title: "bike insurance ", amount: 243.62, date: new Date(2019, 7, 18) },
    { title: "auto insurance ", amount: 193.12, date: new Date(2021, 4, 11) },
    { title: "train insurance ", amount: 243.82, date: new Date(2021, 2, 15) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
