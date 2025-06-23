import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const { role } = useSelector((state) => state.auth);

  return (
    <div className="bg-light border-end" style={{ width: "220px", height: "100vh", position: "fixed" }}>
      <div className="sidebar-heading p-3 fw-bold">Menu</div>
      <div className="list-group list-group-flush">
        <Link to="/dashboard" className="list-group-item list-group-item-action">
          Dashboard
        </Link>
        <Link to="/transactions" className="list-group-item list-group-item-action">
          Transactions
        </Link>
        <Link to="/profile" className="list-group-item list-group-item-action">
          Profile
        </Link>
        {role === "admin" && (
          <Link to="/admin" className="list-group-item list-group-item-action">
            Admin Panel
          </Link>
        )}
        <Link to="/" className="list-group-item list-group-item-action">
          Home
        </Link>
      </div>
    </div>
  );
}
