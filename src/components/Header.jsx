import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">
        Finance Dashboard
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/transactions">Transactions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
