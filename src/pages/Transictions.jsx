// Pagina che mostra l'elenco delle transazioni
// In futuro potrà essere connessa a Redux o a un'API per caricare i dati dinamicamente
import { Link } from "react-router-dom";

export default function Transactions() {
  // Placeholder array // Dati statici temporanei per simulare le transazioni
  const transactions = [
    { id: 1, description: "Groceries", amount: -40 },
    { id: 2, description: "Salary", amount: 1000 },
  ];

  return (
    <div>
      <h2>Transactions</h2>
      <ul className="list-group">
        {/* Itera sulle transazioni e crea un link per ciascuna */}
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

