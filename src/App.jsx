import { useState , useEffect , useRef} from 'react'
import './App.css'
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';

function App() {

  const [transactions, setTransactions] = useState(() => {
  const saved = localStorage.getItem("smartBudgetTransactions");
  return saved ? JSON.parse(saved) : [];
});
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const amounts = transactions.map(transaction => transaction.amount);
  const totalBalance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); 
  const income = amounts.filter(item => item > 0).reduce((acc, item)=> (acc += item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
  
  const addTransaction = () => {
    if (text.trim() === "" || amount === "") return;
    const newTransaction = {
      id: Date.now(),
      text: text,
      amount: Number(amount)
    };
    setTransactions([newTransaction, ...transactions]);
    setText("");
    setAmount("");
  };
  const deleteTransaction = (id) => {
  setTransactions(transactions.filter(transaction => transaction.id !== id));
};
useEffect(() => {
  localStorage.setItem("smartBudgetTransactions", JSON.stringify(transactions));
}, [transactions]);


  return (
    <div className="container">
      <h2>متتبع المصاريف الذكي</h2>
      <Balance totalBalance={totalBalance} />
      <IncomeExpenses income={income} expense={expense} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
      <AddTransaction text={text} setText={setText} amount={amount} setAmount={setAmount} addTransaction={addTransaction} />
      
    </div>
  )
}

export default App
