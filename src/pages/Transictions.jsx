import { Link } from "react-router-dom";

export default function Transactions() {
  // Placeholder array
  const transactions = [
    { id: 1, description: "Groceries", amount: -40 },
    { id: 2, description: "Salary", amount: 1000 },
  ];

  return (
    <div>
      <h2>Transactions</h2>
      <ul className="list-group">
        {transactions.map((tx) => (
          <li className="list-group-item" key={tx.id}>
            <Link to={`/transactions/${tx.id}`}>
              {tx.description}: ${tx.amount}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
