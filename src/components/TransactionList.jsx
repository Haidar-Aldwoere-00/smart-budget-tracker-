const TransactionList = ({ transactions, deleteTransaction }) => { 
    return (
        <div>
            <h3>سجل العمليات</h3>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        {transaction.text} <span>{transaction.amount}$</span>
                        <button onClick={() => deleteTransaction(transaction.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;
